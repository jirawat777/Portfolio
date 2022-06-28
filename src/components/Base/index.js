import MenuSidebar from '../Organism/MenuSidebar'
import ProfileSidebar from '../Organism/ProfileSidebar'
import React from 'react'
import './index.css'

function Layout() {
  return (
    <div className='sidebar'>
      <ProfileSidebar />
      <MenuSidebar/>
    </div>
  )
}

export default Layout