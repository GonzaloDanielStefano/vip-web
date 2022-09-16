import { Button, Grid, OutlinedInput, Typography } from "@mui/material";
import "@fontsource/montserrat";

const Glossary = () =>{

    return(
        <Grid container xs={12}
                sx={{
                    height: '200px',
                    background: '#2EA082'
                }}>

                <Grid container xs={5} sx={{ marginTop: '0.5%', marginLeft: '8.1%' }} >
                    <Grid item xs={12} height={10}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '37px',
                                lineHeight: '45px',
                                color: '#FFFFFF'
                            }}>
                            No comprendes
                        </Typography>
                    </Grid>

                    <Grid item xs={12} height={10}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '37px',
                                lineHeight: '45px',
                                color: '#FFFFFF'
                            }}>
                            algún término?
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Button sx={{
                            border: '1px solid #FFFFFF',
                            background: '#2EA082',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            fontSize: '14px',
                            lineHeight: '20px',
                            width: '140px',
                            height: '40px',
                            borderRadius: '10px 10px 10px 10px',
                            marginTop: '3.5%'
                        }}>
                            Ir al glosario
                        </Button>
                    </Grid>
                </Grid>

                <Grid container xs={4}>

                    <Grid item xs={12}>
                        <Typography sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#FFFFFF',
                            textTransform: 'lowercase',
                            marginTop: '10%'
                        }}>
                            búscalo aquí
                        </Typography>

                        <OutlinedInput
                            sx={{
                                marginTop: '5px',
                                height: '47px',
                                width: '344px',
                                borderRadius: '10px 10px 10px 10px',
                                background: '#FFFFFF',
                                border: '1px solid #FFFFFF',
                                textAlign: 'center'
                            }} placeholder="Ingresar palabra" />
                    </Grid>
                </Grid>

                <Grid container xs={1}>


                    <Grid item xs={12} sx={{ marginTop: '59.3%', marginLeft: '-80%' }}>
                        <Button sx={{
                            border: '1px solid #151F6D',
                            background: '#151F6D',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            fontSize: '15px',
                            lineHeight: '20px',
                            width: '146px',
                            height: '47px',
                            borderRadius: '10px 10px 10px 10px',
                            marginTop: '3.5%'
                        }}>
                            Buscar
                        </Button>
                    </Grid>
                </Grid>

            </Grid>
    )
}

export default Glossary;