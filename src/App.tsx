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
import { login, UserInterface } from "./store/features/userSlice"
import { useShowCurrentUserQuery } from "./store/features/apiSlice"
import { useEffect } from "react";
import { useAppDispatch } from './hooks'
// import { login } from './store/features/userSlice'

// import { useEffect } from 'react'



function App() {
  const dispatch = useAppDispatch();
    
  const {data = {} as UserInterface} = useShowCurrentUserQuery();

  useEffect(() => {
    if(data._id) {
      dispatch(login(data));
    }
  }, [data]);

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
                <Route index element={<Courses></Courses>}></Route>
                <Route path='addCourse' element={<AddCourse></AddCourse>} />
                <Route path='me' element={<Profile></Profile>} />
              </Route>
            </Route>
            
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
