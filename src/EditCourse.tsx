import { Outlet } from "react-router";
import BackButton from "./BackButton";
import "./EditCourse.css";
import { useState } from "react";
import NavigationBar from "./NavigationBar";
import EditElementWrapper from "./EditElementWrapper";

export default function EditCourse() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className="edit-course">
        <BackButton href="/profile" text="Назад" />
        <EditElementWrapper>
          <h2>Редактирование курса</h2>
          <p>Редактируйте ваши курсы здесь</p>
        </EditElementWrapper>
        <div className="edit-course__content">
          <NavigationBar
            items={[
              { title: "Общие данные", link: "general" },
              { title: "Доступ и видимость", link: "access" },
              { title: "Модули", link: "modules" },
              { title: "Тарифы", link: "students" },
            ]}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="edit-course__params">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}
