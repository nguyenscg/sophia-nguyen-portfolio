import React, { useEffect, useState } from "react";
const NavBar = () => {
    const [active, setActive] = useState("");

    const updateActive = (value) => {
        setActive(value);
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src={''} alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a href="#home" className={`nav-link ${active === "home" ? "active" : ""}`} onClick={() => updateActive("home")}>Home</a>
                    <a href="#about" className={`nav-link ${active === "about" ? "active" : ""}`} onClick={() => updateActive("about")}>About</a>
                    <a href="#projects" className={`nav-link ${active === "projects" ? "active" : ""}`} onClick={() => updateActive("projects")}>Projects</a>
                    <a href="#contact" className={`nav-link ${active === "contact" ? "active" : ""}`} onClick={() => updateActive("contact")}>Contact</a>
                </div>
            </div>
         </div>
    </nav>
    );
}
export default NavBar;