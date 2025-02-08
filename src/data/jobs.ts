export type Job = {
	title: string;
	techs: string[];
	description: string;
};

const jobs: Job[] = [
	{
		title: "Frontend Technical Lead @ Deliveristo",
		description: "Transformed platform from Vue.js to React/Next.js with server-side components</br>Reduced initial page load times by *95%* (from *3.5s to 150ms*)</br>Rebuilt mobile app in Flutter, eliminating *95%* of legacy bugs</br>Increased test coverage from *0% to 90%*",
		techs: ["TypeScript", "React", "Apollo GraphQL", "Next.js", "PostCSS", "Jest", "Cypress", "Flutter"],
	},
	{
		title: "Senior Software Engineer @ tal&dev",
		description: "Migrated from JavaScript to TypeScript with functional approach</br>Improved performance by *70%* and increased test coverage to *97%*</br>Implemented functional programming principles across codebase",
		techs: ["TypeScript", "React", "Apollo GraphQL", "Next.js", "PostCSS", "Jest", "Cypress", "Flutter"],
	},
	{
		title: "Senior Software Engineer @ BEE by MailUp Group",
		description: "Led application rewrite with fp-ts, reducing side effects by *90%*</br>Reduced load times by *2.5s* through architecture optimization</br>Built custom state management improving performance by *60%*",
		techs: ["TypeScript", "React", "Fp-ts", "styled-components", "Jest", "Enzyme"],
	}
];

export default jobs;
