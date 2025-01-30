import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="bg-darkSlate text-white py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-neonCyan text-center mb-8">Contact</h2>
            </div>
            <div className="mt-8 flex justify-center gap-6">
                <a href="https://www.linkedin.com/in/sophia-nguyen-c/" className="text-neonCyan text-2xl hover:opacity-80 transition">LinkedIn</a>
                <a href="https://github.com/nguyenscg" className="text-neonCyan text-2xl hover:opacity-80 transition">GitHub</a>
                <a href="mailto:nguyencsg@gmail.com" className="text-neonCyan text-2xl hover:opacity-80 transition">Email</a>
            </div>
        </section>
    );
}





export default Contact;