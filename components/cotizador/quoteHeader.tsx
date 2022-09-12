import { Box, Button, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import "@fontsource/montserrat";
import { Dispatch, SetStateAction, useState } from "react";
import React from "react";


interface Props{
    setQuoteHeaderVehicular: Dispatch<SetStateAction<boolean>>
    setQuoteHeaderSalud: Dispatch<SetStateAction<boolean>>
    setQuoteHeaderHogar: Dispatch<SetStateAction<boolean>>
}
const QuoteHeader = ({setQuoteHeaderHogar,setQuoteHeaderSalud,setQuoteHeaderVehicular}:Props) =>{

  const [vehicularHeaderColor,setVehicularHeaderColor] = React.useState<string>('#2E9F82');
  const [saludHeaderColor,setSaludHeaderColor] = React.useState<string>('#5E6580');
  const [hogarHeaderColor,setHogarHeaderColor] = React.useState<string>('#5E6580');

  function changeHeaderColor(header:string){
    if('vehicular' == header)
    {setVehicularHeaderColor('#2E9F82')
     setQuoteHeaderVehicular(true)}
    else{setVehicularHeaderColor('#5E6580') 
         setQuoteHeaderVehicular(false)}

    if('salud'  == header)
    {setSaludHeaderColor('#2E9F82')
      setQuoteHeaderSalud(true)}
    else{setSaludHeaderColor('#5E6580') 
      setQuoteHeaderSalud(false)}

    if('hogar'  == header)
    {setHogarHeaderColor('#2E9F82')
    setQuoteHeaderHogar(true)}
    else{setHogarHeaderColor('#5E6580') 
      setQuoteHeaderHogar(false)}
    
  }
    return(
        <Box display={'flex'} sx={{marginTop:'30px',marginLeft:'11px',width:'567px'}}>

        <Button
            onClick={()=>{changeHeaderColor('vehicular')}}
            sx={{
                width:'33.33%',
                background:`${vehicularHeaderColor}`,
                height:'50px',
                borderRadius:'10px 10px 0px 0px',
                marginRight:'1px',
                fontFamily:'Montserrat',
                textAlign:'start'
                }} 
               >
          
                <Grid item lg={2}
                sx={{
                    marginLeft:'auto',
                    marginRight:'auto',
                    marginTop:'auto',
                    position:'relative'
                    }}>
                  <Image src={'/../public/vehicular.PNG'} width={27.5} height={27.5} />

                </Grid>
                
                <Grid item lg={8}>
                <Typography fontFamily='Montserrat' fontSize={13}
                    sx={{ marginLeft:'auto',margin:'auto', color:'white'}}>SEGURO VEHICULAR</Typography>
                </Grid>

          </Button>
                  

          <Button
          onClick={()=>{changeHeaderColor('hogar')}}
              sx={{
                width:'33.33%',
                background:`${hogarHeaderColor}`,
                height:'50px',
                borderRadius:'10px 10px 0px 0px',
                marginRight:'1px',
                fontFamily:'Montserrat',
                alignItems:'center',
                position:'relative'}} >

                  <Box >
                  <Image src={'/../public/hogar.PNG'} width={26} height={22} 
                    />
                  </Box>
                  
                    <Typography fontFamily='Montserrat' fontSize={13}
                    sx={{textAlign:'end', marginLeft:'3%', color:'white'}}>SEGURO HOGAR</Typography>
          </Button>

          <Button
          onClick={()=>{changeHeaderColor('salud')}}
            sx={{
              width:'33.33%',
              background:`${saludHeaderColor}`,
              height:'50px',
              borderRadius:'10px 10px 0px 0px',
              margin:'auto',
              fontFamily:'Montserrat',
              alignItems:'center',
              position:'relative'}} >

                <Grid item lg={2}
                  sx={{
                    marginLeft:'0px',
                    marginRight:'0px',
                    position:'relative'}}>

                    <Image src={'/../public/salud.PNG'} width={26} height={22} 
                    />
                </Grid>
                
                <Grid item lg={8}>
                  <Typography fontFamily='Montserrat' fontSize={13}
                    sx={{textAlign:'end', marginLeft:'3%', color:'white'}}>SEGURO SALUD</Typography>
                </Grid>
                   
            </Button>
        </Box>
    )
}

export default QuoteHeader;