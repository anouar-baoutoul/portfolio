export interface Experience {
  title: string;
  period: string;
  location: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    title: "Projet de gestion bancaire",
    period: "Décembre 2024",
    location: "Projet académique",
    responsibilities: [
      "Développement d'une application de bureau en C++ permettant de gérer les clients, les comptes et les transactions",
      "Implémentation des fonctionnalités : création de comptes, dépôt, retrait, historique des transactions",
    ],
  },
  {
    title: "Plateforme Gestion Ressources Pédagogiques",
    period: "Décembre 2025",
    location: "Projet académique - EMSI",
    responsibilities: [
      "Développement de services web avec Laravel, MySQL et Blade pour l'upload, la présentation et les formulaires de ressources (cours/TPs/examens)",
      "Intégration de recherche avancée, filtres (type/module/niveau/tags), suggestions similaires et tracking vues/téléchargements",
      "Création du schéma relationnel (Ressources, Utilisateurs, Modules, Niveaux, Groupes, Logs), migrations/tests",
      "Développement de requêtes SQL pour dashboards statistiques (vues/mois, top ressources/enseignants)",
    ],
  },
  {
    title: "Système de Surveillance Intelligente d'Examens par IA",
    period: "Avril 2026",
    location: "Python & Flask",
    responsibilities: [
      "Développement d'un système de proctoring en temps réel basé sur la vision par ordinateur pour détecter automatiquement les comportements de triche durant les examens",
      "Détection de l'orientation de la tête et reconnaissance de téléphones mobiles via YOLOv8",
      "Suivi des mouvements suspects avec OpenCV",
      "Interface web Flask pour la surveillance live avec alertes instantanées, capture automatique de snapshots et tableau de bord de monitoring centralisé pour les superviseurs",
    ],
  },
  {
    title: "Salon Booking Platform",
    period: "Avril 2026",
    location: "Architecture Microservices",
    responsibilities: [
      "Conception de 9 microservices indépendants (User, Salon, Booking, Payment, Notification, Review, Category, Service Offering, API Gateway) avec Spring Boot et Spring Cloud Eureka",
      "Communication asynchrone inter-services via RabbitMQ",
      "Authentification OAuth2 avec Keycloak & JWT, notifications temps réel via WebSockets",
      "Intégration des paiements Stripe & Razorpay",
      "Frontend React + Redux Toolkit",
      "Déploiement complet via Docker Compose en une seule commande",
    ],
  },
];