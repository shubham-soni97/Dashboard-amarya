import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Padding } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import TextareaAutosize from '@mui/base/TextareaAutosize';



export default function BasicTextFields() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (

    <>
      <Box
        sx={{
          justifyContent: "space-between",
          display: 'flex',
          backgroundColor: "#FFFFFF",
          padding: "20px",
          borderRadius: "20px"

        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
            <Grid item xs={12} sm={6}>
              <Typography>From Date:</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker variant="static"/>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography>To Date:</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography>Leave Type</Typography>
              <FormControl sx={{ width: "16rem" }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Sick Leave (SL)</MenuItem>
                  <MenuItem value={20}>Casual Leave (CL)</MenuItem>
                  <MenuItem value={30}>Earned Leave (EL)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop:"50px", padding:"0px, 60px" }}>
            <Grid item xs={12} sm={6} sx={{ marginLeft:""}}>
              <Typography sx={{ fontFamily: "Poppins" }}>Reason</Typography>
              {/* <TextField, 
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        inputProps={{ maxLength: 200 , maxRows:10}}
      /> */}
              <TextareaAutosize
                placeholder=""
                minRows="5"
                style={{
                 
                  width: "300px",
                  borderRadius: "10px",
                  resize: "none",
                  padding: "10px",
                  outline: "none"
                }}
                
              />
            </Grid>
            <Grid sx={{ marginTop: "30px" }}>
              <Stack spacing={10} direction="">
                {/* <Button variant="text">Text</Button> */}
                <Button variant="contained">Submit</Button>
                {/* <Button variant="outlined">Outlined</Button> */}
              </Stack>
            </Grid>
          </div>
        </div>
      </ Box>
      {/* <Box
        sx={{
          justifyContent: "space-between",
          display: 'flex',
          backgroundColor: "#FFFFFF",
          padding: "20px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px"

        }}
      >
        
      </Box> */}
    </>

  );
}

