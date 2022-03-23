import React from "react";
import { ProjectInterface } from "../../lib/interfaces/projectInterface";

const ProjectCard = (props: any) => {
    const project: ProjectInterface = props.project;
    console.log(props)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-5">
            <figure>
                <img
                    src={props.image}
                    alt="Project"></img>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                    <a href={project.github} className="btn btn-primary">
                        <div className="flex flex-col items-end">
                            <p>Github</p>
                        </div>
                        <svg
                            className="h-6 w-6 fill-current md:h-8 md:w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24">
                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                        </svg>
                    </a>
                    <a href={project.url} className="btn btn-primary">
                        <div className="flex flex-col items-end">
                            <p>URL</p>
                        </div>
                        <svg
                            className="h-6 w-6 fill-current md:h-8 md:w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24">
                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    const categories: string[] = ["album", "movie", "game", "book"];
    const imageCategory: string =
        categories[Math.floor(Math.random() * categories.length)];
    const image = `https://api.lorem.space/image/${imageCategory}?w=400&h=400`

    return {
        props: {
            image: image
        }
    }
}

export default ProjectCard;
