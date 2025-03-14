import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import { Link, Route, Routes }from 'react-router-dom'
import Courses from './courses/Courses'
function App() {
  return (
    <>
{/*     
   <Home/>
   <Course/> */}
  
   <Routes>
    <Route path="/"element={<Home/>} />
    <Route path="/course" element={<Courses/>} />
   </Routes>
  
    </>
  )
}

export default App