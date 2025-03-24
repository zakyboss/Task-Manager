import React from 'react'
import Tasks from './Tasks'
import ProjectsSideBar from './ProjectsSideBar'
import './index.css'
export default function AppLayout() {
  return (
    <div className='layout'>
        <ProjectsSideBar/>
        <Tasks/>
    </div>
  )
}
