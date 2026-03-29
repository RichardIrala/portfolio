interface ProjectExperience {
  es: ExperienceItem[];
  en: ExperienceItem[];
}

interface ExperienceItem {
  name: string;
  description: string[];
  image: string;
}

const projectsExperience: ProjectExperience = {
  es: [
    {
      name: "Ingeniero de Software Mid-Level en Sequence",
      description: [
        "2024 - 2026",
        "Ingeniero de Software Mid-Level enfocado en desarrollo frontend, documentación e integraciones con blockchain EVM.",
        "Contribuciones clave:",
        "- Gestioné y extendí la herramienta CLI de la empresa, agregando nuevos comandos y manteniendo el repositorio para adaptarse a los requisitos del producto.",
        "- Lideré la integración frontend de una implementación de marketplace personalizada a gran escala para un cliente importante.",
        "- Integré la solución de marketplace de Sequence, incluyendo autenticación con wallet, flujos de transacciones e interacciones con smart contracts.",
        "- Me enfoqué en ofrecer una experiencia de usuario Web3 fluida, adaptada a las necesidades del negocio del cliente.",
        "- Brindé soporte técnico a clientes durante la integración del producto, asistiendo tanto a perfiles técnicos como no técnicos.",
        "- Reduje la fricción en las integraciones explicando conceptos técnicos complejos de forma clara y mejorando la experiencia de onboarding.",
        "- Contribuí ampliamente a la documentación de la empresa utilizando Mintlify y Markdown, creando y manteniendo guías para desarrolladores y recursos técnicos.",
      ],
      image: "assets/experience/logoSequence.jpg",
    },
    {
      name: "Front-End developer en Xerial",
      description: [
        "2022 - 2024",
        "Trabajé durante casi dos años como Desarrollador Frontend Junior en Xerial, enfocado en construir interfaces escalables y fáciles de usar. Traducía diseños de Figma a código de alta calidad y contribuí al desarrollo de aplicaciones blockchain basadas en EVM, colaborando estrechamente con equipos de diseño y desarrollo.",
        "Contribuciones clave:",
        "- Implementé flujos de autenticación e integré un marketplace Web3 desarrollado por el equipo interno de blockchain.",
        "- Contribuí al desarrollo y mantenimiento del frontend de la plataforma utilizando React y TypeScript.",
        "- Construí y mejoré componentes de UI, con foco en usabilidad y rendimiento.",
        "- Colaboré con ingenieros backend y de blockchain para integrar interacciones con smart contracts y datos on-chain.",
        "- Brindé soporte técnico a clientes durante integraciones del producto, incluyendo asistencia en implementaciones personalizadas.",
      ],
      image: "assets/experience/logoXerial.png",
    },
  ],

  en: [
    {
      name: "Mid-Level Software Engineer at Sequence",
      description: [
        "2024-2026",
        "Mid-Level Software Engineer focused on front-end development, documentation, and integrations with EVM blockchain.",
        "Key contributions:",
        "- Managed and extended the company's CLI tool, adding new commands and maintaining the repository to support evolving product requirements.",
        "- Led the frontend integration of a large-scale custom marketplace implementation for a major client.",
        "- Integrated Sequence's marketplace solution, including wallet authentication, transaction flows, and smart contract interactions.",
        "- Focused on delivering a seamless Web3 user experience tailored to the client's business needs.",
        "- Provided technical support to clients during product integration, assisting both technical and non-technical stakeholders.",
        "- Reduced integration friction by explaining complex technical concepts clearly and improving onboarding experience.",
        "- Contributed extensively to company documentation using Mintlify and Markdown, creating and maintaining developer-facing guides and technical resources.",
      ],
      image: "assets/experience/logoSequence.jpg",
    },
    {
      name: "Front-End Developer at Xerial",
      description: [
        "2022 - 2024",
        "I worked for nearly two years as a Junior Frontend Developer at Xerial, focusing on building scalable and user-friendly interfaces. I translated Figma designs into high-quality code and contributed to the development of EVM-based blockchain applications, collaborating closely with both design and engineering teams.",
        "Key Contributions:",
        "- Implemented authentication flows and integrated a Web3 marketplace developed by the internal blockchain team.",
        "- Contributed to the development and maintenance of the platform's frontend using React and TypeScript.",
        "- Built and improved UI components, focusing on usability and performance.",
        "- Collaborated with backend and blockchain engineers to integrate smart contract interactions and on-chain data.",
        "- Provided technical support to clients during product integrations, including guidance for custom implementations.",
      ],
      image: "assets/experience/logoXerial.png",
    },
  ],
};

export default projectsExperience;
