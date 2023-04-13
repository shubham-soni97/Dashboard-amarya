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
      Container
        sx={{
          height:"auto",
          
       
          backgroundColor: "#e3f2fd",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        {/* style={{ display: "flex", flexDirection: "column", width: "100%", fontFamily:"Poppins"}} */}
        {/* style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} */}
        <Box sx={{ justifyContent:"space-evenly", display: "flex", flexDirection: "column", width: "100%", fontFamily:"Poppins"}}>
          <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap:'wrap'}} >
            <Box sx={{width:"auto", maxWidth:"100%"}}>
              <Typography>From Date:</Typography>
              &nbsp;
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker sx={{maxWidth:"100%"}} variant="static"/>
              </LocalizationProvider>
              </Box>

            <Box sx={{width:"auto", maxWidth:"100%"}}>
              <Typography>To Date:</Typography>
              &nbsp;
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker sx={{maxWidth:"100%"}} />
              </LocalizationProvider>
            </Box>

            <Box sx={{width:"auto", maxWidth:"100%"}} >
              <Typography>Leave Type</Typography>
                  
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
                </Box>
           
          </Box>
          <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginTop:"50px" , flexWrap:"wrap" }}>
            <Box sx={{display:"grid"}}>

              <Typography sx={{ fontFamily: "Poppins" }}>Reason</Typography>
         
              <TextareaAutosize

                placeholder="Enter your text here!"
                minRows="5"
                style={{
                  // width:"200px",
                  height:"auto",
                  borderRadius: "10px",
                  resize: "none",
                  padding: "10px",
                  outline: "none"
                }}
                
                />
              </Box>
            
            
              <Stack spacing={10} direction="" sx={{maxWidth:"100%"}}>
                {/* <Button variant="text">Text</Button> */}
                <Button  variant="contained">Submit</Button>
                {/* <Button variant="outlined">Outlined</Button> */}
              </Stack>
          
          </Box>
        </Box>
      </ Box>
    </>

  );
}

