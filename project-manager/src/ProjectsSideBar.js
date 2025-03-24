import React from 'react'
import './index.css';
import Nav from './Nav';
import CreateProject from './CreateProject';
export default function ProjectsSideBar() {
  return (
    <div className='sidebar'>
        <Nav/>
        <CreateProject/>
    </div>
  )
}
