import React, { useEffect, useState } from "react";
const NavBar = () => {
    const [active, setActive] = useState("");

    const updateActive = (value) => {
        setActive(value);
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src={''} alt="logo"/></a>
                    <a href="#home" className={`nav-link ${active === "home" ? "active" : ""}`} onClick={() => updateActive("home")}>Home</a>
                    <a href="#about" className={`nav-link ${active === "about" ? "active" : ""}`} onClick={() => updateActive("about")}>About</a>
                    <a href="#projects" className={`nav-link ${active === "projects" ? "active" : ""}`} onClick={() => updateActive("projects")}>Projects</a>
                    <a href="#contact" className={`nav-link ${active === "contact" ? "active" : ""}`} onClick={() => updateActive("contact")}>Contact</a>
        </nav>
    );
}
export default NavBar;