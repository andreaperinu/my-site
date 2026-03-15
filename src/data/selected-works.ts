export type SelectedWork = {
  title: string;
  description: string;
  result: string;
  link?: string;
};

const selectedWorks: SelectedWork[] = [
  {
    title: "KAIO",
    description: "Web3 platform for institutional tokenized funds (BlackRock, Brevan Howard)",
    result: "Full frontend rewrite + shared design system from scratch",
    link: "https://www.kaio.xyz",
  },
  {
    title: "Team Blue",
    description: "Lightweight injectable plugin bridging 60+ independent SaaS platforms",
    result: "Enabled cross-site communication and shared state across previously isolated systems",
  },
  {
    title: "Deliveristo",
    description: "B2B SaaS for food distribution — full rewrite of web app and mobile app",
    result: "Page load from 3.5s to 150ms · test coverage from 0% to 90% · 95% of legacy bugs eliminated",
  },
];

export default selectedWorks;
