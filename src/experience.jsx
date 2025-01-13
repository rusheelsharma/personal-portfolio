const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Teaching Assistant (CS2500: Fundamentals of Computer Science I)",
            date: "September 2024 – Present",
            location: "Northeastern University, Boston, MA",
            description:
                "Hosted office hours and labs, providing guidance to over 30 students. Evaluated assignments and exams, offering constructive feedback to enhance understanding of concepts. Helped debug and improve students' programming assignments.",
        },
        {
            id: 2,
            title: "Software Developer Intern",
            date: "January 2024 – Present",
            location: "Boston, MA",
            description:
                "Collaborated with a team to build and test a movie-ranking platform using Swift and SwiftUI. Designed dynamic pages with reusable UI components and implemented unit testing. Conducted beta testing with 20+ users to improve front-end layouts.",
        },
        {
            id: 3,
            title: "Product Intern",
            date: "July 2022 – September 2022",
            location: "Omnify Inc., Bangalore, India",
            description:
                "Used SEO tools to improve domain ranking and conducted market research surveys with 100+ clients for a new product launch. Designed and delivered wireframes with a team of 6 UI/UX designers.",
        },
        {
            id: 4,
            title: "Co-founder and Co-developer",
            date: "August 2021 – February 2022",
            location: "Better Muscle: Progressive Overload | GitHub",
            description:
                "Developed a workout-logging app using Ionic React and PostgreSQL. Enabled users to log exercises and track progress efficiently, leading to over 200 downloads on the Play Store.",
        },
    ];

    return (
        <div className="experience-section">
            <div className="experience-list">
                {experiences.map((experience) => (
                    <div key={experience.id} className="experience-card">
                        <h3 className="experience-title">{experience.title}</h3>
                        <p className="experience-date">{experience.date}</p>
                        <p className="experience-location">{experience.location}</p>
                        <p className="experience-description">{experience.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
