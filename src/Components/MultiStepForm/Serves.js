import React from 'react'
import { Button, Card, CardActions, CardHeader, Divider, Typography } from '@mui/material'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';

const Serves = (props) => {

    return (

        <Card sx={{ maxWidth: '450px', padding: '17px', margin: '15px 0', background: `${props.fev ? '#FDE57A' : ''} ` }}>
            <Box sx={{ margin: '0 0 5px 0' }}>
                <Typography variant='h3' sx={{ fontSize: '26px', margin: '5px 0' }}>
                    {props.title ? props.title : 'Lorem ipsum dolor'}
                </Typography>
                {props.fev && <span style={{ float: 'right', color: '#9c27b0' }}><StarIcon sx={{ translate: '0 5px' }} /> Populer</span>}
                <Divider />
            </Box>
            <Typography variant='body2' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
            </Typography>
            <Typography variant="caption" display="block" align='right' >
                per year
            </Typography>
            <CardActions >
                <Button sx={{ padding: '0px' }} color='customThemeColor' variant='text' size='small' endIcon={<ArrowForwardOutlinedIcon />}>View details</Button>
            </CardActions>



        </Card>
    )
}

export default Serves