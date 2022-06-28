import React from 'react'
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import './index.css'
function CreateButton() {
    return (
        <div>
            <Button className='mg-10-create' variant="contained" color="primary">
            <i className="fas fa-plus"></i>&nbsp;เพิ่มข้อมูล
            </Button>
        </div>
    )
}

export default CreateButton