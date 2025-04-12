export interface PortfolioData {
    name: string;
    title: string;
    about: string;
    skills: string[];
    projects: {
        title: string;
        description: string;
        technologies: string[];
        link?: string;
    }[];
    socialLinks: {
        platform: string;
        url: string;
    }[];
}

export const portfolioData: PortfolioData = {
    name: "Your Name",
    title: "Full Stack Developer",
    about: "I'm a passionate developer with experience in building modern web applications. I love creating elegant solutions to complex problems.",
    skills: [
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "MongoDB",
        "AWS",
        "Docker",
        "Git"
    ],
    projects: [
        {
            title: "Portfolio",
            description: "A modern web application built with React and Node.js",
            technologies: ["React", "TypeScript", "Tailwindcss"],
            link: "https://github.com/udaykiranch2/portfolio"
        },
        {
            title: "Ecommerce Product Management System",
            description: "An Ecommerce Product Management System",
            technologies: ["Spring Boot", "Java", "MySQL"],
            link: "https://github.com/udaykiranch2/ProductManagementSystem"
        }
    ],
    socialLinks: [
        {
            platform: "GitHub",
            url: "https://github.com/udaykiranch2"
        },
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/udaykiranch2"
        },
        {
            platform: "Twitter",
            url: "https://twitter.com/udaykiranch2"
        }
    ]
}; 