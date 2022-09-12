import { Grid, Typography } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from "react";
import RedSocialsIcons from "./RedSocialsIcons";
import "@fontsource/montserrat";

interface Props{
    title: String
    title_strong: String
    message: String
    second_message: String
    
}
const Contact = ({title,title_strong,message,second_message}:Props) =>{

    
    return(
        <Grid container xs={6}>
            <Grid container marginLeft={7} marginTop={9}>
                    { title_strong == 'Contacto' ?
                    <Grid item xs={5.1} flexDirection='row' direction={'row'}>
                        <Typography sx={{
                            fontFamily:'Montserrat',
                            fontWeight:400,
                            fontStyle:'normal',
                            color:'#151F6D',
                            fontSize:'40px',
                            lineHeight:'102.7%',
                            
                                    }}>

                            {title}
                        
                            
                        
                        </Typography>

                        
                        
                    </Grid>
                    :''}
                    { title_strong == 'nosotros' ?
                    <Grid item xs={4.6} flexDirection='row' direction={'row'}>
                        <Typography sx={{
                            fontFamily:'Montserrat',
                            fontWeight:400,
                            fontStyle:'normal',
                            color:'#151F6D',
                            fontSize:'40px',
                            lineHeight:'102.7%',
                            
                                    }}>

                            {title}
                        
                            
                        
                        </Typography>

                        
                        
                    </Grid>
                    :''}
                    <Grid item xs={3}>
                        <Typography
                            sx={{
                                fontFamily:'Montserrat',
                                fontWeight:700,
                                fontStyle:'normal',
                                color:'#151F6D',
                                fontSize:'40px',
                                lineHeight:'102.7%',
                                textAlign:'start',
                                marginLeft:'9px'
                            }}>
                                {title_strong}
                            </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={9} marginLeft={7} marginTop={4}>
                    <Typography
                    sx={{
                        fontFamily:'Montserrat',
                        fontWeight:400,
                        fontStyle:'normal',
                        color:'#000000',
                        fontSize:'16px',
                        lineHeight:'162.5%',
                        letterSpacing:'-0.005em'
                    }}>
                    {message}
                    </Typography>
                </Grid>
                {
                    second_message !== '' ?

                
                <Grid item xs={9} marginLeft={7} marginTop={4}>
                    <Typography
                    sx={{
                        fontFamily:'Montserrat',
                        fontWeight:400,
                        fontStyle:'normal',
                        color:'#000000',
                        fontSize:'16px',
                        lineHeight:'162.5%',
                        letterSpacing:'-0.005em'
                    }}>
                   Si cuentas con una cartera de clientes o tienes registro SBS,  
                   <strong> necesitamos unir fuerzas</strong>,  en área de interés coloca ASOCIADO
                    </Typography>
                </Grid>
                :''}
                <Grid item xs={12} marginLeft={7} marginTop={4}>
                    <Typography
                    sx={{
                        fontFamily:'Montserrat',
                        fontWeight:600,
                        fontStyle:'normal',
                        color:'#2EA082',
                        fontSize:'13px',
                        lineHeight:'106.35%',
                        letterSpacing:'0.1em',
                        textTransform:'uppercase'
                    }}>
                    CENTRAL TELEFÓNICA
                    </Typography>
                </Grid>

                <Grid item xs={12} marginLeft={7} marginTop={1.5}>
                    <Typography sx={{
                         fontFamily:'Montserrat',
                         fontWeight:700,
                         fontStyle:'normal',
                         color:'#151F6D',
                         fontSize:'20px',
                         lineHeight:'106.35%',
                        
                    }}>
                        +51 345 70098
                    </Typography>
                </Grid>

                <Grid item xs={12} marginLeft={7} marginTop={1.5}>
                    <Typography
                    sx={{
                        fontFamily:'Montserrat',
                        fontWeight:600,
                        fontStyle:'normal',
                        color:'#2EA082',
                        fontSize:'13px',
                        lineHeight:'106.35%',
                        letterSpacing:'0.1em',
                        textTransform:'uppercase'
                    }}>
                    puedes LLAMARNOS O Escribirnos:
                    </Typography>
                </Grid>

                <Grid item xs={12} marginLeft={7} marginTop={1.5}>
                    <Typography 
                    
                    sx={{
                         fontFamily:'Montserrat',
                         fontWeight:700,
                         fontStyle:'normal',
                         color:'#151F6D',
                         fontSize:'20px',
                         lineHeight:'106.35%',
                    }}>
                        <WhatsAppIcon
                        sx={{
                            width:'17px',
                            height:'17px',
                            color:'#2EA082',
                           
                        }}/>
                        +51 993 829 002
                    </Typography>
                </Grid>

                <Grid item xs={12} marginLeft={7} marginTop={1.5}>
                    <Typography
                    sx={{
                         fontFamily:'Montserrat',
                         fontWeight:600,
                         fontStyle:'normal',
                         color:'#000000',
                         fontSize:'18px',
                         lineHeight:'97.69%',
                    }}>
                        seguros@vip.com.pe
                    </Typography>
                </Grid>

                <RedSocialsIcons/>

                
        </Grid>
    )
}

export default Contact;

function setState<T>(): [any, any] {
    throw new Error("Function not implemented.");
}
