import type { NextPage } from "next";
import ProjectDetail from "./[id]";
import { ProjectInterface, ProjectArr } from "../../lib/projectInterface";

const ProjectList = (props: any) => {
    const projects: ProjectArr = props.projects;
    console.log(projects)
    return (
        <ul>
            {Object.entries(projects).map(([key, value]) => (
                <ProjectDetail key={key} project={value} />
            ))}
        </ul>
    );
};

export default ProjectList;
