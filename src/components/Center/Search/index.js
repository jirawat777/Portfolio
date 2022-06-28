import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './index.css'
function SearchBar(props) {
  const { title } = props
  return (
    <div>
      <Paper elevation={8} className='Block-Content-Search'>
        <Typography variant="h6" component="div" gutterBottom className='Page-Name-Search'>
          {title}
        </Typography>
        <Stack spacing={2} direction={'row'} className='Content-Search'>
          <TextField id="outlined-basic" autoComplete='off' className='Search-Field' size='small' label="ชื่อ" variant="outlined" />
          <Button variant="contained" className='Search-Button' color="success">
            <i className="fas fa-search"></i>&nbsp;ค้นหา
          </Button>
        </Stack>
      </Paper>
    </div>
  )
}

export default SearchBar