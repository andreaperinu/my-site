export type Job = {
	title: string;
	techs: string[];
	description: string;
};

const jobs: Job[] = [
	{
		title: "Frontend Technical Lead",
		description: "I led the frontend department of Deliveristo, where my primary responsibility was to deliver our two main products consisting of a web app and a mobile application",
		techs: ["TypeScript", "React", "Apollo GraphQL", "Next.js", "PostCSS", "Jest", "Cypress", "Flutter"],
	},
	{
		title: "Senior Software Engineer",
		description: "I led the progressive architecture rewrite of the company's product, BEEPRO, transitioning from JavaScript to TypeScript and adopting the functional programming paradigm",
		techs: ["TypeScript", "React", "Fp-ts", "styled-components", "Jest", "Enzyme"],
	},
	{
		title: "Go Engineer",
		description: "In order to broaden my skill set, I contributed to a complex microservices-based project for Deutsche Telekom, utilizing Golang and its associated tools as part of a six-person development team",
		techs: ["Go"],
	},
];

export default jobs;
