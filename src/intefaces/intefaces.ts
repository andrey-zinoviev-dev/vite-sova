export interface CourseInterface {
  _id: string,
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
  events: EventInterface[],
  // modules: string[],
  // lessons: string[]
};

export type StudentCourseInterface = Pick<CourseInterface, "_id" | "title" | "available" | "description" | 'modules' | "startDate" | "events">

export type ModuleInterface = Pick<CourseInterface, "_id" | "available" | "description" | "title">;

export interface ModuleExtInterface extends ModuleInterface {
  lessons: LessonInterface[],
  course: CourseInterface,
}

export interface LessonInterface {
  _id: string,
  title: string,
  available: boolean,
  completed: boolean,
  module: ModuleExtInterface,
}

export interface TarifInterface {
  title: string,
  expire: string,
  _id: string
}

export interface EventInterface {
  _id: string,
  title: string,
  startDate: string,
  endDate: string,
  course: CourseInterface,
  length: number,
}

export type NewCourseType = Omit<CourseInterface, "_id">