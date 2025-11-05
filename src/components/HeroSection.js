import React from "react";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center bg-cloudmist text-black text-center p-6">
            <span className="text-neonCyan text-lg font-semibold uppercase tracking-wider">Welcome to my Portfolio!</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4">Hello, I'm <span className="text-rose">Sophia Nguyen</span></h1>
            <h2 className="text=2xl md:text-3xl font-semibold mt-2">Python Developer & <span className="text-midnight">Information Technology Infrastructure Student</span></h2>
            <p className="text-lg max-w-2xl mt-4 text-gray-300">Passionate about building data-driven solutions and backend applications. 
                I enjoy working with Python, Flask, and data analytics to transform raw data into meaningful data.</p>
        </section>
    );
}

export default HeroSection;
