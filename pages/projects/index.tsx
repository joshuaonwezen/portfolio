import ProjectDetail from "./[id]";
import { ProjectArr } from "../../lib/interfaces/projectInterface";

const ProjectList = (props: any) => {
    const projects: ProjectArr = props.projects;
    return (
        <ul>
            {Object.entries(projects).map(([key, value]) => (
                <ProjectDetail key={key} project={value} />
            ))}
        </ul>
    );
};

export default ProjectList;
