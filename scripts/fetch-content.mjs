/**
 * Clearing — content pipeline
 * Fetches from arXiv, TechCrunch, VentureBeat, Hacker News, and NewsAPI (optional).
 * Classifies each article by domain, scores relevance, writes Markdown to src/content/articles/.
 * Run: node scripts/fetch-content.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname  = path.dirname(fileURLToPath(import.meta.url));
const ARTICLES   = path.join(__dirname, '../src/content/articles');
const MAX_PER_SOURCE = 5;
const FETCH_TIMEOUT  = 12000;

// ── RSS Sources ────────────────────────────────────────────────────────────────
const RSS_SOURCES = [
  { url: 'https://arxiv.org/rss/cs.AI', forceDomain: 'research', author: 'arXiv',       isArxiv: true  },
  { url: 'https://arxiv.org/rss/cs.LG', forceDomain: 'research', author: 'arXiv',       isArxiv: true  },
  { url: 'https://techcrunch.com/tag/artificial-intelligence/feed/', forceDomain: null,  author: 'TechCrunch'  },
  { url: 'https://venturebeat.com/category/ai/feed/',               forceDomain: null,  author: 'VentureBeat' },
];

// ── Utility ───────────────────────────────────────────────────────────────────
const delay = ms => new Promise(r => setTimeout(r, ms));

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 55);
}

function stripHtml(html = '') {
  return html
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g,  '&')
    .replace(/&lt;/g,   '<')
    .replace(/&gt;/g,   '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g,  "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractTag(xml, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m  = xml.match(re);
  return m ? stripHtml(m[1]) : '';
}

function parseRSS(xml) {
  const items = [];
  const re = /<item[\s>]([\s\S]*?)<\/item>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const raw = m[1];
    items.push({
      title: extractTag(raw, 'title'),
      link:  (extractTag(raw, 'link') || extractTag(raw, 'guid')).replace(/\s/g, ''),
      desc:  extractTag(raw, 'content:encoded') || extractTag(raw, 'description'),
      date:  extractTag(raw, 'pubDate') || extractTag(raw, 'dc:date'),
    });
  }
  return items.filter(i => i.title && i.link);
}

function cleanArxivTitle(t) {
  return t.replace(/\s*\(arXiv:[^)]+\)\s*$/g, '').trim();
}

function parseDateStr(str) {
  try {
    const d = new Date(str);
    if (!isNaN(d.getTime())) return d.toISOString().split('T')[0];
  } catch {}
  return new Date().toISOString().split('T')[0];
}

// ── Domain classification ─────────────────────────────────────────────────────
function classifyDomain(title, desc) {
  const t = (title + ' ' + desc).toLowerCase();
  if (/\b(loan|bank|fintech|fraud|compliance|credit|lending|mortgage|payment|financial|underwriting|regulator|treasury)\b/.test(t))
    return 'fintech';
  if (/\b(hiring|hr|human.resources|employee|workforce|recruitment|talent|resume|interview|personnel|onboarding)\b/.test(t))
    return 'hr';
  if (/\b(marketing|personaliz|campaign|brand|advertis|customer.engage|email.market|conversion|seo|content.strateg)\b/.test(t))
    return 'marketing';
  if (/\b(arxiv|paper|preprint|benchmark|model|inference|training|dataset|neural|transformer|llm|moe|mixture.of.experts|attention|diffusion|finetun|quantiz|distillat|speculative|retrieval.augment)\b/.test(t))
    return 'research';
  return 'all';
}

function scoreRelevance(title, desc, domain) {
  const t = (title + ' ' + desc).toLowerCase();
  let score = 3;
  if (/\b(gpt|claude|gemini|llama|mistral|qwen|sonnet|opus|haiku)\b/.test(t)) score++;
  if (/\b(inference|efficient|quantiz|pruning|distillat|moe|mixture.of.experts|speculative.decod|kv.cache)\b/.test(t)) score++;
  if (domain === 'research') score = Math.min(score + 1, 5);
  return Math.min(score, 5);
}

const GRADIENT = { fintech: 'grad-1', hr: 'grad-2', marketing: 'grad-3', research: 'grad-4', all: 'grad-1' };

function estimateReadTime(text) {
  return Math.max(1, Math.ceil(text.split(/\s+/).filter(Boolean).length / 200));
}

// ── Markdown builder ──────────────────────────────────────────────────────────
function buildMarkdown({ title, dek, body, domain, relevance, author, date, gradient, link }) {
  const esc = s => String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ');
  return `---
title: "${esc(title)}"
dek: "${esc(dek)}"
domain: ${domain}
relevance: ${relevance}
author: "${esc(author)}"
readTime: ${estimateReadTime(body)}
date: ${date}
featured: false
gradient: ${gradient}
---

${body}

---

*Source: [${author}](${link})*
`;
}

// ── Fetchers ──────────────────────────────────────────────────────────────────
async function fetchRSS(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Clearing/1.0 (content-pipeline; +https://clearing.news)' },
    signal:  AbortSignal.timeout(FETCH_TIMEOUT),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return parseRSS(await res.text());
}

async function fetchHackerNews() {
  const url = 'https://hn.algolia.com/api/v1/search_by_date'
    + '?tags=story&query=artificial+intelligence+LLM&hitsPerPage=15&numericFilters=points>40';
  const res  = await fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data.hits
    .filter(h => h.url && h.title)
    .map(h => ({
      title:  h.title,
      link:   h.url,
      desc:   h.title,
      date:   h.created_at,
      author: 'Hacker News',
    }));
}

async function fetchNewsAPI(key) {
  const url = `https://newsapi.org/v2/everything?q=%22artificial+intelligence%22&language=en&sortBy=publishedAt&pageSize=10&apiKey=${key}`;
  const res  = await fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data.status !== 'ok') throw new Error(data.message);
  return data.articles
    .filter(a => a.title && a.url && !a.title.includes('[Removed]'))
    .map(a => ({
      title:  a.title,
      link:   a.url,
      desc:   a.description || a.content || a.title,
      date:   a.publishedAt,
      author: a.source?.name || 'NewsAPI',
    }));
}

// ── Process one item ──────────────────────────────────────────────────────────
function processItem({ title, link, desc, date, author }, { forceDomain, isArxiv } = {}) {
  const cleanTitle = isArxiv ? cleanArxivTitle(title) : title;
  if (!cleanTitle || cleanTitle.length < 10) return null;

  const slug = slugify(cleanTitle);
  if (!slug) return null;

  const domain    = forceDomain ?? classifyDomain(cleanTitle, desc);
  const relevance = scoreRelevance(cleanTitle, desc, domain);
  const body      = (desc || cleanTitle).slice(0, 1800);
  const dek       = (desc || cleanTitle).slice(0, 220).replace(/\s\S*$/, '...');

  return {
    slug,
    md: buildMarkdown({
      title:    cleanTitle.slice(0, 120),
      dek,
      body,
      domain,
      relevance,
      author:   author || 'Clearing',
      date:     parseDateStr(date),
      gradient: GRADIENT[domain] || 'grad-1',
      link,
    }),
  };
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  if (!fs.existsSync(ARTICLES)) fs.mkdirSync(ARTICLES, { recursive: true });

  const existing = new Set(
    fs.readdirSync(ARTICLES)
      .filter(f => f.endsWith('.md'))
      .map(f => f.replace('.md', ''))
  );

  let added = 0;

  // RSS sources
  for (const source of RSS_SOURCES) {
    try {
      console.log(`Fetching ${source.url}...`);
      const items = await fetchRSS(source.url);
      let   count = 0;

      for (const item of items) {
        if (count >= MAX_PER_SOURCE) break;
        const result = processItem(
          { ...item, author: source.author },
          { forceDomain: source.forceDomain, isArxiv: source.isArxiv }
        );
        if (!result || existing.has(result.slug)) continue;

        fs.writeFileSync(path.join(ARTICLES, `${result.slug}.md`), result.md, 'utf8');
        existing.add(result.slug);
        count++;
        added++;
        console.log(`  [+] ${result.slug}`);
      }
    } catch (err) {
      console.error(`  [!] ${source.author}: ${err.message}`);
    }
    await delay(1000); // polite rate limiting
  }

  // Hacker News
  try {
    console.log('Fetching Hacker News...');
    const items = await fetchHackerNews();
    let   count = 0;

    for (const item of items) {
      if (count >= MAX_PER_SOURCE) break;
      const result = processItem(item);
      if (!result || existing.has(result.slug)) continue;

      fs.writeFileSync(path.join(ARTICLES, `${result.slug}.md`), result.md, 'utf8');
      existing.add(result.slug);
      count++;
      added++;
      console.log(`  [+] ${result.slug}`);
    }
  } catch (err) {
    console.error(`  [!] HackerNews: ${err.message}`);
  }

  // NewsAPI (optional — set NEWS_API_KEY env var)
  const newsKey = process.env.NEWS_API_KEY;
  if (newsKey) {
    try {
      console.log('Fetching NewsAPI...');
      const items = await fetchNewsAPI(newsKey);
      let   count = 0;

      for (const item of items) {
        if (count >= MAX_PER_SOURCE) break;
        const result = processItem(item);
        if (!result || existing.has(result.slug)) continue;

        fs.writeFileSync(path.join(ARTICLES, `${result.slug}.md`), result.md, 'utf8');
        existing.add(result.slug);
        count++;
        added++;
        console.log(`  [+] ${result.slug}`);
      }
    } catch (err) {
      console.error(`  [!] NewsAPI: ${err.message}`);
    }
  } else {
    console.log('NewsAPI: skipped (NEWS_API_KEY not set)');
  }

  console.log(`\nDone — ${added} new article(s) added.`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
