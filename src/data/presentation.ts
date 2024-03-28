type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};
// Senior Frontend Engineer specialized in creating complex single page applications and apps that scales. TypeScript | React | Next.JS | GraphQL | Flutter

const presentation: Presentation = {
  mail: "andrea.perinu@gmail.com",
  title: "Hi, I’m Andrea 👋",
  // profile: "/profile.webp",
  description:
    "I'm a *Freelance Senior Software Engineer* specialized in developing complex, scalable single-page applications and apps. My primary stack includes *TypeScript, React, Next.JS, GraphQL and Flutter*. Outside of work, I enhance my personal skills by reading books, watching courses and working on personal projects.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/andrea_perinu",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/andrea-perinu",
    },
    {
      label: "Github",
      link: "https://github.com/andreaperinu",
    },
  ],
};

export default presentation;
