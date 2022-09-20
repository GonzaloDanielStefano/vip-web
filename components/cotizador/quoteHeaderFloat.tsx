import { Grid, Typography } from "@mui/material";
import Image from 'next/image';
import "@fontsource/montserrat";
import "@fontsource/raleway";
const QuoteHeaderFloat = () =>{

    return(
        <Grid container minWidth={74} maxWidth={74} height={258}
        sx={{
            background:'#FFFFFF',
            boxShadow:'0px 0px 30px rgba(13,2,31,0.11)',
            borderRadius:'20px 0px 0px 20px',
            float:'right',
            display:'flex',
            position:'fixed',
            marginLeft:'94.5%',
            marginTop:'10%'
        }}>
            <Grid item lg={12} sx={{background:'#2E9E81',borderRadius:'20px 0px 0px 0px'}}>
                <Typography
                sx={{
                    fontFamily:'Raleway',
                    fontStyle:'normal',
                    fontWeight:700,
                    fontSize:'10.5px',
                    lineHeight:'97.96%',
                    textAlign:'center',
                    textTransform:'uppercase',
                    letterSpacing:'0.04em',
                    color:'#FFFFFF',
                    marginTop:'10px'
                }}>
                    COTIZAR SEGURO
                </Typography>
            </Grid>

            <Grid container lg={12} sx={{marginLeft:'auto'}} padding={1}>
                
                <Grid item lg={12} margin='auto' marginLeft={1.2}>
                <Image src={'/vehicular-grey.PNG'} width={41} height={41}/>
                </Grid>
                
                <Typography
                sx={{
                    fontFamily:'Raleway',
                    fontStyle:'normal',
                    fontWeight:700,
                    fontSize:'10px',
                    lineHeight:'97.69%',
                    textAlign:'center',
                    textTransform:'uppercase',
                    letterSpacing:'0.05em',
                    color:'#5F5F5F',
                   
                }}>
                    VEHICULAR
                </Typography>
            </Grid>

            <Grid item lg={12} sx={{marginLeft:'auto'}} padding={1}>
                <Grid item lg={12} margin='auto' marginLeft={1.2}>
                    <Image src={'/hogarIconGrey.PNG'} width={41} height={41}/>
                </Grid>
                <Typography
                sx={{
                    fontFamily:'Raleway',
                    fontStyle:'normal',
                    fontWeight:700,
                    fontSize:'10px',
                    lineHeight:'97.69%',
                    textAlign:'center',
                    textTransform:'uppercase',
                    letterSpacing:'0.05em',
                    color:'#5F5F5F'
                }}>
                    HOGAR
                </Typography>
            </Grid>

            <Grid item lg={12} sx={{marginLeft:'auto'}} padding={1}>

                <Grid item lg={12} margin='auto' marginLeft={1.2}>
                    <Image src={'/saludIconGrey.PNG'} width={41} height={41}/>
                </Grid>

                <Typography
                sx={{
                    fontFamily:'Raleway',
                    fontStyle:'normal',
                    fontWeight:700,
                    fontSize:'10px',
                    lineHeight:'97.69%',
                    textAlign:'center',
                    textTransform:'uppercase',
                    letterSpacing:'0.05em',
                    color:'#5F5F5F'
                }}>
                    SALUD
                </Typography>
            </Grid>
            
        </Grid>
    )
}

export default QuoteHeaderFloat;