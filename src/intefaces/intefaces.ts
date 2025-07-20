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
  hidden: boolean,
  // modules: string[],
  // lessons: string[]
};

export type StudentCourseInterface = Pick<CourseInterface, "_id" | "title" | "available" | "description" | 'modules' | "startDate" | "events"> & {
  tarif: string
}

export type ModuleInterface = Pick<CourseInterface, "_id" | "available" | "description" | "title"> & {
  lessons: StreamLessonInterface[],
}

export interface ModuleExtInterface extends ModuleInterface {
  // lessons: StreamLessonInterface[],
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
  // updatedAt: string,
  // course: CourseInterface,
}

export type StreamLessonInterface = Pick<
  LessonInterface,
  "_id" | "title" | "module" | "available" | "content"
> & {
  active: boolean;
  createdAt?: string;
  order: number;
};

export type NewCourseType = Omit<CourseInterface, "_id" | "tarifs" | "modules" | "events" | "author" | "available" | "students"> & {
  tarifs: NewTarifType[]
}

export type NewModuleType = Omit<ModuleExtInterface, "_id" | "course"> & { course: string }

// export type 

export type NewTarifType = Omit<TarifInterface, "_id" | "course"> & { course: string }

export type NewLessonType = Omit<StreamLessonInterface, "_id" | "module" | "active" | "order"> & { module: string, course: string }

export type NewStreamType = Omit<StreamInterface, "_id" | "lessons"> & {
  course: string,
}

export type FileExtInterface = {
  file: File,
  _id: string,
  progress?: number,
}