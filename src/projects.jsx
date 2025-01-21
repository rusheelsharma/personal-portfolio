import React from "react";
import vipulProject from './assets/vipul-project.jpg';
import bettermuscle from './assets/bettermuscle.png';
import shell from './assets/shell.jpg';
import stock from './assets/stock.jpg'

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: vipulProject,
            title: "Vipul Client Management System",
            technologies: ["Java", "SQL", "Swing"],
            description: "Created a full-stack application that allows managers and gym trainers to record client data, their fee payments, and create and print fee receipts.",
            link: "https://github.com/rusheelsharma/Vipul_Management_System"
        },
        {
            id: 2,
            image: bettermuscle,
            title: "Better Muscle ",
            technologies: ["React", "TypeScript", "HTML", "CSS", "JavaScript"],
            description: "Better Muscle is a full-stack application that allows people to track, log, and record their workout progress. Has a selection of over 300 different types of exercises and allows users to log sets, reps, and workout volume.",
            link: "https://github.com/rusheelsharma/progressiveoverload"
        },
        {
            id: 3,
            image: shell,
            title: "Shell",
            technologies: ["C"],
            description: "Developed a Linux shell in C for CS3650, featuring advanced parsing with a deterministic tokenizer, built-in commands (cd, source, etc.), input/output redirection, piping, and command sequencing. Employed system calls (fork, exec, etc.), robust error handling, and memory management, validated with Valgrind. Code available upon request.",
            link: "https://github.com/rusheelsharma/Shell"
        },
        {
            id: 4,
            image: vipulProject,
            title: "FUSE-based File System",
            technologies: ["C"],
            description: "Developed a custom FUSE-based filesystem in C for CS3650, mounting a 1MB disk image as a virtual drive. Supported file and directory operations, efficient block management, and metadata structures for dynamic allocation. Ensured robustness and performance using OSTEP principles, extensive testing, and maintainable code. Code available upon request.",
            link: "https://github.com/rusheelsharma/File-System"
        },
        {
            id: 5,
            image: stock,
            title: "Stock Simulator",
            technologies: ["Java, Swing"],
            description: "Developed a Stock Simulator for CS3500 using MVC architecture and the AlphaVantage API. Key features include gain/loss analysis over a period, x-day moving average calculations, and x-day crossovers to identify potential buy opportunities. Ensured a modular design for maintainability and extensibility.",
            link: "https://github.com/rusheelsharma/stock-simulator"
        }
    ];

    return (
        <div className="project-list">
            {projects.map((project) => (
                <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h3>{project.title}</h3>
                    <ul className="project-technologies">
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <p>{project.description}</p>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        GitHub
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Projects;
