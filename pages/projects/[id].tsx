import ProjectCard from "../../components/projects/ProjectCard";
import { ProjectInterface } from "../../lib/projectInterface";

const ProjectDetail = (props: any) => {
    const project: ProjectInterface = props.project;
    return (
        <li>
            <ProjectCard project={project} />
        </li>
    );
};

export default ProjectDetail;
