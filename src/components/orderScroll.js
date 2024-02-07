"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AnchorIcon from '@mui/icons-material/Anchor';
import Avatar from '@mui/material/Avatar';
import PushPinIcon from '@mui/icons-material/PushPin';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import "../app/page.module.css";



const theme = createTheme({
    palette: {
        primary: {
            main: "#D9D1C6",
        },
    },
})

export default function OrderList() {
    return (

        <ThemeProvider theme={theme}>
            <Grid
                container
                sx={{ marginTop: "5%", }}>

                <Grid item xs={12} sm={12} md={12}>
                    ORDERS <Badge badgeContent={8} color="primary" sx={{ backgroundColor: "#F2EEEB", width: "15px" }}></Badge>
                </Grid>
                <Grid item xs={12} sm={12} md={12}
                    style={{
                        overflowY: "scroll",
                        height: "500px",

                    }}>
                    <Card sx={{ mt: 1.5, backgroundColor: "#E8ECED", borderRadius: "15px" }} >
                        <CardContent>
                            <Grid container >
                                <Grid item xs={5} md={5} lg={5}>
                                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
                                        4907 - 12345
                                    </Typography>

                                </Grid>
                                <Grid item xs={7} md={7} lg={7} sx={{ display: "flex", justifyContent: "flex-end", }}>
                                    {/* <PhishingOutlined/> */}

                                    {/* <Chip label="HB" color="success"  /> */}
                                    <Avatar>HB</Avatar>
                                </Grid>

                            </Grid>
                            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
                                HOTEL/TECH WORK SQUAD
                            </Typography>
                            <Grid container spacing={12}>
                                <Grid item xs={6}>
                                    <Button variant="contained" size="small" disableRipple startIcon={<DirectionsBoatFilledIcon sx={{ color: "black" }} />} sx={{ backgroundColor: '#80E7FF', mt: 2, borderRadius: "8px" }} >
                                        <Typography variant="subtitle2" sx={{ color: "black", textTransform: 'none' }}>Lorem Ipsum</Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={6}
                                    direction="row"
                                    justifyContent="flex-end"
                                >
                                    <Typography variant="caption" sx={{ display: "flex", justifyContent: "end", textAlign: "right" }}>
                                        Services <br />
                                        12 Jul 1993
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    {
                        new Array(2).fill(0).map(() => (
                            <Card sx={{ mt: 1.5, backgroundColor: "#E8ECED", borderRadius: "15px" }} >
                                <CardContent>
                                    <Grid container >
                                        <Grid item xs={5} md={5} lg={5}>
                                            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
                                                4907 - 12345
                                            </Typography>

                                        </Grid>
                                        <Grid item xs={7} md={7} lg={7} sx={{ display: "flex", justifyContent: "flex-end", }}>
                                            {/* <PhishingOutlined/> */}
                                            <AnchorIcon sx={{ mr: 2, mt: 0.5 }} />
                                            {/* <Chip label="HB" color="success"  /> */}
                                            <Avatar>HB</Avatar>
                                        </Grid>

                                    </Grid>
                                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
                                        HOTEL/TECH WORK SQUAD
                                    </Typography>
                                    <Grid container spacing={12}>
                                        <Grid item xs={6}>
                                            <Button variant="contained" size="small" disableRipple startIcon={<DirectionsBoatFilledIcon sx={{ color: "black" }} />} sx={{ backgroundColor: '#80E7FF', mt: 2, borderRadius: "8px" }} >
                                                <Typography variant="subtitle2" sx={{ color: "black", textTransform: 'none' }}>Lorem Ipsum</Typography>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}
                                            direction="row"
                                            justifyContent="flex-end"
                                        >
                                            <Typography variant="caption" sx={{ display: "flex", justifyContent: "end", textAlign: "right" }}>
                                                Services <br />
                                                12 Jul 1993
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        ))
                    }

                    {
                        new Array(2).fill(0).map(() => (
                            <Card sx={{ mt: 1.5, backgroundColor: "#E8ECED", borderRadius: "15px" }} >
                                <CardContent>
                                    <Grid container >
                                        <Grid item xs={5} md={5} lg={5}>
                                            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
                                                4907 - 12345
                                            </Typography>

                                        </Grid>
                                        <Grid item xs={7} md={7} lg={7} sx={{ display: "flex", justifyContent: "flex-end", }}>
                                            {/* <PhishingOutlined/> */}
                                            <PushPinIcon sx={{ mr: 2, mt: 0.5 }} /> <AnchorIcon sx={{ mr: 2, mt: 0.5 }} />
                                            {/* <Chip label="HB" color="success"  /> */}
                                            <Avatar>HB</Avatar>
                                        </Grid>

                                    </Grid>
                                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
                                        HOTEL/TECH WORK SQUAD
                                    </Typography>
                                    <Grid container spacing={12}>
                                        <Grid item xs={6}>
                                            <Button variant="contained" size="small" disableRipple startIcon={<DirectionsBoatFilledIcon sx={{ color: "black" }} />} sx={{ backgroundColor: '#80E7FF', mt: 2, borderRadius: "8px" }} >
                                                <Typography variant="subtitle2" sx={{ color: "black", textTransform: 'none' }}>Lorem Ipsum</Typography>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}
                                            direction="row"
                                            justifyContent="flex-end"
                                        >
                                            <Typography variant="caption" sx={{ display: "flex", justifyContent: "end", textAlign: "right" }}>
                                                Services <br />
                                                12 Jul 1993
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        ))
                    }

                    <Card sx={{ mt: 1.5, backgroundColor: "#E8ECED", borderRadius: "15px" }} >
                        <CardContent>
                            <Grid container >
                                <Grid item xs={5} md={5} lg={5}>
                                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
                                        4907 - 12345
                                    </Typography>

                                </Grid>
                                <Grid item xs={7} md={7} lg={7} sx={{ display: "flex", justifyContent: "flex-end", }}>
                                    {/* <PhishingOutlined/> */}
                                    <ErrorOutlineIcon sx={{ mr: 2, mt: 0.5 }}/>
                                    {/* <Chip label="HB" color="success"  /> */}
                                    <Avatar>HB</Avatar>
                                </Grid>

                            </Grid>
                            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
                                HOTEL/TECH WORK SQUAD
                            </Typography>
                            <Grid container spacing={12}>
                                <Grid item xs={6}>
                                    <Button variant="contained" size="small" disableRipple startIcon={<DirectionsBoatFilledIcon sx={{ color: "black" }} />} sx={{ backgroundColor: '#80E7FF', mt: 2, borderRadius: "8px" }} >
                                        <Typography variant="subtitle2" sx={{ color: "black", textTransform: 'none' }}>Lorem Ipsum</Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={6}
                                    direction="row"
                                    justifyContent="flex-end"
                                >
                                    <Typography variant="caption" sx={{ display: "flex", justifyContent: "end", textAlign: "right" }}>
                                        Services <br />
                                        12 Jul 1993
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>

                    <Card sx={{ mt: 1.5, backgroundColor: "#E8ECED", borderRadius: "15px" }} >
                        <CardContent>
                            <Grid container >
                                <Grid item xs={5} md={5} lg={5}>
                                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
                                        4907 - 12345
                                    </Typography>

                                </Grid>
                                <Grid item xs={7} md={7} lg={7} sx={{ display: "flex", justifyContent: "flex-end", }}>
                                    {/* <PhishingOutlined/> */}

                                    {/* <Chip label="HB" color="success"  /> */}
                                    <Avatar>HB</Avatar>
                                </Grid>

                            </Grid>
                            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>
                                HOTEL/TECH WORK SQUAD
                            </Typography>
                            <Grid container spacing={12}>
                                <Grid item xs={6}>
                                    <Button variant="contained" size="small" disableRipple startIcon={<DirectionsBoatFilledIcon sx={{ color: "black" }} />} sx={{ backgroundColor: '#80E7FF', mt: 2, borderRadius: "8px" }} >
                                        <Typography variant="subtitle2" sx={{ color: "black", textTransform: 'none' }}>Lorem Ipsum</Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={6}
                                    direction="row"
                                    justifyContent="flex-end"
                                >
                                    <Typography variant="caption" sx={{ display: "flex", justifyContent: "end", textAlign: "right" }}>
                                        Services <br />
                                        12 Jul 1993
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>


                </Grid>
            </Grid>
        </ThemeProvider>

    )
}