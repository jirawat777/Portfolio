import React from 'react'
import Header from '../../Center/Header'
import './index.css'
import YouTube from 'react-youtube';

function Home() {

  const opts = {
    height: '500',
    width: '1000',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='HomePage'>
      <Header title='หน้าแรก' icon='fas fa-home' />
    </div>
  )
}

export default Home