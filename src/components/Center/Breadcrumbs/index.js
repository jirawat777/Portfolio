import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import LogoutButton from '../../Atome/LogoutButton';
import Stack from '@mui/material/Stack';
import './index.css'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { emphasize, styled } from '@mui/material/styles';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    cursor:'pointer',
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
function Breadcrumb(props) {
  return (
    <div>
      <Box>
        <Paper elevation={8} className='Block-Breadcrump'>
          <div className='Position-logout'>
            <div role="presentation" onClick={handleClick}>
              <Breadcrumbs aria-label="breadcrumb">
                <StyledBreadcrumb
                  component="a"
                  href="#"
                  label="Home"
                  icon={<HomeIcon fontSize="small" />}
                />
                <StyledBreadcrumb component="a" href="#" label="Catalog" />
                <StyledBreadcrumb
                  label="Accessories"
                  deleteIcon={<ExpandMoreIcon />}
                  onDelete={handleClick}
                />
              </Breadcrumbs>
            </div>
          </div>
        </Paper>
      </Box>
    </div >
  )
}

export default Breadcrumb