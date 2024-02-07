import * as React from 'react';
import Grid from '@mui/material/Grid';
import { SearchOutlined, NotificationsActiveOutlined, AppsOutlined } from '@mui/icons-material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Header() {
  return (
    <Grid container>
      <Grid item xs={8}>
        <p style={{fontWeight: "700"}}>Procurement</p>
      </Grid>
      <Grid item xs={4} sx={{ alignItems: "center", display: "flex", justifyContent: "end", p: 2 }}>
        <SearchOutlined  />
        <NotificationsActiveOutlined   />
        <AppsOutlined />
        {/* <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 15, height: 15, fontSize: "12px", position: "absolute", right: "150px" }}
        /> */}
        <Select

          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{ height: "25px", width: "8rem", fontSize: "12px", borderRadius: "20px", ml: 1}}
        // placeholder="Daniel Rogers"
        >
          {/* <AccountCircleRoundedIcon/> */}
          <MenuItem value={"Daniel Rogers"}>
            {/* <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 15, height: 15, fontSize: "12px", position: "absolute", right: "140px",mr: -1}}
            /> */}
            Daniel Rogers</MenuItem>
        </Select>

      </Grid>

    </Grid>
  )
}

