import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './index.scss'

function CardContents(props) {
    const { id, title, year, detail } = props
    return (
        <div className='Card-Content'>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: '#f85904' }} aria-label="recipe">
                            {id}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={title}
                    subheader={year}
                />
                <CardContent>
                    <span>
                        {title}
                    </span>
                    <p>
                        {detail}
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardContents