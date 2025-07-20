import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserInterface } from "./userSlice";
import {
  CourseInterface,
  EventInterface,
  LessonInterface,
  ModuleExtInterface,
  NewCourseType,
  NewLessonType,
  NewModuleType,
  NewStreamType,
  NewTarifType,
  StreamInterface,
  StreamLessonInterface,
  TarifInterface,
} from "../../intefaces/intefaces";
// import { RootState } from "../store";

export const sliceApi = createApi({
  reducerPath: "api",
  tagTypes: ["User", "Tarifs", "Modules", "Streams", "Lessons", "Courses", "Lesson", "Module"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    // // prepareHeaders: (headers, { getState }) => {
    // const token = (getState() as RootState).user.accessToken;
    // console.log(token);
    // if(token) {
    //     headers.set("Authorization", `Bearer ${token}`)
    // }
    // return headers
    // }
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      { loggedIn: boolean },
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
        credentials: "include",
      }),
      invalidatesTags: ["User"],
      // transformResponse: (response: {data: UserInterface}) => response.data,
    }),
    registerUser: builder.mutation<
      UserInterface,
      { email: string; password: string; name: string }
    >({
      query: ({ email, password, name }) => ({
        url: "/register",
        method: "POST",
        body: { email, password, name },
        credentials: "include",
      }),
      // transformResponse: (response: {user: UserInterface}) => response.user,
    }),
    showCurrentUser: builder.query<UserInterface, void>({
      query: () => ({
        url: "/currentUser",
        credentials: "include",
      }),
      providesTags: ["User"],
    }),
    showCourses: builder.query<CourseInterface[], void>({
      query: () => ({
        url: "/coursesList",
        credentials: "include",
      }),
    }),
    showCurrentCourse: builder.query<
      CourseInterface,
      { courseId: string | undefined }
    >({
      query: ({ courseId }) => ({
        url: `/courses/${courseId}`,
        credentials: "include",
      }),
    }),
    editCourse: builder.mutation<CourseInterface, CourseInterface>({
      query: (course) => ({
        url: `/courses/${course._id}`,
        method: "PUT",
        body: course,
        credentials: "include",
      }),
    }),
    addCourse: builder.mutation<CourseInterface, NewCourseType>({
      query: (course) => ({
        url: "/courses/add",
        method: "POST",
        body: course,
        credentials: "include",
      }),
      invalidatesTags: ["Courses"],
    }),
    showCurrentCourseModules: builder.query<ModuleExtInterface[], string>({
      query: (courseId) => ({
        url: `/courses/${courseId}/modules`,
        credentials: "include",
      }),
      providesTags: ["Modules"],
    }),
    showCurrentModule: builder.query<
      ModuleExtInterface,
      { moduleId: string | undefined }
    >({
      query: ({ moduleId }) => ({
        url: `/modules/${moduleId}`,
        credentials: "include",
      }),
    }),
    showCurrentModuleLessons: builder.query<StreamLessonInterface[], string>({
      query: (moduleId) => ({
        url: `/modules/${moduleId}/lessons`,
        credentials: "include",
      }),
      providesTags: ["Module"],
    }),
    addModule: builder.mutation<ModuleExtInterface, NewModuleType>({
      query: (module) => ({
        url: `/modules`,
        method: "POST",
        body: module,
        credentials: "include",
      }),
      invalidatesTags: ["Modules"],
    }),
    editModule: builder.mutation<ModuleExtInterface, ModuleExtInterface>({
      query: (module) => ({
        url: `/modules/${module._id}`,
        method: "PUT",
        body: module,
        credentials: "include",
      }),
      invalidatesTags: ["Modules"],
    }),
    deleteModule: builder.mutation<{ docId: string }, string>({
      query: (moduleId) => ({
        url: `/modules/${moduleId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Modules"],
    }),
    showCurrentCourseLessons: builder.query<StreamLessonInterface[], string>({
      query: (courseId) => ({
        url: `/courses/${courseId}/lessons`,
        credentials: "include",
      }),
      providesTags: ["Lessons"],
    }),
    showCurrentLesson: builder.query<
      StreamLessonInterface,
      { lessonId: string | undefined }
    >({
      query: ({ lessonId }) => ({
        url: `/lessons/${lessonId}`,
        credentials: "include",
      }),
      providesTags: ["Lesson"],
    }),
    completeLesson: builder.mutation<
      LessonInterface,
      { courseId: string; moduleId: string; lessonId: string }
    >({
      query: (location) => ({
        url: `lesson/${location.lessonId}/complete`,
        method: "PUT",
        credentials: "include",
      }),
    }),
    editLesson: builder.mutation<StreamLessonInterface, StreamLessonInterface>({
      query: (lesson) => ({
        url: `/lessons/${lesson._id}`,
        method: "PUT",
        body: lesson,
        credentials: "include",
      }),
      invalidatesTags: ["Lessons", "Lesson", "Modules"],
    }),
    addLesson: builder.mutation<StreamLessonInterface, NewLessonType>({
      query: (lesson) => ({
        url: `/lessons`,
        method: "POST",
        body: lesson,
        credentials: "include",
      }),
      invalidatesTags: ["Lessons"],
    }),
    deleteLesson: builder.mutation<StreamLessonInterface, string>({
      query: (lessonId) => ({
        url: `/lessons/${lessonId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Lessons"],
    }),
    showEvents: builder.query<EventInterface[], void>({
      query: () => ({
        url: "/events",
        credentials: "include",
      }),
    }),
    showTarifs: builder.query<TarifInterface[], string>({
      query: (courseId) => ({
        url: `/tarifs/${courseId}`,
        credentials: "include",
      }),
      providesTags: ["Tarifs"],
    }),
    addTarif: builder.mutation<TarifInterface, NewTarifType>({
      query: (tarif) => ({
        url: "/tarifs",
        method: "POST",
        body: tarif,
        credentials: "include",
      }),
      invalidatesTags: ["Tarifs"],
    }),
    updateTarif: builder.mutation<TarifInterface, TarifInterface>({
      query: (tarif) => ({
        url: `/tarifs/${tarif._id}`,
        method: "PUT",
        body: tarif,
      }),
      invalidatesTags: ["Tarifs"],
    }),
    deleteTarif: builder.mutation<TarifInterface, string>({
      query: (tarifId) => ({
        url: `/tarifs/${tarifId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Tarifs"],
    }),
    showStreams: builder.query<StreamInterface[], string>({
      query: (courseId) => ({
        url: `/streams/${courseId}`,
        credentials: "include",
      }),
      providesTags: ["Streams"],
    }),
    addStream: builder.mutation<StreamInterface, NewStreamType>({
      query: (stream) => ({
        url: "/streams",
        method: "POST",
        body: stream,
        credentials: "include",
      }),
      invalidatesTags: ["Streams"],
    }),
    editLessonStreams: builder.mutation<
      StreamInterface,
      { streamId: string; lessons: StreamLessonInterface[] }
    >({
      query: (stream) => ({
        url: `/lessons/streams`,
        method: "PUT",
        body: stream,
        credentials: "include",
      }),
      invalidatesTags: ["Streams"],
    }),
    deleteStream: builder.mutation<StreamInterface, string>({
      query: (streamId) => ({
        url: `/streams/${streamId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Streams"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useShowCurrentUserQuery,
  useShowCoursesQuery,
  useShowCurrentCourseQuery,
  useEditCourseMutation,
  useShowCurrentModuleQuery,
  useShowCurrentModuleLessonsQuery,
  useShowCurrentLessonQuery,
  useCompleteLessonMutation,
  useShowEventsQuery,
  useAddTarifMutation,
  useShowTarifsQuery,
  useDeleteTarifMutation,
  useUpdateTarifMutation,
  useAddModuleMutation,
  useEditModuleMutation,
  useDeleteModuleMutation,
  useShowCurrentCourseModulesQuery,
  useAddStreamMutation,
  useShowStreamsQuery,
  useShowCurrentCourseLessonsQuery,
  // useEditStreamMutation,
  useEditLessonStreamsMutation,
  useDeleteStreamMutation,
  useEditLessonMutation,
  useAddLessonMutation,
  useAddCourseMutation,
  useDeleteLessonMutation,
} = sliceApi;
