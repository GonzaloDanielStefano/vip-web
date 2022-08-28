import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import { HomeLayout } from "../components/layouts";
import { QuoteResult, VehicularQuoterRequest } from "../interfaces";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "@fontsource/montserrat";
import Header from "../components/tableVehicleResult.tsx/header";
import YearCost from "../components/tableVehicleResult.tsx/yearCost";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const QuoteVehicleResult = () => {

    const [quoterData,setQuoterData] = useState<VehicularQuoterRequest>();
    const [quoteResult,setQuoteResult] = useState<QuoteResult>();
    useEffect(() => {

        setQuoterData(localStorage.getItem('quoterData'));
        setQuoteResult(localStorage.getItem(JSON.stringify('quoterResult')));
        
      }, [])
      
    const router = useRouter();
    
    return(
        <HomeLayout title={'Corredor de Seguros VIP'} pageDescription={'Seguros'}>
            <Grid container  direction='row' flexDirection={'row'} columns={6}>
                <Grid item xs={1} sx={{marginLeft:'6%'}}>
                       <Typography variant="h2" 
                       sx={{
                           fontSize:'16px',
                           fontFamily:'Montserrat',
                           lineHeight:'65px',
                           color:'#999999',
                           fontWeight: 'bold',
                           }}>
                           Cotizador Vehicular 
                        </Typography>
                </Grid>

                <Grid item xs={1} sx={{marginTop:'1.5%',marginLeft:'-4%'}}>
                    <ArrowBackIosIcon/>
                </Grid>

                <Grid item xs={1} sx={{marginLeft:'-14%'}}>
                        <Typography variant="h2" 
                       sx={{
                           fontSize:'16px',
                           fontFamily:'Montserrat',
                           lineHeight:'65px',
                           color:'#0F206C',
                           fontWeight: 'bold',
                           }}>
                           Resultados  
                        </Typography>

                </Grid>

                <Grid item xs={6} alignItems='center' alignContent={'center'} 
                sx={{
                    marginLeft:'8%',
                    alignContent:'center',
                    
                }}>
                        <Typography 
                            sx={{color:'#151F6D',
                                fontSize:'23px',
                                fontFamily:'Montserrat',
                                lineHeight:'27px',
                                fontWeight: 'bold',
                                position:'relative',
                                textAlign:'start'
                                
                            }}>
                            ¡Hola Bruno!
                        </Typography>
                        <Typography 
                        sx={{color:'#414141',
                           fontSize:'23px',
                           fontFamily:'Montserrat',
                           lineHeight:'27px',
                           fontWeight: 'bold',
                           position:'relative',
                           marginLeft:'400px',
                           textAlign:'start'
                          
                        }}>
                            
                             Enviamos a tu correo 
                            detalles de las opciones comparadas
                        </Typography>
                </Grid>

                <Grid item xs={12}>
                        <Divider variant="middle" />
                </Grid>

                <Grid item xs={12} sx={{
                    position:'absolute',
                    width:'662px',
                    height:'64px',
                    marginLeft:'25%',
                    marginTop:'12%',
                    fontFamily:'Montserrat',
                    fontStyle:'normal',
                    fontSize:'23px',
                    lineHeight:'115%',
                    textAlign:'center',
                    color:'#151F6D'
                }}>
                    {router.query.use} - Lima
                    Audi / Q5 / Sport / 2022
                </Grid>

                <Grid item xs={12} sx={{marginTop:'6%'}}>
                        <Divider variant="middle" />
                </Grid>

            </Grid>

            <Grid container>
                <Grid item xs={4}>
                    <Header/>
                </Grid>
                
                
            

           
                <Grid item xs={4} sx={{marginTop:'50px'}}>
                    <YearCost/>
                </Grid>
            </Grid>
        </HomeLayout>
        
    );
}

export default QuoteVehicleResult;