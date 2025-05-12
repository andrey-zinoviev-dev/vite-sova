import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserInterface } from "./userSlice";
import {
  CourseInterface,
  EventInterface,
  LessonInterface,
  ModuleExtInterface,
  NewModuleType,
  NewTarifType,
  TarifInterface,
} from "../../intefaces/intefaces";
// import { RootState } from "../store";

export const sliceApi = createApi({
  reducerPath: "api",
  tagTypes: ["User", "Tarifs", "Modules"],
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
    showCurrentLesson: builder.query<
      LessonInterface,
      { lessonId: string | undefined }
    >({
      query: ({ lessonId }) => ({
        url: `/lessons/${lessonId}`,
        credentials: "include",
      }),
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
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useShowCurrentUserQuery,
  useShowCoursesQuery,
  useShowCurrentCourseQuery,
  useShowCurrentModuleQuery,
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
} = sliceApi;
