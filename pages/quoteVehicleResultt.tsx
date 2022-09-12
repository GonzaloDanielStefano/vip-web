import { Box, Button, Divider, Grid, Typography,Input, OutlinedInput  } from "@mui/material";
import { HomeLayout } from "../components/layouts";
import "@fontsource/montserrat";
import "@fontsource/raleway";
import TitleQuoteResult from "../components/tableVehicleResult.tsx/titleQuoteResult";
import CreateIcon from '@mui/icons-material/Create';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Phone } from "@mui/icons-material";
import Image from 'next/image';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {Department, QuoteData, QuoteResult, UseType, Vehicle, VehicularQuoterRequest} from '../interfaces';
import { cotizarVehicle, getDepartment, getUseType, getVehicle } from "./api/data";



const QuoteVehicleResultt = () => {

    const router = useRouter();
    const [vehicle, setVehicle] = useState<Vehicle>();
    const [department, setDepartment] = useState<Department>();
    const [useType, setUseType] = useState<UseType>();
    const [quoteResult,setQuoterResult] = useState<QuoteResult>();
    const [quoteData,setQuoteData] = useState<VehicularQuoterRequest>();
    useEffect(() => {
        setQuoteData({...setQuoteData,name:router.query.name});
        setQuoteData({...setQuoteData,email:router.query.email});
        setQuoteData({...setQuoteData,phone:router.query.phone});
        setQuoteData({...setQuoteData,dni:router.query.dni});
        setQuoteData({...setQuoteData,produced_at:router.query.produced_at});
        setQuoteData({...setQuoteData,promotional_code:router.query.promotional_code});
        if(quoteData !== undefined){
        setQuoterResult(cotizarVehicle(quoteData));}
       if(router.query.vehicle !== undefined){
            getVehicle(router.query.vehicle)
                .then((response)=>{
                    if(response){
                        setVehicle(response);
                        setQuoteData({...setQuoteData,vehicle:response});
                    }
                });
       }

       if(router.query.department !== undefined){
        getDepartment(router.query.department)
            .then((response)=>{
                if(response){
                    setDepartment(response);
                    setQuoteData({...setQuoteData,department:response});
                }
            });
        }
        if(router.query.use_type !== undefined){
        getUseType(router.query.use_type)
            .then((response)=>{
                if(response){
                    setUseType(response);
                    setQuoteData({...setQuoteData,use_type:response});
                }
            });
        }
    }, [])
    
    return(
        <HomeLayout title={'Corredor de Seguros VIP'} pageDescription={'Seguros'}>
            <Box sx={{marginLeft:'5%',marginRight:'5%',height:'1500px',width:'90%'}}>

            
            <Grid container gridTemplateRows={10} rowSpacing={0} columnSpacing={0}
            sx={{
                /*espacio entre elementos de grid */
                gridGap:'10px',
                padding: '15px',
                textAlign: 'center',
                
                gridTemplateRows: 10
                }}>

                <TitleQuoteResult/>

                <Grid container  xs={12} alignItems='center'>
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
                            ¡Hola {router.query.name}!
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
                <Grid item  xs={12} >
                       <Typography sx={{
                           fontFamily:'Montserrat',
                           fontWeight:500,
                           fontSize:'25px',
                           lineHeight:'28.75px',
                           textAlign:'center',
                           color:'#151F6D'
                       }}>
                            {useType?.use_type} - {department?.description_for_client}
                            
                        </Typography>  
                        
                        <Typography sx={{
                            fontFamily:'Montserrat',
                            fontWeight:500,
                            fontSize:'25px',
                            lineHeight:'28.75px',
                            textAlign:'center',
                            color:'#151F6D'
                        }}>
                            {vehicle?.brand?.brand_name} / {vehicle?.model?.model_name}
                             / {vehicle?.model?.sub_model} / {router.query.produced_at}
                        </Typography>
                </Grid>

                <Grid item  xs={12} >
                        <Divider sx={{border:'1px solid #DEDEDE'}}/>
                </Grid>

                <Grid container  xs={12} alignItems='center'>

                    <Grid container xs={4}   alignItems='center'>

                        <Grid item xs={1}
                        sx={{
                            marginTop:'3%'
                        }}>
                            <QuestionMarkIcon
                            style={{
                                color:'#FFFFFF',
                                background:'#2EA082',
                                borderRadius:'25px 25px 25px 25px',
                                padding:'2px',
                                width:'21px',
                                height:'21px'
                            }}/>
                        </Grid>
                        
                        <Grid item xs={10}>
                            <Typography
                            sx={{
                                textAlign:'start',
                                marginTop:'10px',
                                fontFamily:'Montserrat',
                                fontStyle:'normal',
                                fontSize:'18px',
                                fontWeight:500,
                                lineHeight:'22px',
                                color:'#000000'
                            }}> 
                            
                            Cambiar el valor del Vehículo
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Box width={'99%'} height={54} 
                            sx={{
                                border:'2px solid #2EA082',
                                padding:'5px',
                                marginTop:'2%',
                                borderRadius:'10px 10px 10px 10px'
                                }}>

                                <Input  
                                 endAdornment={<CreateIcon/>} />

                                <Button sx={{
                                    color:'#FFFFFF',
                                    background:'#151F6D',
                                    fontFamily:'Montserrat',
                                    fontWeight:700,
                                    fontSize:'12px',
                                    lineHeight:'13.88px',
                                    width:'87px',
                                    height:'40px',
                                    borderRadius:'6px 6px 6px 6px',
                                    marginLeft:'8%'
                                }}>
                                    APLICAR
                                </Button>
                            </Box>
                        </Grid>
                        
                    </Grid>

                    <Grid item xs={8}  sx={{marginLeft:'0px'}}  >
                                <Typography sx={{
                                    textAlign:'start',
                                    marginTop:'7px',
                                    fontFamily:'Montserrat',
                                    fontStyle:'normal',
                                    fontSize:'18px',
                                    fontWeight:500,
                                    lineHeight:'22px',
                                    color:'#000000'
                                    }}>
                                    Tipos de Cobertura:
                                </Typography>
                                <Box width={'100%'} height={54} sx={{padding:'7px'}}>
                                <Grid container>

                               
                                    <Grid item xs={2.4}>
                                        <Button sx={{
                                            height:'54px',
                                            width:'133.87px',
                                            borderRadius:'10px 10px 10px 10px',
                                            lineHeight:' 115.7%',
                                            background:'#151F6D',
                                            fontyStyle:'normal',
                                            color:'#FFFFFF',
                                            border:'2px solid #2EA082',
                                            fontFamily:'Montserrat',
                                            fontWeight:600,
                                            fontSize:'13px',
                                        }}>
                                            TODOS
                                        </Button>
                                    </Grid>

                                    <Grid item xs={2.4}>
                                    <Button sx={{
                                            height:'54px',
                                            width:'133.87px',
                                            borderRadius:'10px 10px 10px 10px',
                                            lineHeight:' 115.7%',
                                            fontyStyle:'normal',
                                            color:'#151F6D',
                                            border:'2px solid #2EA082',
                                            fontFamily:'Montserrat',
                                            fontWeight:600,
                                            fontSize:'13px',
                                            }}>
                                            TODOS
                                        </Button>
                                    </Grid>

                                    <Grid item xs={2.4}>
                                    <Button sx={{
                                            height:'54px',
                                            width:'133.87px',
                                            borderRadius:'10px 10px 10px 10px',
                                            lineHeight:' 115.7%',
                                            fontyStyle:'normal',
                                            color:'#151F6D',
                                            border:'2px solid #2EA082',
                                            fontFamily:'Montserrat',
                                            fontWeight:600,
                                            fontSize:'13px',
                                            }}>
                                            TODOS
                                        </Button>
                                    </Grid>

                                    <Grid item xs={2.4}>
                                    <Button sx={{
                                            height:'54px',
                                            width:'133.87px',
                                            borderRadius:'10px 10px 10px 10px',
                                            lineHeight:' 115.7%',
                                            fontyStyle:'normal',
                                            color:'#151F6D',
                                            border:'2px solid #2EA082',
                                            fontFamily:'Montserrat',
                                            fontWeight:600,
                                            fontSize:'13px',
                                            }}>
                                            TODOS
                                        </Button>
                                    </Grid>

                                    <Grid item xs={2.4}>
                                        <Button sx={{
                                            height:'54px',
                                            width:'133.87px',
                                            borderRadius:'10px 10px 10px 10px',
                                            lineHeight:' 115.7%',
                                            fontyStyle:'normal',
                                            color:'#151F6D',
                                            border:'2px solid #2EA082',
                                            fontFamily:'Montserrat',
                                            fontWeight:600,
                                            fontSize:'13px',
                                            }}>
                                            TODOS
                                        </Button>
                                    </Grid>
                                </Grid>
                                </Box>

                                
                                
                    </Grid>

                    <Grid container sx={{padding:'40px'}} columnSpacing={4}>
                        <Box width={'100%'} height={900}
                                sx={{
                                   
                                    marginTop: '50px'
                                }}>
                            
                            <Grid container xs={12} >
                                <Grid item xs={4} sx={{margin:'0px'}}>
                                <Box sx={{
                                    boxSizing: 'border-box',
                                   
                                    width:'380px',
                                    height:'59px',
                                    left:'206px',
                                    padding:'18px',
                                    background:'#151F6D',
                                    border: '1px solid #0F206C',
                                    borderRadius:'20px 20px 20px 20px',
                                    fontFamily:'Montserrat',
                                    fontStyle:'normal',
                                    fontWeight:'700',
                                    fontSize:'17px',
                                    lineHeight:'115.7%',
                                    textAlign:'center',
                                    color:'#FFFFFF',
                                }}>
                                    FULL: Protección total
                                </Box>
                                <Box width={'380px'} height={213}
                                sx={{
                                    border:'3px solid #0F206C'
                                }}>

                                </Box>
                                </Grid>

                                <Grid item xs={4}>
                                <Box sx={{
                                    boxSizing: 'border-box',
                                   
                                    width:'385px',
                                    height:'59px',
                                    marginLeft:'0px',
                                    padding:'18px',
                                    background:'#151F6D',
                                    border: '1px solid #0F206C',
                                    borderRadius:'20px',
                                    fontFamily:'Montserrat',
                                    fontStyle:'normal',
                                    fontWeight:'700',
                                    fontSize:'17px',
                                    lineHeight:'115.7%',
                                    textAlign:'center',
                                    color:'#FFFFFF',
                                   
                                }}>
                                    FULL: Protección total
                                </Box>
                                <Box width={'385px'} height={213}
                                sx={{
                                    border:'3px solid #0F206C',
                                    marginLeft:'0px',
                                }}>

                                </Box>
                                </Grid>

                                <Grid item xs={4}>
                                <Box sx={{
                                    boxSizing: 'border-box',
                                   
                                    width:'380px',
                                    height:'59px',
                                    marginLeft:'4.5px',
                                    padding:'18px',
                                    background:'#151F6D',
                                    border: '1px solid #0F206C',
                                    borderRadius:'20px',
                                    fontFamily:'Montserrat',
                                    fontStyle:'normal',
                                    fontWeight:'700',
                                    fontSize:'17px',
                                    lineHeight:'115.7%',
                                    textAlign:'center',
                                    color:'#FFFFFF',
                                }}>
                                    FULL: Protección total
                                </Box>

                                <Box width={'378px'} height={213}
                                sx={{
                                    border:'3px solid #0F206C',
                                    marginLeft:'1px',
                                }}>
                                    <Grid container xs={12} sx={{padding:'20px'}}>
                                        <Grid item xs={5}>
                                            <h2>LOGO</h2>
                                        </Grid>
                                        
                                        <Grid item xs={1}>
                                        <Divider orientation={'vertical'} variant={"middle"}
                                        
                                        light={true} />
                                        </Grid>

                                        <Grid item xs={5} flexDirection={'row'} sx={{marginLeft:'15px'}}>
                                            <Typography variant="h6" sx={{fontSize:'16px'}}>
                                                PAGO MENSUAL
                                            </Typography>

                                            <Typography variant="h6" sx={{fontSize:'16px'}}>
                                                10 CUOTAS DE 
                                            </Typography>

                                            <Typography variant="h6" sx={{fontSize:'16px'}}>
                                                US$80.65
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Button startIcon={<Phone/>} sx={{
                                                border:'2px solid #2EA082',
                                                background: '#00A887',
                                                color:'#FFFFFF',
                                                fontFamily:'Montserrat',
                                                fontWeight:500,
                                                fontSize:'13px',
                                                lineHeight:'15.04px',
                                                width:'250px',
                                                height:'45px',
                                                borderRadius:'10px 10px 10px 10px'
                                                
                                            }}>
                                                CONTRATAR
                                            </Button>
                                        </Grid>
                                    </Grid>

                                </Box>

                                
                                </Grid>
                            </Grid>
                            
                            <Grid item>
                            <Box width={'100%'} height={814}
                                sx={{
                                    border: '3px solid #0F206C',
                                    borderStyle:'outlet',
                                    boxShadow:'0px 10px 30px rgba(21,31,109,0.1)',
                                    borderRadius:'0px 0px 20px 20px'
                                }}>
                                    <Grid container>
                                        <Grid item xs={5} height={300} minHeight={300} maxHeight={300}>
                                            <Typography
                                            sx={{
                                                fontFamily:'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight:600,
                                                fontSize:'15px',
                                                lineHeight:'115.7%',
                                                textAlign:'start',
                                                marginLeft:'5%',
                                                marginTop:'5%',
                                                color: '#0F206C'
                                                }}>
                                                COBERTURAS / DEDUCIBLES
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={1}>
                                            <Divider orientation={'vertical'} variant={"middle"}
                                            
                                            light={true} />
                                        </Grid>

                                        <Grid item xs={5} height={300} minHeight={300} maxHeight={300}>
                                            <Grid container>
                                                <Grid item xs={12} height={150} minHeight={150} maxHeight={150}>
                                                    <Typography
                                                    sx={{
                                                        fontFamily:'Montserrat',
                                                        fontStyle: 'normal',
                                                        fontWeight:600,
                                                        fontSize:'15px',
                                                        lineHeight:'115.7%',
                                                        textAlign:'start',
                                                        marginLeft:'5%',
                                                        marginTop:'5%',
                                                        color: '#0F206C'
                                                        }}>
                                                        DEDUCIBLES
                                                </Typography>

                                                </Grid>

                                                <Grid item xs={12}height={150} minHeight={150} maxHeight={150}>
                                                    <Typography
                                                    sx={{
                                                        fontFamily:'Montserrat',
                                                        fontStyle: 'normal',
                                                        fontWeight:600,
                                                        fontSize:'15px',
                                                        lineHeight:'115.7%',
                                                        textAlign:'start',
                                                        marginLeft:'5%',
                                                        marginTop:'5%',
                                                        color: '#0F206C'
                                                        }}>
                                                        FINANCIAMIENTO
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            
                                           
                                        </Grid>
                                    </Grid>

                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Divider orientation={'horizontal'} variant={"middle"}
                                                
                                            light={true} />
                                        </Grid>
                                    </Grid>
                                    
                                    <Grid container>
                                        <Grid item height={150} minHeight={150} maxHeight={150}
                                        xs={2}>
                                            <Grid container>
                                            <Grid item xs={4}
                                            sx={{
                                                marginLeft:'28%',
                                                marginTop:'18%'
                                            }}>
                                                <Image src={'/../public/yearCost.png'}
                                                style={{}}
                                                width={35.76} height={35}
                                                />
                                            </Grid>

                                            <Grid item xs={4}
                                            sx={{marginTop:'15%'}}>
                                                <Typography
                                                sx={{
                                                    fontFamily:'Montserrat',
                                                    fontWeight:600,
                                                    fontStyle:'normal',
                                                    fontSize:'15px',
                                                    lineHeight:'17.35px',
                                                    color: '#0F206C'
                                                }}>COSTO</Typography>
                                                <Typography
                                                sx={{
                                                    fontFamily:'Montserrat',
                                                    fontWeight:600,
                                                    fontStyle:'normal',
                                                    fontSize:'15px',
                                                    lineHeight:'17.35px',
                                                    color: '#0F206C'
                                                }}>ANUAL:</Typography>
                                            </Grid>

                                            <Grid item xs={12} alignContent='center' width={'100%'}
                                            sx={{
                                                marginTop:'15%'
                                            }}>
                                                <Typography
                                                sx={{
                                                    width:'100%',
                                                    marginLeft:'27%',
                                                    textAlign:'start',
                                                    fontFamily:'Montserrat',
                                                    fontWeight:600,
                                                    fontStyle:'normal',
                                                    fontSize:'26px',
                                                    lineHeight:'23px',
                                                    color: '#313131'
                                                }}>US$ 1.800,35</Typography>
                                            </Grid>
                                            
                                           
                                                
                                            </Grid>
                                            
                                        </Grid>

                                        <Grid item height={150} minHeight={150} maxHeight={150}
                                        xs={1}>
                                            <Divider orientation={'vertical'} variant={"middle"}  
                                            light={true} />
                                        </Grid>

                                        <Grid item height={150} minHeight={150} maxHeight={150}
                                        xs={2}>
                                          <Grid container>
                                            <Grid item xs={4}
                                            sx={{
                                                marginLeft:'25%',
                                                marginTop:'18%'
                                            }}>
                                                <Image src={'/../public/gpsIcon.png'}
                                                style={{}}
                                                width={35.76} height={35}
                                                />
                                            </Grid>

                                            <Grid item xs={4} width={300}
                                            sx={{marginTop:'15%'}}>
                                                <Typography
                                                sx={{
                                                    fontFamily:'Montserrat',
                                                    fontWeight:600,
                                                    fontStyle:'normal',
                                                    fontSize:'15px',
                                                    lineHeight:'17.35px',
                                                    color: '#0F206C'
                                                }}>OBLIGACIÓN</Typography>
                                                <Typography
                                                sx={{
                                                    fontFamily:'Montserrat',
                                                    fontWeight:600,
                                                    fontStyle:'normal',
                                                    fontSize:'15px',
                                                    lineHeight:'17.35px',
                                                    color: '#0F206C'
                                                }}>DE GPS:</Typography>
                                            </Grid>

                                            <Grid item xs={12} alignContent='center' width={'100%'}
                                            sx={{
                                                marginTop:'15%'
                                            }}>
                                                <Typography
                                                sx={{
                                                    width:'100%',
                                                    marginLeft:'27%',
                                                    textAlign:'center',
                                                    fontFamily:'Montserrat',
                                                    fontWeight:600,
                                                    fontStyle:'normal',
                                                    fontSize:'26px',
                                                    lineHeight:'23px',
                                                    color: '#313131'
                                                }}>No</Typography>
                                            </Grid>
                                            
                                           
                                                
                                            </Grid>
                                        </Grid>

                                        <Grid item height={150} minHeight={150} maxHeight={150}
                                        
                                        xs={1}>
                                            <Divider orientation={'vertical'} variant={"middle"}  
                                            light={true} />
                                        </Grid>

                                        <Grid item height={150} minHeight={150} maxHeight={150}
                                        xs={6}>
                                            <Grid container>
                                                <Grid item xs={2}
                                                sx={{
                                                    marginLeft:'0%',
                                                    marginTop:'6%'
                                                }}>
                                                    <Image src={'/../public/promotionIcon.png'}
                                                    style={{}}
                                                    width={35.76} height={35}
                                                    />
                                                </Grid>

                                                <Grid item xs={2} width={300}
                                                sx={{marginTop:'8%'}}>
                                                    <Typography
                                                    sx={{
                                                        fontFamily:'Montserrat',
                                                        fontWeight:600,
                                                        fontStyle:'normal',
                                                        fontSize:'15px',
                                                        lineHeight:'17.35px',
                                                        color: '#0F206C'
                                                    }}>PROMOCIONES:</Typography>
                                                    
                                                </Grid>
                                                <Grid container>
                                                    <Grid item xs={2} alignContent='center'
                                                        sx={{
                                                            marginTop:'0%'
                                                        }}>
                                                            <Image src={'/../public/soatFree.png'}
                                                            style={{}}
                                                            width={94} height={70}
                                                            />
                                                    </Grid>
                                                    <Grid item xs={2} alignContent='center'
                                                        sx={{
                                                            marginTop:'5%'
                                                        }}>
                                                            <Typography
                                                            sx={{
                                                                fontFamily:'Montserrat',
                                                                fontWeight:500,
                                                                fontStyle:'normal',
                                                                fontSize:'14px',
                                                                lineHeight:'16px',
                                                                color: '#000000'
                                                            }}>Gratis para siempre!</Typography>
                                                    </Grid>
                                                    
                                                    <Grid item xs={4} alignContent='center'
                                                        sx={{
                                                            marginTop:'3%'
                                                        }}>
                                                            <Image src={'/../public/oneHundredFree.png'}
                                                            style={{}}
                                                            width={86} height={43}
                                                            />
                                                    </Grid>

                                                    <Grid item xs={2} alignContent='center'
                                                        sx={{
                                                            marginTop:'5%'
                                                        }}>
                                                            <Typography
                                                            sx={{
                                                                fontFamily:'Montserrat',
                                                                fontWeight:500,
                                                                fontStyle:'normal',
                                                                fontSize:'14px',
                                                                lineHeight:'16px',
                                                                color: '#000000'
                                                            }}>Bono instantáneo</Typography>
                                                    </Grid>
                                                </Grid>
                                               
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Divider orientation={'horizontal'} variant={"middle"}
                                                
                                            light={true} />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography
                                            sx={{
                                                textAlign:'center',
                                                fontFamily:'Montserrat',
                                                fontStyle:'normal',
                                                fontWeight:600,
                                                fontSize:'15px',
                                                lineHeight:'115.7%',
                                                color:'#0F206C',
                                                marginTop:'3%'

                                            }}>BENEFICIOS</Typography>
                                        </Grid>

                                        <Grid container xs={12} sx={{marginTop:'4%'}}>
                                            <Grid container xs={1}>

                                            </Grid>
                                            <Grid container xs={2}>
                                                <Grid item xs={6}>
                                                    <Image src={'/../public/hands.png'}
                                                        style={{}}
                                                        width={60} height={60}
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Typography
                                                    sx={{
                                                        fontFamily:'Montserrat',
                                                        fontStyle:'normal',
                                                        fontWeight:500,
                                                        fontSize:'14px',
                                                        lineHeight:'16px',
                                                        color:'#363636',
                                                        marginTop:'13%'
                                                    }}>
                                                        Chofer de reemplazo
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container xs={2}>
                                            <Grid item xs={6}>
                                                    <Image src={'/../public/hands.png'}
                                                        style={{}}
                                                        width={60} height={60}
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Typography
                                                    sx={{
                                                        fontFamily:'Montserrat',
                                                        fontStyle:'normal',
                                                        fontWeight:500,
                                                        fontSize:'14px',
                                                        lineHeight:'16px',
                                                        color:'#363636',
                                                        marginTop:'13%'
                                                    }}>
                                                        Chofer de reemplazo
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container xs={2}>
                                            <Grid item xs={6}>
                                                    <Image src={'/../public/hands.png'}
                                                        style={{}}
                                                        width={60} height={60}
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Typography
                                                    sx={{
                                                        fontFamily:'Montserrat',
                                                        fontStyle:'normal',
                                                        fontWeight:500,
                                                        fontSize:'14px',
                                                        lineHeight:'16px',
                                                        color:'#363636',
                                                        marginTop:'13%'
                                                    }}>
                                                        Chofer de reemplazo
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container xs={2}>
                                            <Grid item xs={6}>
                                                    <Image src={'/../public/hands.png'}
                                                        style={{}}
                                                        width={60} height={60}
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Typography
                                                    sx={{
                                                        fontFamily:'Montserrat',
                                                        fontStyle:'normal',
                                                        fontWeight:500,
                                                        fontSize:'14px',
                                                        lineHeight:'16px',
                                                        color:'#363636',
                                                        marginTop:'13%'
                                                    }}>
                                                        Chofer de reemplazo
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container xs={2}>
                                            <Grid item xs={6}>
                                                    <Image src={'/../public/hands.png'}
                                                        style={{}}
                                                        width={60} height={60}
                                                    />
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <Typography
                                                    sx={{
                                                        fontFamily:'Montserrat',
                                                        fontStyle:'normal',
                                                        fontWeight:500,
                                                        fontSize:'14px',
                                                        lineHeight:'16px',
                                                        color:'#363636',
                                                        marginTop:'13%'
                                                    }}>
                                                        Chofer de reemplazo
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Button sx={{
                                                border:'1px solid #151F6D',
                                                background: '#151F6D',
                                                color:'#FFFFFF',
                                                fontFamily:'Raleway',
                                                fontWeight:700,
                                                fontSize:'15px',
                                                lineHeight:'20px',
                                                width:'250px',
                                                height:'45px',
                                                borderRadius:'10px 10px 10px 10px',
                                                marginTop:'3.5%'
                                                
                                            }}>
                                                COMPARAR PLANES
                                            </Button>
                                        </Grid>
                                        
                                        <Grid item xs={12} height={56}
                                        sx={{
                                            background:'#E5E6EF',
                                            borderRadius:'10px 10px 10px 10px',
                                            marginTop:'3%',
                                            marginLeft:'3%',
                                            marginRight:'3%'
                                            
                                        }}>
                                            <Typography
                                            sx={{
                                                fontFamily:'Montserrat',
                                                fontStyle:'normal',
                                                fontWeight:400,
                                                fontSize:'13px',
                                                lineHeight:'20px',
                                                color:'#151F6D',
                                                textAlign:'justify',
                                                padding:'1%'
                                            }}>
                                            *Cualquier vehículo cuyo valor comercial al momento de la 
                                            contratación sea mayor a  USD. 50,000,
                                            estará obligado a contratar servicio de monitoreo (GPS) para 
                                            obtener cobertura por robo total.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            </Box>
            
            
            <Grid container xs={12}
                    sx={{
                        height:'200px',
                        background:'#2EA082'
                    }}>
                
                <Grid container xs={5} sx={{marginTop:'0.5%',marginLeft:'8.1%'}} >
                    <Grid item xs={12} height={10}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:400,
                            fontSize:'37px',
                            lineHeight:'45px',
                            color:'#FFFFFF'
                        }}>
                            No comprendes 
                        </Typography>
                    </Grid>

                    <Grid item xs={12} height={10}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:700,
                            fontSize:'37px',
                            lineHeight:'45px',
                            color:'#FFFFFF'
                        }}>
                        algún término?
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Button sx={{
                            border:'1px solid #FFFFFF',
                            background:'#2EA082',
                            textAlign:'center',
                            color:'#FFFFFF',
                            fontFamily:'Montserrat',
                            fontWeight:700,
                            fontSize:'14px',
                            lineHeight:'20px',
                            width:'140px',
                            height:'40px',
                            borderRadius:'10px 10px 10px 10px',
                            marginTop:'3.5%'    
                                            }}>
                            Ir al glosario
                        </Button>
                    </Grid>
                </Grid>
                
                <Grid container xs={4}>

                    <Grid item xs={12}>
                        <Typography sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'18px',
                            lineHeight:'22px',
                            color:'#FFFFFF',
                            textTransform:'lowercase',
                            marginTop:'10%'
                        }}>
                            búscalo aquí
                        </Typography>
                    
                        <OutlinedInput  
                        sx={{
                            marginTop:'5px',
                            height:'47px',
                            width:'344px',
                            borderRadius:'10px 10px 10px 10px',
                            background:'#FFFFFF',
                            border:'1px solid #FFFFFF',
                            textAlign:'center'
                        }} placeholder="Ingresar palabra"/>
                    </Grid>
                </Grid>

                <Grid container xs={1}>

                    
                    <Grid item xs={12} sx={{marginTop:'59.3%',marginLeft:'-80%'}}>
                        <Button sx={{
                            border:'1px solid #151F6D',
                            background:'#151F6D',
                            textAlign:'center',
                            color:'#FFFFFF',
                            fontFamily:'Montserrat',
                            fontWeight:700,
                            fontSize:'15px',
                            lineHeight:'20px',
                            width:'146px',
                            height:'47px',
                            borderRadius:'10px 10px 10px 10px',
                            marginTop:'3.5%'    
                                            }}>
                            Buscar
                        </Button>
                    </Grid>
                </Grid>
                    
            </Grid>

            <Grid container xs={12}
             sx={{
                height:'400px',
                background:'#151F6D'
            }}>
                <Grid container xs={2.5} sx={{marginTop:'3%',marginLeft:'8.1%'}}>
                    
                    <Grid item xs={12}>
                        <Image src={'/../public/vipLogoFooter.png'} width={138.3} height={57}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:700,
                            fontSize:'20px',
                            lineHeight:'97.96%',
                            color:'#FFFFFF'
                        }}>(01) 345 0008</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:400,
                            fontSize:'16px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Tambo de Oro 154 <br/>Surco Lima</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:400,
                            fontSize:'14px',
                            lineHeight:'97.96%',
                            color:'#FFFFFF',
                            textDecorationLine:'underline'
                        }}>Términos y condiciones</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:400,
                            fontSize:'14px',
                            lineHeight:'97.96%',
                            color:'#FFFFFF',
                            textDecorationLine:'underline'
                        }}>Políticas de Privacidad</Typography>
                    </Grid>
                
                </Grid>

                <Grid container xs={2} sx={{marginTop:'4%'}}>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:700,
                            fontSize:'15px',
                            lineHeight:'133.7%',
                            color:'#FFFFFF'
                        }}>Seguros <br/>personales</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Pacífico Vehicular</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Rimac Vehicular</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>La Positiva Vehicular</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Quálitas Perú Vehicular</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Mapfre Perú Vehicular</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Pacífico Salud</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>La Positiva Salud</Typography>
                    </Grid>
                </Grid>

                <Grid container xs={2} sx={{marginTop:'4%'}}>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:700,
                            fontSize:'15px',
                            lineHeight:'133.7%',
                            color:'#FFFFFF'
                        }}>Seguros <br/>empresariales</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Pacífico Seguros</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Rimac Seguros</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Quálitas Seguros</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Mapfre Seguros</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>RC Carga Peligrosa</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Vehiculos Pesados</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Vida Ley</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>SCTR</Typography>
                    </Grid>
                </Grid>

                <Grid container xs={2} sx={{marginTop:'4%'}}>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:700,
                            fontSize:'15px',
                            lineHeight:'133.7%',
                            color:'#FFFFFF'
                        }}>Nuestros <br/>cotizadores</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Seguro vehicular</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Seguro hogar</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'14px',
                            lineHeight:'135.69%',
                            color:'#FFFFFF'
                        }}>Seguro Salud</Typography>
                    </Grid>
                </Grid>

                <Grid container xs={2} sx={{marginTop:'4%'}}>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:700,
                            fontSize:'15px',
                            lineHeight:'133.7%',
                            color:'#FFFFFF'
                        }}>Contacto</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:600,
                            fontSize:'18px',
                            lineHeight:'97.69%',
                            color:'#FFFFFF'
                        }}>+51 945 486 514</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                        sx={{
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:500,
                            fontSize:'18px',
                            lineHeight:'97.69%',
                            color:'#FFFFFF'
                        }}>seguros@vip.com.pe</Typography>
                    </Grid>

                    <Grid container xs={12}>
                        <Grid item xs={3}>
                            <Box sx={{
                                width:'38px',
                                height:'38px',
                                borderRadius:'25px 25px 25px 25px',
                                background:'#2EA082',
                                alignItems:'center',
                                alignContent:'center'
                                
                            }}>
                                <Grid item xs={12} sx={{
                                    
                                    padding:'25%'
                                }}>
                                <Image src={'/../public/iconFacebook.png'} 
                                 width={17} height={17}/>
                                </Grid>
                                
                            </Box>
                        </Grid>

                        <Grid item xs={3}>
                            <Box sx={{
                                width:'38px',
                                height:'38px',
                                borderRadius:'25px 25px 25px 25px',
                                background:'#2EA082'
                            }}>

                            </Box>
                        </Grid>

                        <Grid item xs={3}>
                            <Box sx={{
                                width:'38px',
                                height:'38px',
                                borderRadius:'25px 25px 25px 25px',
                                background:'#2EA082'
                            }}>

                            </Box>
                        </Grid>

                        <Grid item xs={3}>
                            <Box sx={{
                                width:'38px',
                                height:'38px',
                                borderRadius:'25px 25px 25px 25px',
                                background:'#2EA082'
                            }}>

                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container xs={12}
             sx={{
                height:'37px',
                background:'#151F6D'
            }}>

            </Grid>
            
        </HomeLayout>
        
    );
}

export default QuoteVehicleResultt;