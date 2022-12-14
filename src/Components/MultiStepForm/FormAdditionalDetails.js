import { Box, Divider, Grid, InputLabel, Paper, TextField, Typography } from '@mui/material'
import profileEdit from '../../assets/profileEdit.png'

import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import React from 'react'

const FormAdditionalDetails = (props) => {
    return (

        <Paper>
            <Box sx={{ padding: '17px' }}>
                {/* //!G1 */}

                <Box sx={{ margin: '12px 0' }}>
                    <Box sx={{ margin: '5px 0' }}>
                        <Typography variant='h3' fontSize={'18px'} sx={{ margin: '5px 0' }}>
                            <PersonOutlineOutlinedIcon sx={{ translate: '0 5px' }} />
                            Signer Details
                        </Typography>
                        <Divider />
                    </Box>
                    <Grid container spacing={5} columns={16}>
                        <Grid item xs={8}>
                            <TextField
                                id="outlined-textarea"
                                label="Full Name"
                                placeholder="Tom jerry"
                                fullWidth
                                multiline
                                size='small'
                                margin='dense'
                                name='signer_full_name' value={props.formData.signer_full_name} onChange={props.updateFormData}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="outlined-textarea"
                                label="Phone Name"
                                placeholder="+91 8598653256"
                                fullWidth
                                multiline
                                size='small'
                                margin='dense'
                                name='signer_phone_number' value={props.formData.signer_phone_number} onChange={props.updateFormData}
                            />

                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="outlined-textarea"
                                label="Email"
                                placeholder="e.g. xyz@gmail.com"
                                fullWidth
                                multiline
                                size='small'
                                margin='dense'
                                name='signer_email' value={props.formData.signer_email} onChange={props.updateFormData}
                            />

                        </Grid>
                    </Grid>


                </Box>
                {/* //!G2 */}
                <Box sx={{ margin: '12px 0' }}>
                    <Box sx={{ margin: '6px 0' }} >
                        <Typography variant='h3' fontSize={'18px'} sx={{ margin: '5px 0' }}>
                            <CorporateFareOutlinedIcon sx={{ translate: '0 5px' }} />
                            Title Company Details
                        </Typography>
                        <Divider />
                    </Box>
                    <Grid container spacing={5} columns={16}>
                        <Grid item xs={8}>
                            <TextField
                                id="outlined-textarea"
                                label="Company Name"
                                placeholder="e.g. Xyz Ent."
                                fullWidth
                                multiline
                                size='small'
                                margin='dense'
                                name='company_name' value={props.formData.company_name} onChange={props.updateFormData}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="outlined-textarea"
                                label="Agent Name"
                                placeholder="e.g. Will Henry"
                                fullWidth
                                multiline
                                size='small'
                                margin='dense'
                                name='company_agend' value={props.formData.company_agend} onChange={props.updateFormData}
                            />

                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="outlined-textarea"
                                label="Company's Email"
                                placeholder="e.g www.xyzent.com"
                                fullWidth
                                multiline
                                size='small'
                                margin='dense'
                                name='company_email' value={props.formData.company_email} onChange={props.updateFormData}
                            />

                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="outlined-textarea"
                                label="Company's Phone Name"
                                placeholder="e.g. +91 11125485"
                                fullWidth
                                multiline
                                size='small'
                                margin='dense'
                                name='company_phone_number' value={props.formData.company_phone_number} onChange={props.updateFormData}
                            />

                        </Grid>
                    </Grid>
                </Box>

                {/* //!G3 */}

                <Box sx={{ margin: '12px 0' }}>
                    <Box sx={{ margin: '6px 0' }}>
                        <Typography variant='h3' fontSize={'18px'} sx={{ margin: '5px 0' }}>
                            <ShoppingCartCheckoutOutlinedIcon sx={{ translate: '0 5px' }} />
                            Order Info
                        </Typography>
                        <Divider />
                    </Box>
                    <Grid container spacing={5} columns={16}>
                        <Grid item xs={8}>
                            <TextField
                                id="outlined-textarea"
                                label="Escrow # / Loan No"
                                placeholder="e.g. esdf86412"
                                fullWidth
                                multiline
                                size='small'
                                margin='dense'
                                name='order_loan_number' value={props.formData.order_loan_number} onChange={props.updateFormData}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                id="outlined-textarea"
                                label="Property Address"
                                placeholder="e.g. At. Mumbai"
                                fullWidth
                                multiline
                                size='small'
                                margin='dense'
                                name='order_address' value={props.formData.order_address} onChange={props.updateFormData}
                            />

                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Paper>

    )
}

export default FormAdditionalDetails