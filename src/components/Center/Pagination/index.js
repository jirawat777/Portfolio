import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './index.scss'

function Paginations(props) {
  const { count } = props

  return (
    <div className='position-pagination'>
      <Stack spacing={2}>
        <Pagination count={count} variant="outlined" shape="rounded" />
      </Stack >
    </div>
  )
}

export default Paginations