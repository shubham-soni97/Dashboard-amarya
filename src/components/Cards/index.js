import React from 'react'
import BasicCard from './BasicCard'
// import { Box } from '@mui/material'
import './index.css'
import SoftBox from 'components/SoftBox'
import { Box } from '@mui/material'
import card from 'assets/theme/components/card'


export const Cards = () => {

    // let xyz = document.querySelectorAll("wave")
    // console.log("first")
    // for(let i=0;i,xyz.length;i++){
    //     xyz[i].style.background = 'url("https://media.istockphoto.com/id/1191661872/vector/abstract-background-wave-template-presentation-template-space-backdrop-motion-line-red.jpg?s=612x612&w=0&k=20&c=rYlfqEvGHSb4ov2WB51F3MKj2347HTQH2gqDiRkFBPY=")'
    // }
    // console.log(xyz)
    // function vv(){

    //     // xyz.style.background = 'url("https://media.istockphoto.com/id/1191661872/vector/abstract-background-wave-template-presentation-template-space-backdrop-motion-line-red.jpg?s=612x612&w=0&k=20&c=rYlfqEvGHSb4ov2WB51F3MKj2347HTQH2gqDiRkFBPY=")'
    // } 
    const tittle = ["Casual leave", "Holidays this year", "Sick leave balance"]
    const days = [10, 15, 5];
    const color = ["black",
        "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
        "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"]
    const image1 = "https://i.imgur.com/ZAts69f.png"
    return (
        <div>
            
                <Box container sx={{
                    flexWrap:"wrap",
                    maxWidth:"100%",
                    display: "flex",
                    justifyContent: "space-evenly",


                }}>
                    <Box className='card' sx={{ borderRadius: "1rem",width:"18rem" }} item xs={12} sm={6} xl={3}>



                        <div >
                            <div className="wave-1 wave" id="wave1" style={{borderBottom:"100px"}}></div>
                            <div className="wave-1 wave" id="wave3"></div>
                            <div className="wave-1 wave" id="wave2"></div>
                            <div className="wave-1 wave" id="wave4"></div>

                        </div>
                        <BasicCard
                          
                            tittle={tittle[0]}
                            days={days[0]}

                        />

                    </Box>
                    <Box className='card' item xs={12} sm={6} xl={3} sx={{ borderRadius: "1rem" ,width:"18rem"}}>
                        <div className="waves">
                            <div className="wave wave-2" id="wave1"></div>
                            <div className="wave wave-2" id="wave2"></div>
                            <div className="wave wave-2" id="wave3"></div>
                            <div className="wave wave-2" id="wave4"></div>

                        </div>
                        <BasicCard tittle={tittle[1]} days={days[1]} />

                    </Box>
                    <Box className='card' item xs={12} sm={6} xl={3} sx={{   borderRadius: "1rem", width:"18rem" }}>
                        <div className="waves">
                            <div className="wave wave-3" id="wave1"></div>
                            <div className="wave wave-3" id="wave2"></div>
                            <div className="wave wave-3" id="wave3"></div>
                            <div className="wave wave-3" id="wave4"></div>

                        </div>
                        <BasicCard tittle={tittle[2]} days={days[2]} />

                    </Box>

                </Box>
            
        </div>
    )
}
