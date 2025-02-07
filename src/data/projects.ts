export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Next secure auth",
    techs: ["ReactJS (NextJS)", "jsonwebtoken"],
    link: "https://github.com/andreaperinu/next-secure-auth",
  },
  {
    title: "fp-ts showcase",
    techs: ["ReactJS, fp-ts", "TypeScript", "Jest", "Enzyme", "@testing-library/react-hooks"],
    link: "https://github.com/andreaperinu/fp-ts-showcase",
  },
  {
    title: "Portfolio / Reusable components",
    techs: ["ReactJS", "styled-components"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
