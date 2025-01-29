import React from "react";

const Projects = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Game Analytics Dashboard</h5>
                        <p className="card-text">This is a longer card with...</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Game Analytics Dashboard</h5>
                        <p className="card-text">This is a longer card with...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;