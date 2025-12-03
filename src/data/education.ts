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
      image: "/educations/pdea_logo.webp", // Make sure to add this image to your assets
    },
    // Estimated based on your current 3rd-year status in late 2025
    start: "01/08/2023", 
    end: "01/06/2027", 
    experiences: [
      {
        role: "Student Lead – CodeLite 2.0 Hackathon",
        start: "01/08/2025",
        end: "01/12/2025",
        description: `Lead organizer for the 'CodeLite 2.0' national-level hackathon. Spearheaded sponsorship outreach, drafted official communications, and coordinated with corporate partners to secure funding and support for the event.`,
      },
      {
        role: "Smart India Hackathon (SIH) Aspirant",
        start: "01/09/2025",
        end: "01/12/2025",
        description: `Evaluated and developed project proposals for SIH, specifically focusing on 'Women Safety Analytics' and 'Conversational Image Recognition Chatbots'. Worked on architectural planning and feasibility analysis for these problem statements.`,
      },
      {
        role: "Android Developer & Competitive Programmer",
        start: "01/01/2024",
        end: "01/12/2025",
        description: `Actively learning Kotlin and Jetpack Compose for modern Android development. Concurrently practicing competitive programming on LeetCode to strengthen data structure and algorithm skills.`,
      },
    ],
  },
];