import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import { SearchOutlined} from '@mui/icons-material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';

import Badge from '@mui/material/Badge';
import TuneIcon from '@mui/icons-material/Tune';
import '../app/page.module.css'





export default function SearchCard() {
    return (

        <Card sx={{ backgroundColor: "#F2EEEB", borderRadius: "20px" }}>
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <Input
                                id="input-with-icon-adornment"
                                placeholder='My Responsibilities'
                                startAdornment={
                                    <>
                                        <InputAdornment position="start">
                                            <DirectionsBoatFilledIcon />
                                        </InputAdornment>

                                    </>
                                }
                                endAdornment={
                                    <>
                                        <InputAdornment position="end">
                                            <SearchOutlined />
                                        </InputAdornment>
                                    </>
                                }
                                sx={{ borderRadius: "20px", backgroundColor: "#dadada",  }}

                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} sx={{display: "flex"}}>
                        <FormControl sx={{  minWidth: 120 }} size="small">

                            <Select
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={{ borderRadius: "20px", backgroundColor: "#dadada" }}
                                defaultValue="PO"
                            >
                                <MenuItem value="PO">
                                    PO
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        {/* <Badge badgeContent={10} color="success">
                            <TuneIcon color="success" className='TuneIcon' sx={{backgroundColor: "black", borderRadius: "50%", fontSize: "18px",}} />
                        </Badge> */}
                    </Grid>

                    <Grid item xs={2}  sx={{ alignItems: "center", display: "flex", justifyContent: "start", pl: 3}}>
                        {/* <SettingsApplications/> */}
                        <Badge badgeContent={10} color="success">
                            <TuneIcon color="success" className='TuneIcon' sx={{backgroundColor: "black", borderRadius: "50%", fontSize: "25px",}} />
                        </Badge>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{mt: 1}}>
                    <Grid item xs={6}>
                        <TextField
                            id="coy-id"
                            label="Coy Id"
                            placeholder="Enter Coy Id"
                            variant="standard"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="standard-number"
                            label="Order No"
                            placeholder="Enter Order No"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{mt: 1}}>
                    <Grid item xs={2}>
                        <Typography variant="caption" sx={{ fontWeight: 700, textDecoration: "underline" }}>
                            Sort
                        </Typography>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={2}>
                        <Typography variant="caption" sx={{ fontWeight: 700, textDecoration: "underline" }}>
                            Group By
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="caption" sx={{ fontWeight: 700, textDecoration: "underline" }}>
                            Clear
                        </Typography>
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={2}>
                        <Typography variant="caption" sx={{ fontWeight: 700, textDecoration: "underline" }}>
                            Search
                        </Typography>
                    </Grid>
                </Grid>

            </CardContent>

        </Card>

    )
}