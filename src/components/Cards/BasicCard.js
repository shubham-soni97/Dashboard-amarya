import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types"
import { color } from '@mui/system';




export default function BasicCard(props) {
    return (
        // <Card sx={{width:"22rem", height:"10rem"}}>

        // </Card>
        <Box sx={{
            width: "18rem",
            height: "10rem",
            textAlign:"center",
            display:"flex",
            justifyContent:"center",
            flexDirection: "column",
            zIndex:999,
            position:"inherit",
            color:"white"
            
        }}>

            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Casual Leave Balance
        </Typography> */}
            <Typography variant="h5" component="div" color={"lightgray"} >
                {props.tittle}
            </Typography>
            &nbsp;
            {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
            <Typography variant="h5" color={"lightgray"} sx={{fontFamily: "Poppins"}}>
                {props.days}
            </Typography>

        </Box>
    );
}

BasicCard.propTypes = {
    tittle: PropTypes.string,
    days: PropTypes.number
 
  };