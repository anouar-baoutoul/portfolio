export interface Education {
  degree: string;
  period: string;
  institution: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    degree: "Cycle d'Ingénieur en Informatique et Réseaux",
    period: "2025 - Présent",
    institution: "EMSI Marrakech",
    highlights: [
      "Classes préparatoires intégrées (2023 - 2025)",
      "Spécialité : Génie Informatique et Réseaux",
    ],
  },
  {
    degree: "Baccalauréat Sciences Physiques",
    period: "2022 - 2023",
    institution: "Joussour Al Maarifa",
    highlights: [],
  },
];