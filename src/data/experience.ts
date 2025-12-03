export type ExperienceType =
  | "full-time"
  | "part-time"
  | "freelancer"
  | "intern"
  | "volunteer";

export interface ExperienceInterface {
  name: string;
  logo: string;
  role: string;
  type: ExperienceType;
  description: string;
  achievements: Array<string>;
  start: string;
  end: string | null;
  src: string | null;
  alt: string | null;
}

export const experiences: ExperienceInterface[] = [
  {
    name: "Unstop Igniters Club",
    logo: "/work/Unstop-logo-portfolio.ico",
    role: "Lead",
    type: "Presedent",
    description:
      "Leading one of the most active student tech communities in the campus with a focus on hackathons, technical events, student mentorship, and building a culture of innovation.",
    achievements: [
      "Organized high-impact hackathons & technical workshops",
      "Collaborated with multiple colleges & tech clubs for community growth",
      "Managed a tech community with leadership, planning & execution",
      "Improved campus engagement with strategic initiatives",
      "Built an ecosystem for students to learn and showcase their skills"
    ],
    start: "01/01/2024",
    end: null,
    src: null,
    alt: null,
  },
  {
    name: "GDG (Google Developer Group)",
    logo: "/work/gdg-logo-portfolio.jpg",
    role: "Web Dev Lead",
    type: "Core Member",
    description:
      "Guided students in understanding modern web and Android development by hosting sessions, creating learning tracks and collaborating with GDG mentors.",
    achievements: [
      "Conducted technical learning sessions on modern web dev",
      "Created structured learning tracks for beginners",
      "Mentored junior developers in projects & learning",
      "Contributed to community-driven tech culture",
      "Collaborated with GDG events and teams"
    ],
    start: "01/08/2023",
    end: "01/01/2024",
    src: null,
    alt: null,
  },
  {
    name: "MountReach Solutions Pvt. Ltd.",
    logo: "/work/Mountreach-portfolio.jpeg",
    role: "Android Developer Intern",
    type: "intern",
    description:
      "Worked on real production-level Android features, building scalable, optimized, and user-friendly mobile experiences using modern development principles.",
    achievements: [
      "Implemented Firebase authentication and Firestore data structures",
      "Integrated REST APIs with efficient data handling",
      "Improved app UI & UX using XML & Compose",
      "Optimized app performance & reduced bugs",
      "Gained hands-on real-world production experience"
    ],
    start: "01/04/2024",
    end: "01/08/2024",
    src: null,
    alt: null,
  },
];