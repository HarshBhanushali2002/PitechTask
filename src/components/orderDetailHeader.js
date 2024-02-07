"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import "../app/page.module.css";

export default function OrderDetailHeader() {

    

    return (
        <>
        <Card sx={{backgroundColor:"#E8ECED"}}>
            <CardContent>
                <Grid 
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item xs={12} sm={12} md={6} >
                        <Typography variant="subtitle2" gutterBottom sx={{fontWeight:700, display: "flex"}}>
                            {/* <Chip label="HB" color="success" /> */}
                            <Avatar  sx={{ width: 35, height: 35, mr: 1, bgcolor: "green" }}>HB</Avatar>
                             4907 - 12345 HOTEL/TECH WORK
                            
                        </Typography>
                        
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{display: "flex",justifyContent: "end"}}>
                        
                        <Button variant="contained" size="small" disableRipple startIcon={<DirectionsBoatFilledIcon sx={{color:"black"}}/>} sx={{backgroundColor:'#80E7FF', borderRadius: "8px"}} >
                        <Typography variant="subtitle2" sx={{color:"black",textTransform: 'none'}}>Lorem Ipsum</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={8}>
                        <Grid container>
                            <Grid item xs={4} sm={4} md={3}>
                                <Typography variant="caption">
                                    Date Requested
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3}>
                                <Typography variant="caption">
                                    Type
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3}>
                                <Typography variant="caption">
                                    Account Code
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={8}>
                        <Grid container>
                            <Grid item xs={4} sm={4} md={3}>
                                <Typography variant="caption" sx={{fontWeight:700}}>
                                    10 Jul 2019
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sm={4} md={3}>
                                <Typography variant="caption" sx={{fontWeight:700}}>
                                    Service
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sm={4} md={6}>
                                <Typography variant="caption" sx={{fontWeight:700}}>
                                    5830042 - HM PAX ACCOMODATION (LABOUR)
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Grid container  direction="row" justifyContent="flex-end">
                            <Grid item xs={12} sm={12} md={4}></Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Typography variant="caption" sx={{fontWeight:700,color:"#00704B",textDecoration:"underline"}}>
                                    Order Summary
                                </Typography>
                            </Grid>
                            
                            <Grid item xs={12} sm={12} md={4}>
                                <Typography variant="caption" sx={{fontWeight:700,color:"#00704B",textDecoration:"underline"}}>
                                    Order Progress
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
        </>

    )
}