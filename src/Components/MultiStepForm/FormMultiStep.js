import * as React from 'react';
import { Button, Container, Grid, IconButton, Step, StepLabel, Stepper, Typography } from '@mui/material'
import Profile from '../Profile/Profile'
import { Box } from '@mui/system';
import Serves from './Serves';
import FormDocCount from './FormDocCount';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormAdditionalDetails from './FormAdditionalDetails';
import FormSigningLocation from './FormSigningLocation';
import axios from 'axios';


const FormMultiStep = () => {
    const [activeStep, setActiveStep] = React.useState(1)
    const [formData, setFormData] = React.useState({
        signature_count: '',
        file_count: '',
        signers_count: '',
        allowed_witness: '',
        signer_full_name: '',
        signer_phone_number: '',
        signer_email: '',
        company_name: '',
        company_agend: '',
        company_email: '',
        company_phone_number: '',
        order_loan_number: '',
        order_address: '',
        signing_location: '',
        signing_date: '',
        signing_time: ''
    })

    const updateFormData = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }
    const submitFormData = () => {
        axios.post("https://notaryapp-staging.herokuapp.com/plugin/submitApptDetails", { ...formData }).then(res => {
            console.log(res);
            console.log(res.data);
            alert("Appointment data saved successfully!")
        }).catch(error => {
            console.error(error.message);
        })
        console.log(formData);
    }
    return (
        <Container>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={5}>
                    <Profile />
                </Grid>
                <Grid item xs={11}>
                    {/* //! G1 */}
                    <Box sx={{ margin: '10px 0' }}>
                        <Typography variant='h3'>
                            <IconButton><ArrowBackIosNewIcon /></IconButton> New Appointment Request
                        </Typography>
                        <Typography variant='caption' sx={{ margin: '0 60px' }}>
                            Same great coverage for less
                        </Typography>
                    </Box>
                    {/* //! G2 */}
                    <Box>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            <Step key={1}>
                                <StepLabel />
                            </Step>
                            <Step key={2}>
                                <StepLabel />
                            </Step>
                            <Step key={3}>
                                <StepLabel />
                            </Step>
                        </Stepper>
                    </Box>

                    <Box sx={{ margin: '10px 0' }}>
                        {activeStep === 1 && <Grid container spacing={2} columns={16}>
                            <Grid item xs={8}>
                                <Serves title={'Notary Signing Agent'} />
                                <Serves title={'Remote online Notery'} fev={true} />
                                <Serves title={'Mobile General Notary'} />
                            </Grid>
                            <Grid item xs={8}>
                                <FormDocCount formData={formData} updateFormData={updateFormData} />
                            </Grid>
                        </Grid>}
                        {activeStep === 2 && <FormAdditionalDetails formData={formData} updateFormData={updateFormData} />}
                        {activeStep === 3 && <FormSigningLocation formData={formData} updateFormData={updateFormData} submitFormData={submitFormData} />}
                    </Box>
                    <Box>
                        {activeStep !== 1 && <Button startIcon={<ArrowBackIosNewIcon />} variant="text" sx={{ float: 'left' }} onClick={() => { setActiveStep((pre) => { return pre - 1 }) }}>Prev</Button>}
                        {activeStep !== 3 && <Button
                            endIcon={<ChevronRightIcon />}
                            variant="text"
                            sx={{ float: 'right' }}
                            onClick={() => { setActiveStep((pre) => { return pre + 1 }) }}
                        >Next</Button>}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FormMultiStep