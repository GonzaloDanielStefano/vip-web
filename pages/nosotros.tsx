import { Box, Divider, Grid, Typography } from "@mui/material"
import Image from 'next/image';
import "@fontsource/montserrat";
import Card from "../components/nosotros/Card";
import CardNosotros from "../components/nosotros/Card";
import { HomeLayout } from "../components/layouts";

const Nosotros = () => {

    return (
        <HomeLayout title={"Corredor de Seguros Vip"} pageDescription={""}>
            <Grid container height={685} className='backgroundNosotros'>

                <Grid item xs={1}>

                </Grid>
                <Grid item xs={6} height={500} >

                    <Typography variant="h1"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            letterSpacing: '-0.02em',
                            color: '#FFFFFF',
                            fontSize: '45px',
                            lineHeight: '60px',
                            marginTop: '10%'

                        }}>
                        Somos tu corredora

                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            fontStyle: 'normal',
                            letterSpacing: '-0.02em',
                            color: '#FFFFFF',
                            fontSize: '45px',
                            lineHeight: '60px',

                        }}>

                        de asesoría VIP sin costo.
                    </Typography>

                    <Typography variant="h2"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '30px',
                            color: '#FFFFFF'
                        }}>
                        Corredores de Seguros VIP nace en el 2003 de la experiencia de mas de 40 años en el mercado
                        asegurador de  Elizabeth Querol, quien llegó a ocupar cargos gerenciales en las principales
                        compañías aseguradoras. Desde 1994 se dedicó al asesoramiento y corretaje de seguros.
                        Fuimos los primeros en el Perú en ofrecer cotizadores en línea para facilitar la información
                        a nuestros clientes. Desde el 2008 nuestros cotizadores online revolucionan
                        el mercado asegurador peruano.


                    </Typography>

                    <Typography variant="h2"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '30px',
                            color: '#FFFFFF',
                            marginTop: '2%'
                        }}>
                        Estamos supervisados y aprobados por la Superintendencia de Banca, Seguros y AFP con registro
                        J0645 y contamos con operaciones a nivel nacional. Trabajamos con las principales aseguradoras
                        del mercado como La Positiva, Pacífico, Rímac, Mapfre, HDI, CHUBB, entre otras.
                    </Typography>

                    <Grid container>
                        <Grid item xs={0.03} width={2} sx={{
                            background: '#FFFFFF'
                        }}>
                            <Divider orientation={'vertical'} variant={"middle"} light={true} />
                        </Grid>

                        <Grid item xs={11} sx={{
                            marginLeft: '2%'
                        }}>
                            <Typography variant="h2"
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '22px',
                                    lineHeight: '37px',
                                    color: '#FFFFFF',
                                    letterSpacing: '-0.01em'

                                }}>
                                No somos un Simple Comparador de Seguros, somos  Corredores / Broker de Seguros que
                                asesoramos
                                antes de contratar la póliza y
                                al momento de necesitar la cobertura.
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={5} className='imgNosotros' >
                    <Image src='/backgroundNosotros.jpg' height={1585} width={1300} alt="background" />
                </Grid>





            </Grid>

            <Grid container>
                <Grid item xs={6}>
                    <CardNosotros message="Dar a nuestros clientes la cobertura de seguridad que necesitan 
                para sus negocios y su vida personal,priorizando la calidad del servicio con productos 
                adaptados a la medida de las necesidades de cada 
                uno de ellos." image={'/mision.jpg'} />
                </Grid>
                <Grid item xs={6}>
                    <CardNosotros message="Ser corredores de seguros líderes en calidad y servicio personalizado,
                 con un equipo humano altamente calificado, trabajando con responsabilidad, profesionalismo y 
                 honestidad para satisfacer las necesidades de nuestros clientes."
                        image={'/vision.jpg'} />
                </Grid>
            </Grid>

            <Grid container sx={{
                padding: '10%'
            }}>
                <Grid container xs={6}>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: 400,
                                fontStyle: 'normal',
                                fontSize: '55px',
                                lineHeight: '65px',
                                color: '#151F6D',
                                letterSpacing: '-0.02em'
                            }}>
                            Nuestro
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: 700,
                                fontStyle: 'normal',
                                fontSize: '55px',
                                lineHeight: '65px',
                                color: '#00A887',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            Compromiso
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ marginTop: '2%' }}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: 400,
                                fontStyle: 'normal',
                                fontSize: '16px',
                                lineHeight: '30px',
                                color: '#000000'
                            }}>
                            Ofrecer un servicio de consultoría y asesoría de seguros, técnicamente confiable,
                            de optima calidad, al mejor costo posible, orientado a satisfacer las necesidades
                            particulares de nuestros clientes.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container xs={6} sx={{ marginTop: '3%', paddingLeft: '40px' }}>
                    <Grid item xs={2}>
                        <Image src='/phoneNosotros.png' width={70} height={70} alt="phoneIcon" />
                    </Grid>

                    <Grid item xs={3}>
                        <Typography
                            sx={{
                                paddingTop: '15px',
                                fontFamily: 'Montserrat',
                                fontWeight: 500,
                                fontStyle: 'normal',
                                fontSize: '16px',
                                lineHeight: '20px',
                                letterSpacing: '-0.02em',
                                color: '#151F6D'
                            }}>
                            Asesoría
                            personalizada
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Image src='/reportingNosotros.png' width={70} height={70} alt="reportIcon" />
                    </Grid>

                    <Grid item xs={3.5}>
                        <Typography
                            sx={{
                                paddingTop: '15px',
                                fontFamily: 'Montserrat',
                                fontWeight: 500,
                                fontStyle: 'normal',
                                fontSize: '16px',
                                lineHeight: '20px',
                                letterSpacing: '-0.02em',
                                color: '#151F6D'
                            }}>
                            Análisis de
                            alternativas
                            independiente
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Image src='/costNosotros.png' width={70} height={70} alt="costIcon" />
                    </Grid>

                    <Grid item xs={3}>
                        <Typography
                            sx={{
                                paddingTop: '15px',
                                fontFamily: 'Montserrat',
                                fontWeight: 500,
                                fontStyle: 'normal',
                                fontSize: '16px',
                                lineHeight: '20px',
                                letterSpacing: '-0.02em',
                                color: '#151F6D'
                            }}>
                            Sin costos
                            adicionales
                        </Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Image src='/paperNosotros.png' width={70} height={70} alt="paperIcon" />
                    </Grid>

                    <Grid item xs={3}>
                        <Typography
                            sx={{
                                paddingTop: '15px',
                                fontFamily: 'Montserrat',
                                fontWeight: 500,
                                fontStyle: 'normal',
                                fontSize: '16px',
                                lineHeight: '20px',
                                letterSpacing: '-0.02em',
                                color: '#151F6D'
                            }}>
                            Ahorro de
                            tiempo en
                            trámites
                        </Typography>
                    </Grid>

                </Grid>

                <Grid container sx={{ paddingTop: '80px' }}>
                    <Grid item xs={6}>
                        <Box sx={{
                            width: '657px',
                            height: '407px',
                            borderRadius: '43px 43px 43px 43px',
                            boxShadow: '0px 10px 40px rgba(21,31,109,0.11)'
                        }}>

                            <Grid container sx={{ paddingLeft: '55px', }}>
                                <Grid item xs={12}>
                                    <Typography
                                        sx={{
                                            paddingTop: '15px',

                                            fontFamily: 'Montserrat',
                                            fontWeight: 700,
                                            fontStyle: 'normal',
                                            fontSize: '25px',
                                            lineHeight: '42px',
                                            letterSpacing: '-0.02em',
                                            color: '#151F6D'
                                        }}>
                                        ¿Por qué elerginos?
                                    </Typography>
                                </Grid>

                                <Grid container marginTop={3}>
                                    <Grid item xs={0.8}>
                                        <Image src='/checkIcon.png' width={27} height={27} alt="checkIcon" />
                                    </Grid>

                                    <Grid item xs={10}>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontSize: '18px',
                                                lineHeight: '22px',
                                                color: '#000000'
                                            }}>
                                            Por nuestra experiencia en el mercado asegurador.

                                        </Typography>
                                    </Grid>
                                </Grid>


                            </Grid>

                        </Box>
                    </Grid>

                    <Grid item xs={4} marginLeft={20}>
                        <Image src='/nosotrosTwoPersonChat.png' width={400} height={390} alt="peopleChat" />
                    </Grid>
                </Grid>

                <Grid container marginTop={15}>

                    <Grid item xs={6}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontSize: '25px',
                                lineHeight: '42px',
                                color: '#151F6D',
                                letterSpacing: '-0.02em',
                                fontWeight: 700
                            }}>
                            Supervisado por:
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontSize: '25px',
                                lineHeight: '42px',
                                color: '#151F6D',
                                letterSpacing: '-0.02em',
                                fontWeight: 700
                            }}>
                            Miembro de:
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container marginTop={5}>
                    <Grid item xs={5}>
                        <Image src='/superintendenciaseguro.png' width={315} height={88}
                            alt="super intendencia de seguros" />
                    </Grid>

                    <Grid container xs={7} spacing={0}>
                        <Grid item xs={3}>
                            <Image src='/apecose.png' width={200} height={85} alt="apecose" />
                        </Grid>

                        <Grid item xs={3} marginLeft={2}>
                            <Image src='/copaprose.png' width={200} height={85} alt="copaprose" />
                        </Grid>

                        <Grid item xs={3} marginLeft={2}>
                            <Image src='/ccl.png' width={200} height={85} alt="camara de comercio lima" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </HomeLayout>
    );
}


export default Nosotros;