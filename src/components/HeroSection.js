import React from "react";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center bg-background text-white text-center p-6">
            <span className="text-subtitle text-lg font-semibold uppercase tracking-wider">Welcome to my Portfolio!</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 text-white">Hello, I'm <span className="text-primaryRose">Sophia Nguyen</span></h1>
            <h2 className="text=2xl md:text-3xl font-semibold mt-2 text-white">Python Developer & <span className="text-subtitle">Information Technology Infrastructure Student</span></h2>
            <p className="text-lg max-w-2xl mt-4 text-white">Passionate about building user-first solutions and backend applications. 
                I enjoy working with Python, Flask, and data analytics to transform raw data into meaningful data.</p>
        </section>
    );
}

export default HeroSection;
