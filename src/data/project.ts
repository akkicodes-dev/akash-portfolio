export interface ProjectInterface {
  title: string;
  about: string;
  technologies: Array<string>;
  image: string;
  link: string;
  categories?: Array<string>;
}

export const projects: ProjectInterface[] = [
  {
    title: "Career Explorer",
    about: `A complete career guidance mobile application designed to help students navigate their future with structured modules, clean UI, and a fully integrated Firebase backend. It provides real-time guidance, authentication, dynamic content delivery, and modern UI built for students seeking clarity in their career journey.`,
    technologies: ["Java", "XML", "Firebase", "Android", "Firestore"],
    image: "/projects/Carrer_Guru_portfolio.png",
    link: "https://github.com/akkicodes-dev/Career_Explorer-",
    categories: ["personal"],
  },

  {
    title: "NoteFlow",
    about: `A minimal yet powerful Jetpack Compose based notes application built with smooth animations, persistent local storage, and a stunning UI. Engineered using MVVM architecture, NoteFlow offers a modern Android experience with fluid transitions and blazing-fast performance.`,
    technologies: ["Kotlin", "Jetpack Compose", "Material 3", "MVVM"],
    image: "/projects/crowd3-portfolio.png",
    link: "https://github.com/akkicodes-dev/NoteFlow",
    categories: ["personal"],
  },

  {
    title: "Crowd3 – Web3 Crowdfunding",
    about: `A decentralized crowdfunding platform powered by smart contracts on the blockchain. Crowd3 enables users to raise funds in a transparent, trustless and fully verifiable environment. Every contribution and transaction is backed by smart contract logic, ensuring full security and transparency.`,
    technologies: ["Solidity", "Web3.js", "Blockchain", "Smart Contracts"],
    image: "/projects/noteflow- main-portfolio.png",
    link: "https://github.com/akkicodes-dev/crowd3",
    categories: ["personal"],
  },
];