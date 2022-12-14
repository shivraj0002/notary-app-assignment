import { Box, Card, Divider, Grid, Paper, styled, TextField, Typography } from '@mui/material'
import React from 'react'


const FormDocCount = (props) => {
    return (
        <Card sx={{ maxWidth: '530px', padding: '17px' }}>
            <Box sx={{ marginTop: '25px', marginBottom: '55px' }}>
                <Typography variant='h3' align='center' fontSize={'26px'} fontWeight={'bold'} sx={{ marginBottom: '7px' }}>
                    Calculate your Costs for RON!
                </Typography>
                <Divider variant='middle' />
            </Box>
            <Box sx={{ flexGrow: 1, marginBottom: '15px' }}>
                <Grid container spacing={4} columns={16} sx={{ padding: '10px' }}>
                    {/* //!  G1 */}
                    <Grid item xs={12}>
                        <Typography variant='h6'>
                            No of Extra Signature
                        </Typography>
                        <Typography variant='subtitle2'>
                            Please enter zero, if only one signature is required
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" variant="outlined" size='small' margin='dense' name='signature_count' value={props.formData.signature_count} onChange={props.updateFormData} />
                    </Grid>
                    {/*  //! G2 */}
                    <Grid item xs={12}>
                        <Typography variant='h6'>
                            How many files will you be uploading in the session
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" variant="outlined" size='small' margin='dense' name='file_count' value={props.formData.file_count} onChange={props.updateFormData} />
                    </Grid>
                    {/* //! G3 */}
                    <Grid item xs={12}>
                        <Typography variant='h6'>
                            Numbers of signers
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" variant="outlined" size='small' margin='dense' name='signers_count' value={props.formData.signers_count} onChange={props.updateFormData} />
                    </Grid>
                    {/* //!G4 */}
                    <Grid item xs={12}>
                        <Typography variant='h6'>
                            Do you need witness
                        </Typography>
                        <Typography variant='subtitle2'>
                            Do Not enter anything if you,re bring your own witness
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" variant="outlined" size='small' margin='dense' name='allowed_witness' value={props.formData.allowed_witness} onChange={props.updateFormData} />
                    </Grid>
                </Grid>
            </Box>
            <Typography variant='h5' fontWeight={'bold'} fontSize='18px' align='center'>
                Your approximate Quote : $59
            </Typography>
        </Card>
    )
}

export default FormDocCount