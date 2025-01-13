import React from "react";
import vipulProject from './assets/vipul-project.jpg';
import bettermuscle from './assets/bettermuscle.png';

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
            link: "https://github.com/example"
        },
        {
            id: 3,
            image: vipulProject,
            title: "Third Project",
            technologies: ["Python", "Flask", "PostgreSQL"],
            description: "A web application for managing personal finance and generating analytical reports.",
            link: "https://github.com/example-third"
        },
        {
            id: 4,
            image: vipulProject,
            title: "Third Project",
            technologies: ["Python", "Flask", "PostgreSQL"],
            description: "A web application for managing personal finance and generating analytical reports.",
            link: "https://github.com/example-third"
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
