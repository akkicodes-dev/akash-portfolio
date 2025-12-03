export interface TestimonialInterface {
  name: string;
  feedback: string;
  role: string;
}

export const testimonials: TestimonialInterface[] = [
  {
    name: "Mentor",
    feedback:
      "Akash is a highly driven Android developer with strong problem-solving skills. His consistency and growth mindset make him stand out.",
    role: "Technical Mentor",
  },
  {
    name: "Community Member",
    feedback:
      "His leadership in Unstop Igniters Club brought real change. He inspires students to build and innovate.",
    role: "Club Member",
  },
];
