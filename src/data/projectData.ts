// Asset imports remain the same
import luxCartApp from "../../public/assets/projects/luxcartApp.webp";
import Netowrked from "../../public/assets/projects/networked.png";
import waveBible from "../../public/assets/projects/waveBibleApp.png";
import speedApp from "../../public/assets/projects/speedApp.webp";
import scrapyT from "../../public/assets/projects/scrapyT.png";
import basilWholesale from "../../public/assets/projects/basilMerchant.png";

export const projectData = [
  {
    image: Netowrked,
    title: "Networked AI",
    description:
      "Enterprise AI ecosystem for event orchestration and real-time networking. Optimized high-concurrency event discovery and digital exchange modules, integrating Apple Pay and Stripe for seamless global transactions across web and mobile platforms.",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Stripe",
      "Apple Pay",
      "Real-time Logic",
    ],
    liveUrl: "https://app.net-worked.ai/",
    githubUrl: "https://apps.apple.com/us/app/networked-ai-invites/id6471849642",
    status: "Production",
  },
  {
    image: basilWholesale, // Representing Enterprise FinTech
    title: "IFIC Bank EKYC Portal",
    description:
      "Architected a bank-grade EKYC onboarding pipeline for IFIC Bank. Engineered secure data collection workflows and automated verification logic to streamline customer registration while maintaining strict financial compliance standards.",
    technologies: [
      "PHP/Laravel",
      "PostgreSQL",
      "Security Protocols",
      "EKYC Integration",
      "Microservices",
    ],
    liveUrl: "#", // Restricted Internal System
    githubUrl: "#",
    status: "Enterprise",
  },
  {
    image: waveBible,
    title: "Waves Bible App",
    description:
      "A spiritual growth engine featuring AI-driven scripture analysis and personalized devotionals. Leverages OpenAI for deep contextual explanation and custom widget integration for high-engagement lock screen experiences.",
    technologies: [
      "React Native",
      "OpenAI API",
      "Firebase",
      "iOS Widgets",
      "In-App Purchases",
    ],
    liveUrl: "https://wavesbibleapp.com/",
    githubUrl: "https://apps.apple.com/us/app/waves-bible-verse/id6742439914",
    status: "Production",
  },
  {
    image: speedApp,
    title: "Shohoz/Shuttle Logistics",
    description:
      "Engineered real-time vehicle tracking and route optimization modules for mass transportation platforms. Implemented GPS-based analytics and floating window services to monitor driver behavior and maximize operational efficiency.",
    technologies: [
      "React Native",
      "GPS Logic",
      "Floating Window API",
      "Voice Services",
      "Line API",
    ],
    liveUrl: "#", 
    githubUrl: "#",
    status: "Production",
  },
  {
    image: scrapyT,
    title: "DGFood Automation",
    description:
      "Modernized national supply chain infrastructure for DGFood. Developed automated framework modules for inventory tracking and logistics, replacing legacy manual flows with high-availability digital checkpoints.",
    technologies: [
      "PHP/Lumen",
      "Microservices",
      "MySQL",
      "Data Transformation",
      "Supply Chain Logic",
    ],
    liveUrl: "#", // Government Restricted
    githubUrl: "#",
    status: "Government",
  },
  {
    image: luxCartApp,
    title: "LuxCart E-Commerce",
    description:
      "High-performance mobile retail engine optimized for sub-second page loads. Features a robust inventory management system, push notification service for real-time order tracking, and a secure payment pipeline via Stripe.",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "Stripe",
      "Tailwind CSS",
    ],
    liveUrl: "https://github.com/najmulHoq07/React-Native-Ecommerce-App?tab=readme-ov-file#luxecart---react-native-e-commerce-app",
    githubUrl: "https://github.com/najmulHoq07/React-Native-Ecommerce-App",
    status: "Open Source",
  },
];