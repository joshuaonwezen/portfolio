import ProjectCard from "../../components/projects/ProjectCard";
import { ProjectInterface } from "../../lib/interfaces/projectInterface";

const ProjectDetail = (props: any) => {
    const project: ProjectInterface = props.project;
    const index: number = props.index;
    return (
        <li>
            <ProjectCard project={project} index={index}/>
        </li>
    );
};

export default ProjectDetail;
