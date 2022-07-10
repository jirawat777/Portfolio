import React, { useState, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import './index.scss'

function MenuSidebar() {
    let navigate = useNavigate();
    const [activePath, setactivePath] = useState(false)
    const [path, setpath] = useState('')

    const MenuSidebar = [
        // { title: 'หน้าแรก', path: 'home', icon: 'fas fa-home', id: 'home' },
        { title: 'ประวัติส่วนตัว', path: 'profile', icon: 'fas fa-user', id: 'calculate' },
        { title: 'ประวัติการศึกษา', path: 'education', icon: 'fas fa-university', id: 'calculate' },
        { title: 'ประวัติการทำงาน', path: 'work', icon: 'fas fa-briefcase', id: 'list' },
        { title: 'ทักษะ', path: 'skill', icon: 'fas fa-list-ol', id: 'list' },
        { title: 'ผลงาน', path: 'workmanship', icon: 'fas fa-chart-bar', id: 'overall' }
    ]
    const isActive = window.location.pathname.split('/')[1]

    const handleClick = (x) => {
        navigate(x.path)
        setactivePath(true)
    }
    return (
        <div className='block-sidebar'>
            {MenuSidebar?.map((x, i) =>
                <MenuItem className={`${isActive ? isActive : ''} Menu-Sidebar`} onClick={() => handleClick(x)} key={x.id}>
                    <div className='Block-Icon'>
                        <i className={x.icon} />
                    </div>
                    <div>
                        {x.title}
                    </div>
                </MenuItem>
            )}
        </div>
    )
}

export default MenuSidebar