import React from 'react'
import Avatar from '@mui/material/Avatar';
import './index.scss'
import profile from '../../../Static/images/Profile/Profile.jpeg';

function ProfileSidebar() {
    return (
        <div className='block-profile'>
            <div className='Avatar-Profile'>
                <Avatar src={profile} className='Avatar-Image' />
            </div>
            <div className='Content-Profile'>
                Jirawat.n
            </div>
        </div>
    )
}

export default ProfileSidebar