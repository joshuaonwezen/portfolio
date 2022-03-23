import React from "react";
import { ProjectInterface } from "../../lib/projectInterface";

const ProjectCard = (props: any) => {
    const project: ProjectInterface = props.project;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-5">
            <figure>
                <img
                    src="https://api.lorem.space/image/album?w=400&h=400"
                    alt="Project"></img>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
