import React from 'react'
import Header from '../../Center/Header'
import './index.scss'
import Box from '@mui/material/Box';

function ProfilePage() {
  return (
    <div className='ProfilePage'>
      <Header title='ประวัติส่วนตัว' icon='fas fa-user' />
      <Box>
        เกี่ยวกับ "จิรวัฒน์"
      </Box>
    </div>
  )
}

export default ProfilePage