export interface CourseInterface {
    _id: string | null,
    title: string | null,
    students: string[],
    author: {
        name: string
    },
    available: boolean,
    description: string,
    modules: ModuleInterface[],
    // modules: string[],
    // lessons: string[]
};

export type ModuleInterface = Pick<CourseInterface, "_id" | "available" | "description" | "title">