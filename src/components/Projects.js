import React from "react";
import game_analytics_dash from "../assets/game_analytics_dashboard.png"; 

const web_projects = [
    {
        title: "Game Analytics Dashboard",
        description: "A web app that provides on player perfomance in Valorant using Python and Flask",
        imgSrc: game_analytics_dash,
        link: "https://game-analytics-dashboard.onrender.com/",
    },
]

const Projects = () => {
    return (
        <section id="projects" className="bg-darkSlate text-white py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-neonCyan text-center mb-8">Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {web_projects.map((project, index) => (
                        <div key={index} className="bg-deepPurple p-6 rounded-lg shadow-lg">
                            <img src={project.imgSrc} alt={project.title} className="rounded-lg mb-4" />
                            <h3 className="text-2xl font-semibold text-neonCyan">{project.title}</h3>
                            <p className="text-gray-300 mt-2">{project.description}</p>
                            <button className="bg-darkSlate hover:bg-neonCyan transition text-white py-2 px-4 rounded-lg mt-4" onClick={() => window.location.href = project.link}>Enter Dashboard</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;