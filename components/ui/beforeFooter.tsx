import { Box, Grid, Typography } from "@mui/material";
import "@fontsource/montserrat";
import Image from 'next/image';
import Link from 'next/link';

const BeaforeFooter = () => {

    return (
        <Grid container xs={12}
            sx={{
                height: '400px',
                background: '#151F6D'
            }}>
            <Grid container xs={2.5} sx={{ marginTop: '3%', marginLeft: '8.1%' }}>

                <Grid item xs={12}>
                    <Image src={'/vipLogoFooter.png'} width={138.3} height={57} />
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '20px',
                            lineHeight: '97.96%',
                            color: '#FFFFFF'
                        }}>(01) 345 0008</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Tambo de Oro 154 <br />Surco Lima</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Link href='/politica-privacidad-de-datos'>
                        <a>
                            <Typography
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '97.96%',
                                    color: '#FFFFFF',
                                    textDecorationLine: 'underline'
                                }}>Términos y condiciones</Typography>
                        </a>
                    </Link>
                </Grid>

                <Grid item xs={12}>
                    <Link href='/politica-privacidad-de-datos'>
                        <a>
                            <Typography
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '97.96%',
                                    color: '#FFFFFF',
                                    textDecorationLine: 'underline'
                                }}>Políticas de Privacidad</Typography>
                        </a>
                    </Link>
                </Grid>

            </Grid>

            <Grid container xs={2} sx={{ marginTop: '4%' }}>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '15px',
                            lineHeight: '133.7%',
                            color: '#FFFFFF'
                        }}>Seguros <br />personales</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Pacífico Vehicular</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Rimac Vehicular</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>La Positiva Vehicular</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Quálitas Perú Vehicular</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Mapfre Perú Vehicular</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Pacífico Salud</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>La Positiva Salud</Typography>
                </Grid>
            </Grid>

            <Grid container xs={2} sx={{ marginTop: '4%' }}>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '15px',
                            lineHeight: '133.7%',
                            color: '#FFFFFF'
                        }}>Seguros <br />empresariales</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Pacífico Seguros</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Rimac Seguros</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Quálitas Seguros</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Mapfre Seguros</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>RC Carga Peligrosa</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Vehiculos Pesados</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Vida Ley</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>SCTR</Typography>
                </Grid>
            </Grid>

            <Grid container xs={2} sx={{ marginTop: '4%' }}>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '15px',
                            lineHeight: '133.7%',
                            color: '#FFFFFF'
                        }}>Nuestros <br />cotizadores</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Seguro vehicular</Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Seguro hogar</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '135.69%',
                            color: '#FFFFFF'
                        }}>Seguro Salud</Typography>
                </Grid>
            </Grid>

            <Grid container xs={2} sx={{ marginTop: '4%' }}>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '15px',
                            lineHeight: '133.7%',
                            color: '#FFFFFF'
                        }}>Contacto</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '18px',
                            lineHeight: '97.69%',
                            color: '#FFFFFF'
                        }}>+51 945 486 514</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '97.69%',
                            color: '#FFFFFF'
                        }}>seguros@vip.com.pe</Typography>
                </Grid>

                <Grid container xs={12}>
                    <Grid item xs={3}>
                        <Box sx={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '25px 25px 25px 25px',
                            background: '#2EA082',
                            alignItems: 'center',
                            alignContent: 'center'

                        }}>
                            <Grid item xs={12} sx={{

                                padding: '25%'
                            }}>
                                <Image src={'/iconFacebook.png'}
                                    width={17} height={17} />
                            </Grid>

                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box sx={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '25px 25px 25px 25px',
                            background: '#2EA082'
                        }}>

                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box sx={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '25px 25px 25px 25px',
                            background: '#2EA082'
                        }}>

                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box sx={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '25px 25px 25px 25px',
                            background: '#2EA082'
                        }}>

                        </Box>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default BeaforeFooter;