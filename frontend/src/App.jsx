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
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
    <Route path="/"element={<Home/>} />
    <Route path="/course" element={<Courses/>} />
   </Routes>
  
  </div>
 
    </>
  )
}

export default App