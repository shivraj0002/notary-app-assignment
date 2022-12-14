import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import profileDummyImg from '../../assets/ProfileDummyImg.png'


const Profile = () => {
    return (
        <Paper sx={{
            minHeight: '95.5vh',
            width: '20vw',
            background: '#2A1B52',
            borderRadius: '20px 0 0 20px',
            padding: '17px'
        }}>
            <Box>
                <Typography variant='h2' fontSize={'28px'} fontWeight='bold' color='customThemeColor.light' >
                    <OfflineBoltIcon fontSize='large' sx={{ translate: '0 9px' }} />  BeInsurance
                </Typography>
                <center style={{ marginTop: '50px' }}>
                    <img src={profileDummyImg} alt='Profile Img' width='132px' height="132px" style={{
                        borderRadius: '100px'
                    }} />
                    <br />
                    <br />
                    <Typography variant='h2' fontSize={'28px'} fontWeight='bold' fontFamily={'Rajdhani'} color='#ffffff' >
                        Steve Jobs
                    </Typography>
                </center>
                <br />
                <br />
                <Box color={'#CCC6DC'}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={2}>
                            <EmailIcon />
                        </Grid>
                        <Grid item xs={14}>
                            <Typography variant="caption" display="block" gutterBottom>
                                Jackson.jn@mail.com
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <CallIcon />
                        </Grid>
                        <Grid item xs={14}>
                            <Typography variant="caption" display="block" gutterBottom>
                                (316) 555-0116
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <LocationOnIcon />
                        </Grid>
                        <Grid item xs={14}>
                            <Typography variant="caption" display="block" gutterBottom>
                                3891 Ranchview Dr. Richardson, California 62639
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <PersonIcon />
                        </Grid>
                        <Grid item xs={14}>
                            <Typography variant="caption" display="block" gutterBottom>
                                Insurance ID 24792492
                            </Typography>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </Paper>
    )
}

export default Profile