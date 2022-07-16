import React from 'react'
import Header from '../../Center/Header'
import './index.scss'
import Box from '@mui/material/Box';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import profile from '../../../Static/images/Profile/Profile.jpeg';
import Grid from '@mui/material/Grid';

function ProfilePage() {
  return (
    <div className='ProfilePage'>
      <Header title='ประวัติส่วนตัว' icon='fas fa-user' />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
          <Carousel className='slide' autoPlay={true} infiniteLoop={true}>
            <div>
              <img alt='gallary' src={profile} />
            </div>
            <div>
              <img alt='gallary' src={profile} />
            </div>
            <div>
              <img alt='gallary' src={profile} />
            </div>
          </Carousel>
        </Grid>
        <Grid item xs={2} sm={4} md={4} >
        ชื่อ
        </Grid>
      </Grid>
    </div>
  )
}

export default ProfilePage