export type Job = {
	title: string;
	techs: string[];
	rows: string[];
};

const jobs: Job[] = [
	{
		title: "Senior Frontend Engineer, Freelance",
		rows: [
			"Working with multiple international clients across fintech, Web3, and SaaS sectors",
			"Led complete frontend rewrite for *KAIO* (formerly Libre Capital), a Web3 platform for institutional tokenized funds partnered with BlackRock and Brevan Howard, rebuilding the entire codebase and designing a shared design system from scratch",
			"Collaborated with *Team Blue* on an ambitious integration project: designed and built a lightweight injectable plugin acting as connective tissue across *60+ SaaS* platforms, enabling seamless cross-site communication and shared state where previously each system operated in isolation",
			"Consistently delivering technical guidance and implementing best practices across client projects",
		],
		techs: ["TypeScript", "React", "Next.js", "Playwright", "Cypress"],
	},
	{
		title: "Frontend Technical Lead @ Deliveristo",
		rows: [
			"Led frontend architecture for a B2B SaaS platform serving the Italian food distribution market",
			"Managed full migration from Vue.js to React + Next.js with server-side components, reducing page load time from 3.5s to 150ms (*95% improvement*), significantly boosting user retention",
			"Mentored junior developers, led code reviews and defined frontend best practices adopted across the team",
			"Introduced modern testing strategy, increasing test coverage from *0% to 90%*",
			"Rebuilt mobile application in Flutter, eliminating *95% of legacy bugs*"
		],
		techs: ["TypeScript", "React", "Next.js", "GraphQL", "React Native", "Flutter"],
	},
	{
		title: "Senior Frontend Engineer @ tal&dev",
		rows: [
			"Migrated entire codebase from JavaScript to TypeScript with a functional programming approach",
			"Improved application performance by *70%* on a production SaaS platform",
			"Increased test coverage to *97%* and implemented functional programming principles across the codebase",
		],
		techs: ["TypeScript", "React", "Next.js", "GraphQL", "PostCSS"],
	}
];

export default jobs;
