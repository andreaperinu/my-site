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

const presentation: Presentation = {
  mail: "andrea.perinu@gmail.com",
  title: "Hi, I’m Andrea 👋",
  profile: "/profile.webp",
  description:
    "*Senior React / Next.js Engineer* with 10+ years of experience building high-performance web and mobile applications. I specialize in *frontend architecture*, *performance optimization* and *modernizing legacy systems*, with a strong functional programming background. I've delivered solutions for global brands including *FIFA*, *UEFA*, *Olympics*, *NHK* and *Deutsche Telekom*, and currently work with international clients across fintech, Web3 and SaaS. Outside of work I keep growing by reading, taking courses and working on personal projects.",
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
