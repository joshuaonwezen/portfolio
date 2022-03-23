export interface PageInterface {
    title: string;
    description: string;
    [key: string]: any;
};

export interface PageArr {
    pages: Array<PageInterface>;
}