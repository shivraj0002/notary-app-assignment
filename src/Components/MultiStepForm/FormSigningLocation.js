import React from 'react'
import { Box, Button, Divider, Grid, InputLabel, Paper, TextField, Typography } from '@mui/material'
import profileEdit from '../../assets/profileEdit.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const FormSigningLocation = (props) => {
    return (
        <Paper>
            <Box sx={{ padding: '17px' }}>
                {/* //!G1 */}

                <Box sx={{ margin: '12px 0' }}>
                    <Typography variant='h3' fontSize={'18px'} sx={{ margin: '7px 0' }}>
                        <PersonOutlineOutlinedIcon sx={{ translate: '0 5px' }} />
                        Signer Details
                    </Typography>
                    <Divider variant="middle" />
                    <Box sx={{ margin: '12px 0' }}>
                        <TextField
                            id="outlined-textarea"
                            label="Enter Signing Location"
                            placeholder="e.g. Mumbai"
                            fullWidth
                            multiline
                            size='small'
                            margin='dense'
                            name='signing_location' value={props.formData.signing_location} onChange={props.updateFormData}
                        />
                    </Box>

                    <Grid container spacing={5} columns={16}>
                        <Grid item xs={8}>
                            <TextField
                                id="outlined-textarea"
                                label="Date"
                                placeholder="e.g. 22/07/2022"
                                fullWidth
                                multiline
                                size='small'
                                margin='dense' name='signing_date' value={props.formData.signing_date} onChange={props.updateFormData}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="outlined-textarea"
                                label="Time"
                                placeholder="e.g. 12:45pm"
                                fullWidth
                                multiline
                                size='small'
                                margin='dense'
                                name='signing_time' value={props.formData.signing_time} onChange={props.updateFormData}
                            />

                        </Grid>
                    </Grid>
                </Box>
                <center>
                    <Button
                        variant="outlined"
                        size='large'
                        sx={{
                            border: 'none',
                            background: '#E5EDFE',
                            margin: '28px 0',
                            '&:hover': {
                                border: 'none',
                                background: '#E5EDFE',

                            }
                        }} onClick={props.submitFormData} >
                        Schedule Appointment
                    </Button>
                </center>
            </Box>
        </Paper >
    )
}

export default FormSigningLocation