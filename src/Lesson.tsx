import { useShowCurrentLessonQuery } from "./store/features/apiSlice";
import { Outlet, ScrollRestoration, useParams } from "react-router";
import { LessonInterface } from "./intefaces/intefaces";
import "./Lesson.css";
import Header from "./Header";
// import BreadCrumbs from "./Breadcrumbs";
import SideBar from "./SideBar";

export default function Lesson() {

  const { lessonId } = useParams();

  const { data = {} as LessonInterface } = useShowCurrentLessonQuery({
    lessonId: lessonId,
  });

  // const crumbs = data._id
  //   ? [
  //       {
  //         label: data.module.course.title,
  //         path: `/courses/${courseId}/modules`,
  //       },
  //       {
  //         label: data.module.title,
  //         path: `/courses/${courseId}/modules/${moduleId}`,
  //       },
  //       { label: data.title, path: "" },
  //     ]
  //   : [];

  return (
    <>
      <Header>
        {data._id && <SideBar courseTitle={data.module.course.title} modules={data.module.course.modules}></SideBar>}
      </Header>
      <section className="lesson">
        {/* <BreadCrumbs items={crumbs}></BreadCrumbs> */}
        <ScrollRestoration></ScrollRestoration>
        <Outlet></Outlet>
      </section>

    </>
  );
}
