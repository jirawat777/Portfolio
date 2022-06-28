import React from 'react'
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import './index.css'
function LogoutButton() {
    return (
        <div>
            <Button className='mg-10' variant="contained" color="error">
                <i className="fas fa-power-off">&nbsp;</i>ออกจากระบบ
            </Button>
        </div >
    )
}

export default LogoutButton