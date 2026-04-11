export const projectsData = [
  {
    id: 1,
    title: "Salon Booking Platform",
    description:
      "Plateforme de réservation de salons en architecture microservices. Gestion des rendez-vous, paiements en ligne (Stripe & Razorpay), notifications temps réel via WebSockets, authentification sécurisée avec Keycloak & JWT, et communication inter-services via RabbitMQ & OpenFeign.",
    technologies: [
      "Spring Boot", "Spring Cloud", "JPA", "Hibernate",
      "RabbitMQ", "Eureka", "OpenFeign", "Keycloak", "JWT", "WebSockets",
      "Stripe", "Razorpay", "MySQL",
      "React", "Redux Toolkit", "Tailwind CSS", "Axios",
      "Docker", "Docker Compose",
    ],
    github: "https://github.com/anouar-baoutoul/Salon-Booking",
    live: "",
    date: "Mai 2026",
    image: "/projects/project-2.webp",
  },
  {
    id: 2,
    title: "Plateforme Gestion Ressources Pédagogiques",
    description:
      "Application web de gestion de ressources pédagogiques (cours, TPs, examens) avec upload, recherche avancée par filtres (type, module, niveau, tags), suggestions similaires, tracking des vues/téléchargements et schéma relationnel complet.",
    technologies: ["Laravel", "MySQL", "Blade", "PHP"],
    github: "https://github.com/anouar-baoutoul/gestion-des-ressource-pedagogique",
    live: "",
    date: "Décembre 2025",
    image: "/projects/project-1.png",
  },
  {
    id: 3,
    title: "Projet de Gestion Bancaire",
    description:
      "Application bureau en C++ permettant de gérer les clients, les comptes et les transactions (création, dépôt, retrait, historique).",
    technologies: ["C++"],
    github: "https://github.com/anouar-baoutoul/gestion-bancaire-",
    live: "",
    date: "Décembre 2024",
    image: "/projects/project-3.webp",
  },
  {
    id: 4,
    title: "Système de Surveillance Intelligente d'Examens par IA",
    description:
      "Développement d'un système de proctoring en temps réel basé sur la vision par ordinateur, avec détection automatique de comportements de triche pendant les examens. Le système intègre la détection de l'orientation de la tête, la reconnaissance de téléphones mobiles via YOLOv8, et le suivi des mouvements suspects avec OpenCV. Une interface web Flask assure la surveillance en direct avec alertes instantanées, capture automatique de snapshots et tableau de bord centralisé pour les superviseurs.",
    technologies: ["Python", "Flask", "OpenCV", "YOLOv8", "Computer Vision"],
    github: "https://github.com/anouar-baoutoul/exam-cheating-detection",
    live: "",
    date: "2026",
    image: "/projects/project-4.jpg",
  },
];