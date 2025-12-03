export interface EducationUniversity {
  name: string;
  originalName: string;
  abbreviation: string;
  image: string;
}

export interface EducationExperience {
  role: string;
  start: string;
  end: string;
  description: string;
}

export interface EducationInterface {
  title: string;
  abbreviation: string;
  university: EducationUniversity;
  start: string;
  end: string;
  experiences: Array<EducationExperience>;
}

export const educations: EducationInterface[] = [
  {
    title: "Bachelor of Engineering in Computer Engineering",
    abbreviation: "B.E.",
    university: {
      name: "PDEA's College of Engineering, Manjari",
      originalName: "Pune District Education Association's College of Engineering",
      abbreviation: "PDEA COEM",
      image: "/educations/pdea.jpeg", 
    },
    start: "01/08/2023",
    end: "01/06/2027",
    experiences: [
      {
        role: "Lead Organizer – CodeLite 2.0 National Hackathon",
        start: "01/08/2025",
        end: "01/03/2026",
        description: `Orchestrated the execution of 'CodeLite 2.0', a national-level hackathon. Managed cross-functional teams, spearheaded corporate sponsorship outreach, and established strategic partnerships to secure funding and resources, ensuring a seamless event experience for 500+ participants.`,
      },
      {
        role: "Android Engineer (Kotlin & Jetpack Compose)",
        start: "01/01/2022",
        end: "Present",
        description: `Engineered high-performance mobile applications using Modern Android Development (MAD) practices. implemented Clean Architecture and MVVM design patterns with Jetpack Compose. Focused on state management, local data persistence (Room), and creating responsive, user-centric interfaces.`,
      },
      {
        role: "Algorithmic Problem Solver & DSA Specialist",
        start: "01/01/2022",
        end: "Present",
        description: `Demonstrated expertise in Data Structures and Algorithms through competitive programming. Proficient in optimizing Time and Space complexity for large-scale problems using Graph Theory (DFS/BFS), Dynamic Programming, and Advanced Tree Structures. Consistently solving complex challenges on LeetCode and CodeChef.`,
      },
    ],
  },
];