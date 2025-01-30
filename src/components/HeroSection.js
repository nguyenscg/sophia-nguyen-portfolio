import React from "react";

const HeroSection = () => {
    return (
        <>
            <section className="hero" id="none"></section>
            <div className="container">
                <span className="tagline">Welcome to my Portfolio!</span>
                <h1>Hello, I'm Sophia Nguyen! <span className="wrap">Python Developer & Aspiring Data Scientist</span></h1>
                <p>Passionate about building data-driven solutions and backend applications. I enjoy working with Python, Flask, and data analytics to transform raw data into meaningful insights.</p>
                <div className="flex justify-center items-center h-screen bg-blue-500">
      <h1 className="text-4xl text-white font-bold">Hello, Tailwind CSS!</h1>
    </div>
            </div>
        </>
    )
}

export default HeroSection;
