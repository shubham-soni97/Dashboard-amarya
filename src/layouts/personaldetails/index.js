import { Avatar, Box, Button, Divider, Grid, Input, Paper, TextField, Typography } from '@mui/material'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddPhotoAlternateTwoToneIcon from '@mui/icons-material/AddPhotoAlternateTwoTone';
import RoomTwoToneIcon from '@mui/icons-material/RoomTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// import FilledInput from '@mui/material/FilledInput';
import divider from 'assets/theme/components/divider';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import './personaldetails.css'


const Personaldetails = () => {
    return (
        <>
            <DashboardLayout>
                <DashboardNavbar />
                <Box style={{
                    display: "flex",
                    WebkitBoxAlign: "center",
                    alignItems: "center",
                    minHeight: "20rem",
                    borderRadius: "10px",
                    opacity: 1,
                    color: "rgb(52, 71, 103)",
                    // background: "linear-gradient(195deg, rgba(73, 163, 241, 0.6), rgba(26, 115, 232, 0.6)) 50% center, url('https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1842&q=80') transparent no-repeat",
                    background: " url('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg') transparent no-repeat",
                    backgroundSize: "cover",
                    // backgroundImage:"url('https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80 ')",
                    // backgroundImage:"url('/userprofile.jpg')",
                    // borderRadius: "0.75rem",

                    backgroundPosition: 'center',
                    overflow: "hidden"
                }}>

                </Box>

                <Paper sx={{ maxWidth: "100%", padding: "10px", marginTop: "-25px", marginLeft: { lg: "15px", sm: "15px", md: "15px" }, marginRight: "15px", display: "flex", flexWrap: "wrap" }}>
                    <Grid style={{ display: "flex", alignItems: "center", width: "-webkit-fill-available", padding: "10px" }}>

                        <Grid sx={{
                            display: "inline-block",
                            width: "auto"
                        }}>

                            <Avatar sx={{ height: "70px", width: "70px" }}>

                                <Box component='img'

                                    sx={{ width: "100%", borderRadius: "50%", height: "100%" }}
                                    src='https://images.unsplash.com/photo-1573495804660-b6b271f4c3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
                                >
                                </Box>
                            </Avatar>
                        </Grid>

                        <Grid sx={{ display: "inline-block", paddingLeft: "20px" }}>
                            <Box sx={{ display: "inline-block" }}>
                                <Typography variant='h5'>
                                    Shubham Soni
                                </Typography>
                                <Typography variant="button" style={{ color: "rgb(123, 128, 154)", textTransform: "none" }}>
                                    Web developer
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* ------------------------------------------------------------------- */}
                    <Box style={{ display: "flex", WebkitFlexWrap: "wrap", borderRadius:"20px", boxShadow:"rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;" }}>
                        <Box sx={{
                            marginTop: '20px', display: "inline-block", borderRadius: "10px",
                            padding: "10px", flexWrap: "wrap", maxWidth: "100%"
                        }}>
                            {/* <AccountCircleIcon fontSize='large' color='#3a6974' /> */}

                            {/* <Button  type='file' hidden><AddPhotoAlternateTwoToneIcon ></AddPhotoAlternateTwoToneIcon>Upload new photo</Button>
                    <Typography>jbdhjsdshbh</Typography> */}
                            {/* <Button
                        sx={{ display: "block", textAlign: "ceter", margin: "auto" }}
                        component="label"
                    >
                        <AddPhotoAlternateTwoToneIcon sx={{ width: "1em", height: "1em" }}></AddPhotoAlternateTwoToneIcon>
                        <Typography sx={{ fontSize: "12px", display: 'inline-block', justifyContent: "center", marginLeft: "5px", padding: '2px' }}>Upload new image</Typography>
                        <input
                            type="file"
                            hidden
                        /> */}
                            {/* </Button> */}

                            <Typography marginBottom={2} variant='h6' color={"rgb(52, 71, 103)"}
                                textTransform={"capitalize"} textDecoration={"none"} fontWeight={"600"} 
                                marginLeft={{ 
                                    xs: "100px", lg: "15px", sm: "200px", md: "15px"
                                }} 
                                fontSize={{
                                    xs: "10px", sm: "15px", 
                                    lg: "1rem", md: "20px"
                                }}
                            >Profile information</Typography>
                            <Box marginLeft={7} >
                                <Box marginBottom={2}>
                                    <Typography variant='button' >Full Name &nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                                    <Typography variant='button' textTransform={"none"} color={"rgb(123, 128, 154)"}  >Ludu</Typography>
                                </Box>

                                <Box marginBottom={2}>
                                    <Typography variant='button' >Location&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                                    <Typography variant='button' textTransform={"none"} color={"rgb(123, 128, 154)"}  >Jabalpur</Typography>
                                </Box>

                                <Box marginBottom={2} >
                                    <Typography variant='button' >Phone number&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                                    <Typography variant='button' textTransform={"none"} color={"rgb(123, 128, 154)"}  > +91-8269796362</Typography>
                                </Box>

                                <Box marginBottom={2}>
                                    <Typography variant='button' >Email &nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;</Typography>
                                    <Typography variant='button' textTransform={"none"} color={"rgb(123, 128, 154)"}  > Ssoni190@gmail.com</Typography>
                                </Box>

                                <Box marginBottom={2}>
                                    <Typography variant='button' >Social: &nbsp;</Typography>
                                    <Typography variant='button' fontSize={"large"} textTransform={"none"} color={"rgb(123, 128, 154)"}  > <InstagramIcon></InstagramIcon></Typography>
                                    <Typography variant='button' fontSize={"large"} textTransform={"none"} color={"rgb(123, 128, 154)"}  > <FacebookIcon></FacebookIcon></Typography>
                                    &nbsp;
                                    <Typography variant='button' fontSize={"large"} textTransform={"none"} color={"rgb(123, 128, 154)"}  >
                                        <TwitterIcon></TwitterIcon>
                                    </Typography>
                                </Box>
                            </Box>


                        </Box>

                        <Box sx={{ display: { sm: "none", lg: "block", xs: "none", md: "block" } }}>
                            <Divider orientation='vertical'></Divider>
                        </Box>

                        <Box sx={{
                            maxWidth: "100%", display: "inline-block",
                            padding: "10px", marginleft: "20px", marginTop: "20px"
                        }}>

                            <Typography marginBottom={2} variant='h6' color={"rgb(52, 71, 103)"}
                                textTransform={"capitalize"} textDecoration={"none"} fontWeight={"600"}
                                marginLeft={{ 
                                    xs: "100px", lg: "15px", sm: "200px", md: "15px"
                                }} 
                                fontSize={{
                                    xs: "10px", sm: "15px", 
                                    lg: "1rem", md: "20px"
                                }}
                                >
                                contact details
                            </Typography>

                            <Box sx={{ width: "100%", marginLeft: "60px", display: "inline-block" }}>
                                <Box marginBottom={2}>

                                    <Typography variant='button'>
                                        Permanent Address&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;
                                    </Typography >
                                    <Typography variant='button' textTransform={"none"} color={"rgb(123, 128, 154)"}>xyz</Typography>
                                </Box>
                                <Box marginBottom={2}>

                                    <Typography variant='button'>
                                        Pin code&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;
                                    </Typography>
                                    <Typography variant='button' textTransform={"none"} color={"rgb(123, 128, 154)"}>482001</Typography>
                                </Box>
                                <Box marginBottom={2}>

                                    <Typography variant='button'>
                                        City&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;
                                    </Typography>
                                    <Typography variant='button' textTransform={"none"} color={"rgb(123, 128, 154)"}>Jabalpur</Typography>
                                </Box>
                                <Box marginBottom={2}>
                                    <Typography variant='button'>
                                        State&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;
                                    </Typography>
                                    <Typography variant='button' textTransform={"none"} color={"rgb(123, 128, 154)"}>madhya pradesh</Typography>
                                </Box>


                            </Box>
                            {/* <Box sx={{ width: "48%", display: "inline-block", position: "absolute", overflow: "hidden" }}>




                                <Typography variant='button' textTransform={"none"} color={"rgb(123, 128, 154)"}></Typography>
                            </Box> */}
                        </Box>
                        {/* <Box sx={{}}>
                            <Typography>
                                Educaional details
                            </Typography>
                        </Box> */}

                    </Box>
                </Paper>


            </DashboardLayout>
        </>
    )
}

export default Personaldetails