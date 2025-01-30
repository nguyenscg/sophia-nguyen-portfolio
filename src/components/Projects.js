import React from "react";

const web_projects = [
    {
        title: "Game Analytics Dashboard",
        description: "A web app that provides on player perfomance in Valorant using Python and Flask",
        imgSrc: "https://via.placeholder.com/400",
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;