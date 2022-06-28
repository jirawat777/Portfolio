import React from 'react'
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LinearProgress from "@mui/material/LinearProgress";
import './index.scss'

function Header(props) {
  const { title, icon } = props
  const [progress, setProgress] = React.useState(0);

  console.log(progress)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = 100;
          return Math.min(oldProgress + diff, 100);
        });
      }
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <div>
      <Box sx={{ width: '100%' }} className='box-progress'>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <Box>
        <Paper elevation={8} className='Block-Header'>
          <div className='Position-logout'>
            <Stack direction={'row'} alignItems={'center'}>
              <Button className='Header-Name'>
                <div className='logo-headpage'>
                  <i className={`icon-size ${icon}`} />
                </div>
                <div>
                  <span className='btn-text'>{title}</span>
                </div>
              </Button>
            </Stack>
          </div>
        </Paper>
      </Box>
    </div >
  )
}

export default Header