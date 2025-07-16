export const pathsLables = [
  { path: "profile", label: "Профиль" },
  {
    path: "addCourse",
    label: "Новый курс",
  },
  {
    path: "courses/:courseId/modules/:moduleId/lessons/:lessonId",
    label: "Урок"
  },
];

export const formStatuses = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
  UPLOADING: "uploading",
} as const;

export type FormStatus = (typeof formStatuses)[keyof typeof formStatuses];

// Simple status configurations with just text and icon
export const statusConfigs = {
  [formStatuses.IDLE]: {
    text: "",
    icon: null,
  },
  [formStatuses.LOADING]: {
    text: "Загрузка...",
    icon: "spinner", // or whatever icon you use
  },
  [formStatuses.SUCCESS]: {
    text: "Успешно",
    icon: "check", // or whatever icon you use
  },
  [formStatuses.ERROR]: {
    text: "Ошибка",
    icon: "error", // or whatever icon you use
  },
  [formStatuses.UPLOADING]: {
    text: "Загрузка файлов...",
    icon: "spinner",
  },
} as const;

export const getStatusConfig = (status: FormStatus) => {
  return statusConfigs[status] || statusConfigs[formStatuses.IDLE];
};