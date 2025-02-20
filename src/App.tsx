import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Home'
import Courses from './Courses'
import AddCourse from './AddCourse'
import Welcome from './Welcome'
import ProtectedRoute from './ProtectedRoute'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'
import Course from './Course'
import CoursesList from './CoursesList'
import Module from './Module'
import Lesson from './Lesson'
import LessonContent from './LessonContent'
import Chat from './Chat'
import ProfileData from './ProfileData'
import Header from './Header'

// import { login } from './store/features/userSlice'

// import { useEffect } from 'react'



function App() {
  // const dispatch = useAppDispatch();
    
  // const {data = {} as UserInterface} = useShowCurrentUserQuery();

  // useEffect(() => {
  //   if(data._id) {
  //     dispatch(login(data));
  //   }
  // }, [data]);

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/welcome' element={<Welcome></Welcome>}>
              <Route index element={<Login></Login>}></Route>
              <Route path='register' element={<Register></Register>}></Route>
            </Route>
            <Route element={<ProtectedRoute></ProtectedRoute>}>
              <Route path='/' element={<Home></Home>}>
                <Route path='/' element={<Courses></Courses>}>
                  <Route index element={<CoursesList></CoursesList>} />
                  <Route path='courses/:courseId/' element={<Course></Course>}>
                  </Route>
                  <Route path='courses/:courseId/modules/:moduleId' element={<Module></Module>}></Route>
                </Route>
                <Route path='profile' element={<Profile></Profile>}>
                  <Route index element={<ProfileData></ProfileData>} />
                  <Route path='addCourse' element={<AddCourse></AddCourse>} />

                </Route>

              </Route>
              <Route path='courses/:courseId/modules/:moduleId/lessons/:lessonId' element={<Lesson></Lesson>}>
                <Route index element={<LessonContent></LessonContent>} />
                <Route path='chat' element={<Chat />} />
              </Route>
              {/* <Route path='/' element={<Header></Header>}></Route> */}
            </Route>
            
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
