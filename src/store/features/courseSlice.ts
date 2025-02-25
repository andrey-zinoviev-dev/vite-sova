export interface CourseInterface {
    _id: string | null,
    title: string | null,
    students: string[],
    author: {
        name: string
    },
    available: boolean,
    description: string,
    modules: ModuleExtInterface[],
    tarifs: {
        title: string,
        end: string,
        _id: string
    }[]
    // modules: string[],
    // lessons: string[]
};

export type StudentCourseInterface = Pick<CourseInterface, "_id" | "title" | "available" | "description" | 'modules'>

export type ModuleInterface = Pick<CourseInterface, "_id" | "available" | "description" | "title">;

export interface ModuleExtInterface extends ModuleInterface {
    lessons: LessonInterface[]
}

export interface LessonInterface {
    _id: string,
    title: string,
    available: boolean,
}