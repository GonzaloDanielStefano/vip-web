import { Box, Divider, Grid, Typography } from "@mui/material";
import { HomeLayout } from "../components/layouts";
import "@fontsource/montserrat";
import "@fontsource/raleway";
import TitleQuoteResult from "../components/tableVehicleResult.tsx/titleQuoteResult";


const QuoteVehicleResultt = () => {

    
    return(
        <HomeLayout title={'Corredor de Seguros VIP'} pageDescription={'Seguros'}>
            <Box sx={{marginLeft:'5%',marginRight:'5%',height:'900px',width:'90%'}}>

            
            <Grid container gridTemplateRows={10} rowSpacing={0} columnSpacing={0}
            sx={{
                /*espacio entre elementos de grid */
                gridGap:'10px',
                padding: '15px',
                textAlign: 'center',
                border:'1px solid',
                gridTemplateRows: 10
                }}>

                <TitleQuoteResult/>

                <Grid container sx={{border:'1px solid'}} xs={12} alignItems='center'>
                    <Grid item xs={4}>
                        <Typography 
                        sx={{
                            textAlign:'end',
                            fontFamily:'Raleway',
                            fontStyle:'normal',
                            fontWeight:700,
                            fontSize:'23px',
                            lineHeight:'27px',
                            color:'#151F6D',
                            justifyContent:'center'
                            }}>
                            ¡Hola Bruno!
                        </Typography>
                    </Grid>

                    <Grid item xs={8}>
                        <Typography sx={{
                             textAlign:'start',
                             fontFamily:'Raleway',
                             fontStyle:'normal',
                             fontWeight:500,
                             fontSize:'23px',
                             lineHeight:'27px',
                             color:'#414141'
                        }}>
                            Enviamos a tu correo detalle de las opciones comparadas
                        </Typography> 
                    </Grid> 
                </Grid>

                <Grid item  xs={12} >
                        <Divider sx={{border:'1px solid #DEDEDE'}}/>
                </Grid>
                <Grid item sx={{border:'1px solid'}} xs={12} >
                       <Typography sx={{
                           fontFamily:'Montserrat',
                           fontWeight:500,
                           fontSize:'25px',
                           lineHeight:'28.75px',
                           textAlign:'center',
                           color:'#151F6D'
                       }}>
                            Uso Particular - Lima
                            
                        </Typography>  
                        
                        <Typography sx={{
                            fontFamily:'Montserrat',
                            fontWeight:500,
                            fontSize:'25px',
                            lineHeight:'28.75px',
                            textAlign:'center',
                            color:'#151F6D'
                        }}>
                            Audi / Q5 / Sport / 2022
                        </Typography>
                </Grid>

                <Grid item  xs={12} >
                        <Divider sx={{border:'1px solid #DEDEDE'}}/>
                </Grid>
            </Grid>

            </Box>
        </HomeLayout>
        
    );
}

export default QuoteVehicleResultt;