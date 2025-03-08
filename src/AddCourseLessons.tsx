interface AddCourseLessonInterface {
    handleBack: () => void,
    handleNext: () => void,
}

export default function AddCourseLessons({handleBack, handleNext}: AddCourseLessonInterface) {
    return (
        <>
            <h2>Вот тут будет форма добавления уроков в модули</h2>
        </>
    )
}