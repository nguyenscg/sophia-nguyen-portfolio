function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img src={''} alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                <a className="nav-link" href="#about">About</a>
                <a className="nav-link" href="#skills">Skills</a>
                <a className="nav-link" href="#projects">Projects</a>
            </div>
        </div>
    </nav>
    );
}

export default NavBar;