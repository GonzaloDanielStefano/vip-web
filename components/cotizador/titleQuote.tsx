import { Grid, Typography } from "@mui/material";
import Image from 'next/image';
import "@fontsource/montserrat";
const TitleQuote = () => {

    return(
        <Grid container direction="row" sx={{
            marginLeft: '15%',
           
            width: '531px',
            height: '120px'
          }}>
            <Grid item xs={3}
            sx={{
              alignItems:'end',
              alignContent:'end',
              marginRight:'0px',
              margin: '0px',
              marginTop:'5%',
              
            }}>
              <Image src={'/../public/vehicle.JPG'} width={67.7} height={67.7} />
            </Grid>
            
            <Grid item xs={6}
            sx={{
              marginTop:'5%',
              marginLeft: '-10%'
            }}>
              <Typography  fontSize={25} fontFamily='Montserrat' sx={{
                 color:'#151F6D',fontWeight: 'bold'
              }}>
                ¡Cotiza en segundos tu seguro vehicular!
              </Typography>
            </Grid>
            
          </Grid>
    );
}

export default TitleQuote;