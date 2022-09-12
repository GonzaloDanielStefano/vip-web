import { Grid, Typography } from "@mui/material";
import "@fontsource/montserrat";
import ImageCard from "./ImageCard";
const HomeImage = () =>{

    return(
        <Grid container>
            <Grid item lg={9} paddingTop={10} paddingLeft={8} display='inline-block'>
                <Typography variant="h1"
                sx={{
                    fontFamily:'Montserrat',
                    fontStyle:'normal',
                    fontWeight:400,
                    fontSize:'56px',
                    lineHeight:'97.69%',
                    color:'#FFFFFF',
                    display:'flex',
                    alignItems:'center'
                }}>
                    ¿Estás en busca de un 
                    
                    seguro?
                   
                </Typography>
            </Grid>
            
            <Grid item lg={12}>
                <ImageCard/>
            </Grid>

            <Grid item lg={10} paddingTop={10} paddingLeft={8}>
                <Typography variant="h2"
                sx={{
                    fontFamily:'Montserrat',
                    fontStyle:'normal',
                    fontWeight:400,
                    fontSize:'25px',
                    lineHeight:'117.7%',
                    color:'#FFFFFF',
                    display:'flex',
                    alignItems:'center'
                }}>
                Con Vip compara y descubre todas las alternativas en segundos.
                </Typography>
            </Grid>
           
        </Grid>
    )
}

export default HomeImage;