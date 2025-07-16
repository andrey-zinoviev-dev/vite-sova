import "./App.css";
import {
  // BrowserRouter,
  // Routes,
  // Route,
  createBrowserRouter,
  RouterProvider,
  // Link,
} from "react-router";
import Home from "./Home";
// import Courses from "./Courses";
import AddCourse from "./AddCourse";

import ProtectedRoute from "./ProtectedRoute";

import Profile from "./Profile";
import Course from "./Course";
// import CoursesList from "./CoursesList";
import Module from "./Module";
import Lesson from "./Lesson";
import LessonContent from "./LessonContent";
import Chat from "./Chat";
import ProfileData from "./ProfileData";
import CourseInfo from "./CourseInfo";
// import EditComp from "./EditComp";
import EditCourse from "./EditCourse";
// import ModuleEdit from "./ModuleEdit";
import EditCourseGeneral from "./EditCourseGeneral";
import EditCourseModules from "./EditCourseModules";
import EditCourseStreams from "./EditCourseStreams";
import EditCourseLessons from "./EditCourseLessons";
import EditCourseTarifs from "./EditCourseTarifs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        // {
        //   index: true,
        //   element: <CoursesList></CoursesList>,
        // },
        {
          path: "courses/:courseId",
          element: <CourseInfo></CourseInfo>,
        },
        {
          element: <ProtectedRoute></ProtectedRoute>,

          children: [
            {
              path: "courses/:courseId/edit",
              element: <EditCourse />,
              children: [
                {
                  path: "general",
                  element: <EditCourseGeneral />
                },
                {
                  path: "modules",
                  element: <EditCourseModules></EditCourseModules>
                },
                {
                  path: "lessons",
                  element: <EditCourseLessons></EditCourseLessons>
                },
                {
                  path: 'tarifs',
                  element: <EditCourseTarifs></EditCourseTarifs>
                },
                {
                  path: "streams",
                  element: <EditCourseStreams></EditCourseStreams>
                }
              ]
            },
            {
              path: "courses/:courseId/modules",
              element: <Course></Course>,
              loader: () => {
                return [{ path: "/profile", label: "Ваши курсы" }];
              },
              // loader: () => {
              //   return [{path: ""}]
              // }
            },
            {
              path: "courses/:courseId/modules/:moduleId",
              element: <Module></Module>,
              loader: () => {
                return [{ path: "/profile", label: "Ваши курсы" }];
              },
            },
            // {
            //   path: "courses/:courseId/modules/:moduleId/edit",
            //   element: <ModuleEdit />
            // },
            // {
            //   path: "courses/:courseId/modules/:moduleId/lessons/:lessonId",
            //   element: <Lesson></Lesson>,

            //   // handle: {
            //   //   crumble: (courseId: string) => {
            //   //     return <span>{courseId}</span>;
            //   //   },
            //   // },
            //   children: [
            //     {
            //       index: true,
            //       element: <LessonContent></LessonContent>,
            //       loader: () => {
            //         return [{ path: "/profile", label: "Ваши курсы" }];
            //       },
            //     },
            //     {
            //       path: "chat",
            //       element: <Chat></Chat>,
            //       loader: () => {
            //         return [{ path: "/profile", label: "Ваши курсы" }];
            //       },
            //     },
            //   ],
            // },
            {
              path: "profile",
              element: <Profile></Profile>,
              children: [
                {
                  index: true,
                  element: <ProfileData></ProfileData>,
                  loader: () => {
                    return [{ path: "/profile", label: "Ваш профиль" }];
                  },
                },
                {
                  path: "addCourse",
                  element: <AddCourse></AddCourse>,
                  loader: () => {
                    return [
                      { path: "/profile", label: "Ваш профиль" },
                      { path: "", label: "Добаление нового курса" },
                    ];
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      element: <ProtectedRoute></ProtectedRoute>,
      children: [
        {
          path: "courses/:courseId/modules/:moduleId/lessons/:lessonId",
          element: <Lesson></Lesson>,
          loader: () => {
            return [];
          },

          // handle: {
          //   crumble: (courseId: string) => {
          //     return <span>{courseId}</span>;
          //   },
          // },
          children: [
            {
              index: true,
              element: <LessonContent></LessonContent>,
              loader: () => {
                return [{ path: "/profile", label: "Ваши курсы" }];
              },
            },
            {
              path: "chat",
              element: <Chat></Chat>,
              loader: () => {
                return [{ path: "/profile", label: "Ваши курсы" }];
              },
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
