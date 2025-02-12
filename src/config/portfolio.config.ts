import { GitHub, LinkedIn, Email, X, Code, Brush, Storage, Build } from "@mui/icons-material";
import image from "../assets/meAi.png";
import ecommerce from "../assets/ecommerce.png";
import task from "../assets/taskmanagement.png";
import portfolio from "../assets/portfolio.png";
export const portfolioConfig = {
  // Navbar & Personal Info
  personal: {
    name: "Uday Kiran",
    title: "FullStack Developer",
    avatar: image, // Add your image path
    email: "udaykiran.dev@gmail.com",
    phone: "+91 9182000000",
    location: "Bengaluru, Karnataka, India",
  },

  // Navigation
  navigation: {
    items: ["Home", "About", "Skills", "Projects", "Contact"],
  },

  // Hero Section
  hero: {
    greeting: "Hello, I'm",
    tagline: "I build exceptional and accessible digital experiences for the web.",
    cta: {
      primary: "Contact Me",
      secondary: "View Work",
    },
    socialLinks: [
      { icon: GitHub, url: "https://github.com/udaykiranch2" },
      { icon: LinkedIn, url: "https://www.linkedin.com/in/uday-kiran-2173a8288/" },
      { icon: Email, url: "mailto:udaykiran.chal2@gmail.com" },
    ],
  },

  // About Section
  about: {
    title: "About Me",
    sections: [
      {
        title: "My Background",
        content: "I'm a passionate FullStack developer recently started my journey in web development, equipped with modern technical skills and a strong foundation in computer science principles.",
      },
      {
        title: "What I Do",
        content: "I create responsive, accessible web applications using cutting-edge technologies while maintaining clean code practices. Eager to contribute to meaningful projects and grow my expertise in real-world scenarios.",
      },
    ],
  },

  // Skills Section
  skills: {
    title: "Skills & Expertise",
    categories: [
      {
        category: "Frontend",
        icon: Code,
        iconColor: "primary",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Material-UI"],
      },
      {
        category: "Design",
        icon: Brush,
        iconColor: "secondary",
        skills: ["Figma", "Adobe XD", "Responsive Design", "UI/UX", "Wireframing"],
      },
      {
        category: "Backend",
        icon: Storage,
        iconColor: "warning",
        skills: ["Node.js", "Express", "MongoDB", "REST APIs", "GraphQL"],
      },
      {
        category: "Tools",
        icon: Build,
        iconColor: "info",
        skills: ["Git", "VS Code", "Docker", "Jest", "Webpack"],
      },
    ],
  },

  // Projects Section
  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog management, shopping cart functionality, secure payment processing, order tracking, and an admin dashboard for inventory management. Implemented responsive design patterns and optimized performance through lazy loading and caching strategies.",
        image: ecommerce,
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        githubLink: "#",
        liveLink: "#",
      },
      {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates. Includes features like task categorization, due date tracking, team collaboration tools, file attachments, and progress tracking. Implemented real-time notifications using WebSocket technology and integrated with Google Calendar for seamless schedule management.",
        image: task,
        technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
        githubLink: "#",
        liveLink: "#",
      },
      {
        title: "Portfolio Website",
        description: "A modern portfolio website built with React and Material-UI. Features include dark/light theme switching, smooth scrolling navigation, animated section transitions, and responsive design. Optimized for accessibility and SEO, with perfect Lighthouse scores and comprehensive meta tags implementation.",
        image: portfolio,
        technologies: ["React", "Material-UI", "Tailwind CSS"],
        githubLink: "#",
        liveLink: "#",
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    subtitle: "Contact Information",
    form: {
      fields: [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "Message", type: "textarea", rows: 3, required: true },
      ],
      submitButton: "Send Message",
    },
  },

  // Footer
  footer: {
    copyright: "© 2024 Uday Kiran. All rights reserved.",
    socialLinks: [
      { icon: GitHub, url: "https://github.com/udaykiranch2" },
      { icon: LinkedIn, url: "https://www.linkedin.com/in/uday-kiran-2173a8288/" },
      { icon: X, url: "https://x.com/Udaykir99608813" },
    ],
  },
};

export default portfolioConfig; 