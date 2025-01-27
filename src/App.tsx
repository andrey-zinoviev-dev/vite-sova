import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Home'
import Courses from './Courses'
import AddCourse from './AddCourse'
import Welcome from './Welcome'
import ProtectedRoute from './ProtectedRoute'
import Register from './Register'
import Login from './Login'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='welcome' element={<Welcome></Welcome>}>
              <Route index element={<Login></Login>}></Route>
              <Route path='register' element={<Register></Register>}></Route>
            </Route>
            <Route element={<ProtectedRoute></ProtectedRoute>}>
              <Route index element={<Home></Home>} />
              <Route path='/addCourse' element={<AddCourse></AddCourse>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
