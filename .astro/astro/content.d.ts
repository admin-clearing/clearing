declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"adversarial-social-epistemology-for-assemblies-of-human.md": {
	id: "adversarial-social-epistemology-for-assemblies-of-human.md";
  slug: "adversarial-social-epistemology-for-assemblies-of-human";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ai-hiring-explainability.md": {
	id: "ai-hiring-explainability.md";
  slug: "ai-hiring-explainability";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ai-integrated-models-for-assessing-agricultural-resilie.md": {
	id: "ai-integrated-models-for-assessing-agricultural-resilie.md";
  slug: "ai-integrated-models-for-assessing-agricultural-resilie";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"aligning-clinical-needs-and-ai-capabilities-a-survey-on.md": {
	id: "aligning-clinical-needs-and-ai-capabilities-a-survey-on.md";
  slug: "aligning-clinical-needs-and-ai-capabilities-a-survey-on";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"alignment-plausibility-a-new-standard-for-assuring-ai-i.md": {
	id: "alignment-plausibility-a-new-standard-for-assuring-ai-i.md";
  slug: "alignment-plausibility-a-new-standard-for-assuring-ai-i";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"amd-launches-gaia-open-source-project-for-running-llms-.md": {
	id: "amd-launches-gaia-open-source-project-for-running-llms-.md";
  slug: "amd-launches-gaia-open-source-project-for-running-llms-";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"claude-code-costs-up-to-200-a-month-goose-does-the-same.md": {
	id: "claude-code-costs-up-to-200-a-month-goose-does-the-same.md";
  slug: "claude-code-costs-up-to-200-a-month-goose-does-the-same";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"context-graphs-for-proactive-enterprise-agents.md": {
	id: "context-graphs-for-proactive-enterprise-agents.md";
  slug: "context-graphs-for-proactive-enterprise-agents";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"converge-bio-raises-25m-backed-by-bessemer-and-execs-fr.md": {
	id: "converge-bio-raises-25m-backed-by-bessemer-and-execs-fr.md";
  slug: "converge-bio-raises-25m-backed-by-bessemer-and-execs-fr";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"data-center-demand-drives-66-surge-in-natural-gas-power.md": {
	id: "data-center-demand-drives-66-surge-in-natural-gas-power.md";
  slug: "data-center-demand-drives-66-surge-in-natural-gas-power";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"frontier-model-pricing.md": {
	id: "frontier-model-pricing.md";
  slug: "frontier-model-pricing";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"google-just-redesigned-the-search-box-for-the-first-tim.md": {
	id: "google-just-redesigned-the-search-box-for-the-first-tim.md";
  slug: "google-just-redesigned-the-search-box-for-the-first-tim";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"harvard-dropouts-to-launch-8216always-on8217-ai-smart-g.md": {
	id: "harvard-dropouts-to-launch-8216always-on8217-ai-smart-g.md";
  slug: "harvard-dropouts-to-launch-8216always-on8217-ai-smart-g";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"how-one-ai-startup-is-helping-rice-farmers-battle-clima.md": {
	id: "how-one-ai-startup-is-helping-rice-farmers-battle-clima.md";
  slug: "how-one-ai-startup-is-helping-rice-farmers-battle-clima";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"kazuo-ishiguro-uses-artificial-intelligence-to-reveal-t.md": {
	id: "kazuo-ishiguro-uses-artificial-intelligence-to-reveal-t.md";
  slug: "kazuo-ishiguro-uses-artificial-intelligence-to-reveal-t";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"kv-cache-expert-coactivation.md": {
	id: "kv-cache-expert-coactivation.md";
  slug: "kv-cache-expert-coactivation";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"listen-labs-raises-69m-after-viral-billboard-hiring-stu.md": {
	id: "listen-labs-raises-69m-after-viral-billboard-hiring-stu.md";
  slug: "listen-labs-raises-69m-after-viral-billboard-hiring-stu";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"llt-local-linear-transformer-for-pde-operator-learning.md": {
	id: "llt-local-linear-transformer-for-pde-operator-learning.md";
  slug: "llt-local-linear-transformer-for-pde-operator-learning";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"maryland-citizens-hit-with-2b-power-grid-upgrade-for-ou.md": {
	id: "maryland-citizens-hit-with-2b-power-grid-upgrade-for-ou.md";
  slug: "maryland-citizens-hit-with-2b-power-grid-upgrade-for-ou";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"meta-bought-1-gw-of-solar-this-week.md": {
	id: "meta-bought-1-gw-of-solar-this-week.md";
  slug: "meta-bought-1-gw-of-solar-this-week";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"moe-routing-entropy.md": {
	id: "moe-routing-entropy.md";
  slug: "moe-routing-entropy";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"omni-sleep-a-sleep-foundation-model-via-hierarchical-co.md": {
	id: "omni-sleep-a-sleep-foundation-model-via-hierarchical-co.md";
  slug: "omni-sleep-a-sleep-foundation-model-via-hierarchical-co";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"railway-secures-100-million-to-challenge-aws-with-ai-na.md": {
	id: "railway-secures-100-million-to-challenge-aws-with-ai-na.md";
  slug: "railway-secures-100-million-to-challenge-aws-with-ai-na";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"real-time-personalization.md": {
	id: "real-time-personalization.md";
  slug: "real-time-personalization";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"recolora-spectrum-aware-recursive-consolidation-for-con.md": {
	id: "recolora-spectrum-aware-recursive-consolidation-for-con.md";
  slug: "recolora-spectrum-aware-recursive-consolidation-for-con";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"salesforce-rolls-out-new-slackbot-ai-agent-as-it-battle.md": {
	id: "salesforce-rolls-out-new-slackbot-ai-agent-as-it-battle.md";
  slug: "salesforce-rolls-out-new-slackbot-ai-agent-as-it-battle";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"show-hn-ai-less-hacker-news.md": {
	id: "show-hn-ai-less-hacker-news.md";
  slug: "show-hn-ai-less-hacker-news";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sonnet-5-loan-underwriting.md": {
	id: "sonnet-5-loan-underwriting.md";
  slug: "sonnet-5-loan-underwriting";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"towards-the-explainability-of-temporal-graph-networks-v.md": {
	id: "towards-the-explainability-of-temporal-graph-networks-v.md";
  slug: "towards-the-explainability-of-temporal-graph-networks-v";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"who-gets-missed-in-the-tail-thresholded-subgroup-underd.md": {
	id: "who-gets-missed-in-the-tail-thresholded-subgroup-underd.md";
  slug: "who-gets-missed-in-the-tail-thresholded-subgroup-underd";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"yann-lecun-pioneer-of-ai-thinks-todays-llms-are-nearly-.md": {
	id: "yann-lecun-pioneer-of-ai-thinks-todays-llms-are-nearly-.md";
  slug: "yann-lecun-pioneer-of-ai-thinks-todays-llms-are-nearly-";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
