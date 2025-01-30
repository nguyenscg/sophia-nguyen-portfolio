import React from "react";

const About = () => {
    return (
        <section id="about" className="bg-darkSlate text-white py-16 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-neonCyan mb-4">About Me</h2>
                <p className="text-lg text-gray-300 leading-relaxed"> Hi, I'm <span className="text-valorantRed font-semibold">Sophia</span>
                My passion lies in building data-driven applications, analyzing complex datasets, and creating backend solutions to real-world problems.</p>
                <p className="text-lg text-gray-400 mt-4">I specialize in <span className="text-neonCyan">Python, Flask, SQL, and data analytics</span>.
                Currently, I am working on a Game Analytics Dashboard to provide insights for Valorant players.
                My goal is to bridge the gap between software development and data science by crafting efficient and scalable solutions.
                </p>
            </div>
        </section>
    )
}

export default About;