import React from "react";

const About = () => {
    return (
        <section id="about" className="bg-darkSlate text-white py-16 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-neonCyan mb-4">About Me</h2>
                <p className="text-lg text-gray-300 leading-relaxed"> Hi, I'm <span className="text-valorantRed font-semibold">Sophia</span>! I'm a software engineer with a strong passion
                for data science and backend development.</p>
                <p className="text-lg text-gray-400 mt-4">I specialize in <span className="text-neonCyan">Python</span> and have been working with various tools such as <span className="text-neonCyan">Flask</span>. 
                Currently, I am working on a Game Analytics Dashboard to provide insights for Valorant players.
                Through my journey, I've had the opportunity to dive into different areas from web development to data analysis. I'm excited about learning new technologies and continously improving my craft.
                </p>
            </div>
        </section>
    )
}

export default About;