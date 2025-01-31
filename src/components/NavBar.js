import React, { useState } from "react";
const NavBar = () => {
    const [active, setActive] = useState("");

    const updateActive = (value) => {
        setActive(value);
    }
    
    return (
        <nav className="bg-deepPurple text-white">
            <div className="max-w-screen-x1 mx-auto px-4 py-2">
                <div className="flex justify-between items-center">

                    <button className="lg:hidden text-white focus:outline-none" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>

            <div className="hidden lg:flex space-x-8">
                    <a href="#home" className={`text-lg hover:text-neonCyan hover:no-underline ${active === "home" ? "text-valorantRed" : ""}`} onClick={() => updateActive("home")}>Home</a>
                    <a href="#about" className={`text-lg hover:text-neonCyan hover:no-underline ${active === "about" ? "text-valorantRed" : ""}`} onClick={() => updateActive("about")}>About</a>
                    <a href="#projects" className={`text-lg hover:text-neonCyan hover:no-underline ${active === "projects" ? "text-valorantRed" : ""}`} onClick={() => updateActive("projects")}>Projects</a>
                    <a href="#contact" className={`text-lg hover:text-neonCyan hover:no-underline ${active === "contact" ? "text-valorantRed" : ""}`} onClick={() => updateActive("contact")}>Contact</a>
            </div>
         </div>
         </div>
    </nav>
    );
}
export default NavBar;