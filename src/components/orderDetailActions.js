"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { EditNote, Print, Pages, Report, AdsClick } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ArticleIcon from '@mui/icons-material/Article';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';

export default function OrderDetailActions() {
    return (
        <Card>
            <CardContent sx={{direction: "row", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <Grid 
                    container
                    // direction="row"
                    // justifyContent="space-between"
                    // alignItems="flex-start"
                    // sx={{direction: "row", display: "flex", justifyContent: "space-evenly", alignItems: "center",mr: 1}}
                >
                    <Grid item xs={12} sm={12} md={12/5}  >
                        <Typography variant="caption" sx={{display:"flex",fontWeight:700,color:"#00704B",textDecoration:"underline"}}>
                            <EditNote sx={{mr: 1}}/> Edit Order Details
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={12/5} >
                        <Typography variant="caption" sx={{display:"flex",fontWeight:700,color:"#00704B",textDecoration:"underline"}}>
                            <Print sx={{mr: 1}}/> Print Order Details
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12/5} >
                        <Typography variant="caption" sx={{display:"flex",fontWeight:700,color:"#00704B",textDecoration:"underline",}}>
                            <FileOpenIcon sx={{mr: 1}}/> Change Delivery Address
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12/5} >
                        <Typography variant="caption" sx={{display:"flex",fontWeight:700,color:"#00704B",textDecoration:"underline"}}>
                            <ArticleIcon sx={{mr: 1}}/> Reports
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12/5} >
                        <Typography variant="caption" sx={{display:"flex",fontWeight:700,color:"#00704B",textDecoration:"underline"}}>
                            <PanToolAltIcon sx={{mr: 1}}/> Actions
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    )
}