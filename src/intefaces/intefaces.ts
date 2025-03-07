export interface CourseInterface {
  _id: string | null,
  title: string,
  students: string[],
  author: {
      name: string
  },
  available: boolean,
  description: string,
  modules: ModuleExtInterface[],
  tarifs: TarifInterface[],
  startDate: string,
  // modules: string[],
  // lessons: string[]
};

export type StudentCourseInterface = Pick<CourseInterface, "_id" | "title" | "available" | "description" | 'modules' | "startDate">

export type ModuleInterface = Pick<CourseInterface, "_id" | "available" | "description" | "title">;

export interface ModuleExtInterface extends ModuleInterface {
  lessons: LessonInterface[]
}

export interface LessonInterface {
  _id: string,
  title: string,
  available: boolean,
  completed: boolean,
}

export interface TarifInterface {
  title: string,
  end: string,
  _id: string
}