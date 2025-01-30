export interface CourseInterface {
    _id: string | null,
    title: string | null,
    students: string[],
    author: {
        name: string
    },
    // modules: string[],
    // lessons: string[]
};