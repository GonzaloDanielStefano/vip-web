import { Box, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import TitleQuote from "./titleQuote";
function WaitResult (){

    return(
        <Box style={{background:'white',width:'567px',height:'565px',marginTop:'0px',marginLeft:'5%'
              ,borderRadius: '0px 0px 20px 20px'}}>
                      <TitleQuote title={undefined} image={undefined}/>

                      <Grid container >
                        <Grid item xs={6} sx={{
                          marginLeft:'10%',
                          marginTop:'6%'
                        }}>
                          <Image src={'/../public/waitCoute.png'} width={196.28} height={215} />

                         
                        </Grid>

                        <Grid item xs={4} sx={{
                            marginTop: '19%'
                        }}>
                            <Image src={'/../public/cargando.png'} width={83.47} height={87.55} />
                        </Grid>

                        <Grid item xs={6}
                        sx={{
                          marginTop:'7%',
                          marginLeft: '25%'
                        }}>
                          <Typography  fontSize={20} fontFamily='Montserrat' sx={{
                             color:'#151F6D'
                          }}>
                            ESTAMOS TRABAJANDO, POR FAVOR DANOS UNOS SEGUNDOS...
                          </Typography>
                        </Grid>
                      </Grid>
    
                </Box>
    );
}

export default WaitResult;