export interface CourseInterface {
    _id: string | null,
    title: string | null,
    students: string[],
    author: {
        name: string
    },
    available: boolean,
    description: string,
    modules: {title: string}[],
    // modules: string[],
    // lessons: string[]
};