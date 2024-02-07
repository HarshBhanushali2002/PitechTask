"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { LocationOn, Call, Phone, Mail, Person, AttachFile } from '@mui/icons-material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const theme = createTheme({
    palette: {
        primary: {
            main: "#ABB0B8",
        },
        secondary:{
            main: "#FFD700"
        }
    },
})



export default function OrderDetailTabs() {



    return (
        <>
            <ThemeProvider theme={theme}>
                <Card >
                    <CardContent>
                        <Tabs
                            value={"one"}
                            aria-label="wrapped label tabs example"

                        >
                            <Tab
                                value="one"
                                label="Summary"
                                sx={{ width: "10%", fontSize: "10px", fontWeight: "800", color: "black !important" }}
                                disableRipple
                            />
                            <Tab sx={{ width: "10%", fontSize: "10px", fontWeight: "600" }} value="two" label="Order Lines" />
                            <Tab sx={{ width: "10%", fontSize: "10px", fontWeight: "600" }} value="three" label="Supplier" />
                            <Tab sx={{ width: "10%", fontSize: "10px", fontWeight: "600" }} value="three" label="Analysis" />
                            <Tab sx={{ width: "10%", fontSize: "10px", fontWeight: "600" }} value="three" label="Freight Details" />
                            <Tab sx={{ width: "10%", fontSize: "10px", fontWeight: "600" }} value="three" label="Delivery" />
                            <Tab sx={{ width: "10%", fontSize: "10px", fontWeight: "600" }} value="three" label="Invoice" />
                            <Tab sx={{ width: "10%", fontSize: "10px", fontWeight: "600" }} value="three" label="Memos" />
                            <Tab sx={{ width: "10%", fontSize: "10px", fontWeight: "600" }} value="three" label="Notes & Attachment" />
                            <Tab sx={{ width: "10%", fontSize: "10px", fontWeight: "600" }} value="three" label="Budgets" />
                        </Tabs>
                        <Divider sx={{ backgroundColor: 'grey', }} />
                    </CardContent>
                </Card>
                <Divider sx={{ backgroundColor: 'grey', }} />
                <Card
                    sx={{
                        overflowY: "scroll",
                        height: "500px"
                    }}>
                    <CardContent>
                        <Card sx={{ backgroundColor: "#EFF1F1" }}>
                            <CardContent>
                                <Typography variant="body" sx={{ display: "flex", fontWeight: 700 }}>
                                    COMPONENTS <Badge badgeContent={8} color="primary" sx={{ backgroundColor: "#F2EEEB", width: "15px", mt: 1, ml : 0.5 }}></Badge>
                                </Typography>
                                <Typography variant="caption" sx={{ display: "flex", mt: 0.5 }}>
                                    <em> No items found </em>
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card sx={{ backgroundColor: "#EFF1F1", marginTop: "2%" }}>
                            <CardContent>
                                <Typography variant="body" sx={{ display: "flex", fontWeight: 700 }}>
                                    AUTHORIZED SUPPLIER <Badge badgeContent={"Ref:PRJ001983SRIN"} color="primary" sx={{ backgroundColor: "#F2EEEB", width: "15px", mt: 1, ml : 8 }}></Badge>
                                </Typography>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="caption" sx={{ display: "flex", justifyContent: "start" }}>
                                            Date Authorized
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="caption" sx={{ display: "flex", justifyContent: "start" }}>
                                            Authorized By
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="caption" sx={{ display: "flex", justifyContent: "start" }}>
                                            Invoice Chase Date
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="caption" sx={{ display: "flex", justifyContent: "start" }}>
                                            PO Chase Date
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="caption" sx={{ display: "flex", justifyContent: "start" }}>
                                            PO Ref No.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="caption" sx={{ display: "flex", justifyContent: "start" }}>
                                            Account Code
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="caption" sx={{ display: "flex", justifyContent: "start", fontWeight: 700 }}>
                                            10 Jul 2019
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="caption" sx={{ display: "flex", justifyContent: "start", fontWeight: 700 }}>
                                            Jim Darren
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="caption" sx={{ display: "flex", justifyContent: "start", fontWeight: 700 }}>
                                            -
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="caption" sx={{ display: "flex", justifyContent: "start", fontWeight: 700 }}>
                                            -
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="caption" sx={{ display: "flex", justifyContent: "start", fontWeight: 700 }}>
                                            -
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="caption" sx={{ display: "flex", justifyContent: "start", fontWeight: 700 }}>
                                            -
                                        </Typography>
                                    </Grid>

                                </Grid>
                                <Typography variant="caption" sx={{ display: "flex", fontWeight: 700, color: "#2a6cc1", textDecoration: "underline", marginTop: "15px" }}>
                                    Repaires (Riding Squards / Manpower)
                                </Typography>

                                <Typography variant="caption" sx={{ display: "flex", fontWeight: 700, color: "#2a6cc1", textDecoration: "underline", marginTop: "15px" }}>
                                    <StarIcon color='secondary'/> <StarIcon color='secondary'/> <StarIcon color='secondary'/> <StarIcon color='secondary'/>  <StarBorderIcon color='secondary'/>
                                </Typography>

                                <Typography variant="caption" sx={{ display: "flex", fontWeight: 700, color: "#00704B", textDecoration: "underline", marginTop: "5px" }}>
                                    <LocationOn sx={{mr: 1}} /> 1st Floor, Skypark, 8 Elliot Place
                                </Typography>
                                <Typography variant="caption" sx={{ display: "flex", fontWeight: 700, color: "#00704B", textDecoration: "underline", marginTop: "5px" }}>
                                    <Call  sx={{mr: 1}}/> +0 44 (0) 141 405 1299
                                </Typography>
                                <Typography variant="caption" sx={{ display: "flex", fontWeight: 700, color: "#00704B", textDecoration: "underline", marginTop: "5px" }}>
                                    <Phone  sx={{mr: 1}}/> +0 44 (0) 141 405 1299
                                </Typography>
                                <Typography variant="caption" sx={{ display: "flex", fontWeight: 700, color: "#00704B", textDecoration: "underline", marginTop: "5px" }}>
                                    <Mail  sx={{mr: 1}}/> repairs@services.com
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card sx={{ backgroundColor: "#EFF1F1", marginTop: "2%" }}>
                            <CardContent>
                                <Typography variant="body" sx={{ display: "flex", fontWeight: 700 }}>
                                    SUPPLIERS <Badge badgeContent={2} color="primary" sx={{ backgroundColor: "#F2EEEB", width: "15px", mt: 1, ml : 0.5 }}></Badge>
                                </Typography>
                                <TableContainer>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell >Status</TableCell >
                                                <TableCell align="right">Supplier Name</TableCell>
                                                <TableCell align="right">Goods</TableCell>
                                                <TableCell align="right">Freight</TableCell>
                                                <TableCell align="right">Total</TableCell>
                                                <TableCell align="right">Cur</TableCell>
                                                <TableCell align="right">Base (USD)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            <TableRow >
                                                <TableCell component="th" scope="row">
                                                    <Chip label="HB" color="success" />
                                                </TableCell>
                                                <TableCell align="right" ><Typography sx={{fontWeight:"600"}} variant="caption">Engineering Co. Ltd</Typography></TableCell>
                                                <TableCell align="right"><Typography sx={{fontWeight:"600"}} variant="caption">3,456.90</Typography></TableCell>
                                                <TableCell align="right"><Typography sx={{fontWeight:"600"}} variant="caption">0.00</Typography></TableCell>
                                                <TableCell align="right"><Typography sx={{fontWeight:"600"}} variant="caption">3,456.90</Typography></TableCell>
                                                <TableCell align="right"><Typography sx={{fontWeight:"600"}} variant="caption">EUR</Typography></TableCell>
                                                <TableCell align="right"><Typography sx={{fontWeight:"600"}} variant="caption">3,811.90</Typography></TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    <Chip label="HB" color="success" />
                                                </TableCell>
                                                <TableCell align="right" ><Typography sx={{fontWeight:"600"}} variant="caption">Fintech Co. Ltd - SPARES</Typography></TableCell>
                                                <TableCell align="right"><Typography sx={{fontWeight:"600"}} color="error" variant="caption">4370.60</Typography></TableCell>
                                                <TableCell align="right"><Typography sx={{fontWeight:"600"}} variant="caption">0.00</Typography></TableCell>
                                                <TableCell align="right"><Typography sx={{fontWeight:"600"}} variant="caption">4370.60</Typography></TableCell>
                                                <TableCell align="right"><Typography sx={{fontWeight:"600"}} variant="caption">USD</Typography></TableCell>
                                                <TableCell align="right"><Typography sx={{fontWeight:"600"}} variant="caption">4370.60</Typography></TableCell>
                                            </TableRow>

                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </>
    )
}