import { JSONContent } from "@tiptap/react";

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

export type StudentCourseInterface = Pick<CourseInterface, "_id" | "title" | "available" | "description" | 'modules' | "startDate" | "events"> & {
  tarif: string
}

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
  content: JSONContent,
}

export interface TarifInterface {
  title: string,
  endDate: string,
  _id: string,
  course: StudentCourseInterface,
}

export interface EventInterface {
  _id: string,
  title: string,
  startDate: string,
  endDate: string,
  course: CourseInterface,
  length: number,
}

export interface StreamInterface {
  _id: string,
  title: string,
  startDate: string,
  lessons: StreamLessonInterface[],
  // course: CourseInterface,
}

export type StreamLessonInterface = Pick<LessonInterface, "_id" | "title" | "module" | "available" | "content"> & {
  active: boolean,
}

export type NewCourseType = Omit<CourseInterface, "_id" | "tarifs"> & {
  tarifs: NewTarifType[]
}

export type NewModuleType = Omit<ModuleExtInterface, "_id" | "course"> & { course: string }

// export type 

export type NewTarifType = Omit<TarifInterface, "_id" | "course"> & { course: string }

export type NewLessonType = Omit<StreamLessonInterface, "_id" | "module" | "active"> & { module: string }

export type NewStreamType = Omit<StreamInterface, "_id" | "lessons"> & {
  course: string,
}