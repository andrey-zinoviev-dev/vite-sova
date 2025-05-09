import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from "./Calendar";
import {
  faArrowRight,
  // faChevronLeft,
  // faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./ProfileCalendar.css";
import ActionButton from "./ActionButton";
import PopupRight from "./PopupRight";
// import { useShowEventsQuery } from "./store/features/apiSlice";
import { EventInterface } from "./intefaces/intefaces";
import { useAppSelector } from "./hooks";
import RowList from "./RowList";
import TableElement from "./TableElement";
export default function ProfileCalendar() {
  const currentDate = new Date();

  const [showEventsClicked, setShowEventsClicked] = useState<boolean>(false);

  const userEvents = useAppSelector((state) => {
    return state.user.courses;
  })
    .map((course) => {
      return course.course.events;
    })
    .flat() as EventInterface[];

  const currentWeekSlice = {
    start: currentDate.getDate(),
    end: currentDate.getDate() + 7,
  };

  const daysInWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const daysInMonth = useMemo(() => {
    return Array.from(
      {
        length: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0
        ).getDate(),
      },
      (_, index) => {
        const dayOfMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          index
        );
        // console.log(dayOfMonth);
        return {
          day: dayOfMonth.getDate(),
          name: daysInWeek[dayOfMonth.getDay()],
          isActive: index === currentDate.getDate() ? true : false,
        };
      }
    );
  }, [currentDate, currentWeekSlice]);

  //functions
  function closeEvents() {
    setShowEventsClicked(false);
  }

  // console.log(daysInMonth);

  return (
    <>
      <div className="profile-calendar">
        <Calendar
          items={daysInMonth.slice(
            currentWeekSlice.start,
            currentWeekSlice.end
          )}
          renderItem={(day) => (
            <div
              className={`day-button ${
                day.isActive ? "day-button_active" : ""
              }`}
            >
              <span>{day.name}</span>
              {day.day.toString().padStart(2, "0")}
            </div>
          )}
        >
          <div className="calendar-header">
            <span>
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
          </div>
        </Calendar>
        <div className="events-list-wrapper">
          <div className="events-list-wrapper__header">
            <span>Расписание на {monthNames[currentDate.getMonth()]}</span>
            <ActionButton
              onClick={() => {
                setShowEventsClicked(true);
              }}
            >
              Посмотреть все
              <FontAwesomeIcon icon={faArrowRight} />
            </ActionButton>
          </div>

          <RowList
            items={userEvents}
            renderItem={(event) => {
              const startTime = new Date(event.startDate);
              const endTime = new Date(event.endDate);

              const day = startTime.getDate().toString().padStart(2, "0");
              return (
                <TableElement>
                  <div className="event-list__item">
                    <span className="event-list__item-day">{day}</span>
                    <div className="event-list__item-wrapper">
                      <div className="event-list__item-info">
                        <span className="event-list__item-name">
                          {event.title}
                        </span>
                        <span className="event-list__item-description">
                          {event.course.title}
                        </span>
                      </div>
                      <span className="event-list__item-time">
                        {startTime.getHours().toString().padStart(2, "0")}:
                        {startTime.getMinutes().toString().padStart(2, "0")} -
                        {endTime.getHours().toString().padStart(2, "0")}:
                        {endTime.getMinutes().toString().padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <ActionButton>
                    Открыть мерориятие
                    <FontAwesomeIcon
                      style={{ rotate: "-45deg" }}
                      icon={faArrowRight}
                    />
                  </ActionButton>
                </TableElement>
              );
            }}
          ></RowList>
        </div>
      </div>
      {showEventsClicked && (
        <PopupRight closePopup={closeEvents}>
          <h3>Мероириятия</h3>
          <RowList
            items={userEvents}
            renderItem={(event) => {
              const startTime = new Date(event.startDate);
              const endTime = new Date(event.endDate);

              const day = startTime.getDate().toString().padStart(2, "0");
              return (
                <TableElement>
                  <div className="event-list__item">
                    <span className="event-list__item-day">{day}</span>
                    <div className="event-list__item-wrapper">
                      <div className="event-list__item-info">
                        <span className="event-list__item-name">
                          {event.title}
                        </span>
                        <span className="event-list__item-description">
                          {event.course.title}
                        </span>
                      </div>
                      <span className="event-list__item-time">
                        {startTime.getHours().toString().padStart(2, "0")}:
                        {startTime.getMinutes().toString().padStart(2, "0")} -
                        {endTime.getHours().toString().padStart(2, "0")}:
                        {endTime.getMinutes().toString().padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <ActionButton>
                    Открыть мерориятие
                    <FontAwesomeIcon
                      style={{ rotate: "-45deg" }}
                      icon={faArrowRight}
                    />
                  </ActionButton>
                </TableElement>
              );
            }}
          ></RowList>
        </PopupRight>
      )}
    </>
  );
}
