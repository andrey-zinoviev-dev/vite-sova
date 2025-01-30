export interface CourseInterface {
    _id: string | null,
    title: string | null,
    students: string[],
    author: {
        name: string
    },
    available: boolean,
    // modules: string[],
    // lessons: string[]
};