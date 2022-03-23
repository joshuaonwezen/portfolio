export interface ProjectInterface {
    title: string;
    description: string;
    github: string;
    url: string;
    image: string;
    [key: string]: any;
}

export interface ProjectArr {
    projects: Array<ProjectInterface>;
}