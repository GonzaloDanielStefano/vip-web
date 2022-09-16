import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Grid, Tabs, Menu, Divider,Typography, Tab} from '@mui/material';
import Image from 'next/image'
import "@fontsource/montserrat";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TypographyNavBar from './ui/TypographyNavBar';
import TypographyNavBarImage from './ui/TypographyNavBarImage';
import { useState } from 'react';
import Link from 'next/link';

  const Navbar = () => {

    const [open,setOpen] = useState<boolean>(false);

    async function openSubMenu(){
       // setOpen(!open);
    }
    const [value, setValue] = useState();
    async function handleChange (event:any) {
        setValue(event.target.value);
      };
  return (
    
   
      <>
      <AppBar position="static" style={{
          background: "white"
      }}>
        <Toolbar>
            <Grid container>

                
                <Grid item xs={1} sm={1} md={0.5} lg={0.5} xl={0}>

                </Grid>
                

                <Grid item xs={4} sm={3} md={2} lg={2.5} xl={2} margin='0px auto'>
                    <Link href='/'>
                        <a>
                            <Image src={'/../public/logoVipHeader.jpg'} width={138.3} height={57}/>
                        </a>
                    </Link>
                    
                </Grid>
                
                <Grid item xs={1} sm={2} md={1.1} lg={0.9} xl={0} 
                display={{ xs:'none',sm:'none',md:'block',lg:'block'}}>
                
                    <Tabs>
                        <Link href="/nosotros">
                            <a>
                            <TypographyNavBar title={'Nosotros'} color={'primary'} />
                            </a>
                        </Link>
                        
                    </Tabs>
                </Grid>

                <Grid item xs={4} sm={3.4} md={2.1} lg={1.5} xl={0}
                 display={{ xs:'none',sm:'block',md:'block',lg:'block'}}>
                    <Tabs>
                        <TypographyNavBarImage src={'/../public/flechaDesplegable.jpg'}
                        title={'Seguro personas'} color={'primary'} id={'insurancePeople'}/>
                    </Tabs>
                </Grid>

                <Grid item xs={4} sm={3.5} md={2.8} lg={1.7} xl={0}
                display={{ xs:'none',sm:'none',md:'block',lg:'block'}}>
                     <Tabs>
                        <TypographyNavBarImage src={'/../public/flechaDesplegable.jpg'} 
                        title={'Seguro empresas'} color={'primary'} id={'insuranceCompany'}/>
                    </Tabs>
                </Grid>
                
                
                <Grid item xs={1} sm={0.6} md={0.6} lg={0.7} xl={0}
                display={{ xs:'none',sm:'none',md:'none',lg:'block'}}>
                    <Tabs>
                        <TypographyNavBar title={'Blog'} color={'primary'} />
                    </Tabs>
                </Grid>

                <Grid item xs={5} sm={0} md={1.9} lg={1.7} xl={0}
                display={{ xs:'none',sm:'none',md:'none',lg:'block'}}>
                    <Tabs>
                        <Link href='/trabaja-con-nosotros'>
                            <a>
                                <TypographyNavBar title={'Trabaja con nosotros'}  color={'primary'}/>
                            </a>
                        </Link>
                    |
                    </Tabs>
                </Grid>

                <Grid item xs={4} sm={3} md={2.5} lg={1.5} xl={0}  margin='0px auto'>
                    <Tabs>
                    <div 
                    style={{
                        width:"141px",
                        background:"#2EA082",
                        borderRadius:"10px",
                        textAlign:"center",
                        marginRight:"1%",
                        marginTop:"0.5%"
                        }}>
                    
                    <Link href='/contacto'>
                        <a>
                            <TypographyNavBar title={'Contáctanos'} color={"info"} />
                        </a>
                    </Link>
                    </div>
                    </Tabs>
                </Grid> 
  
                <Grid item xs={2} sm={1} md={1} lg={1}>
                    <div style={{marginTop:"7%",marginLeft:"5%"}}>
                    <Image src={'/../public/phoneIcon.jpg'} width={40} height={40}/>
                    </div>
                </Grid>

                <Grid item xs={1} sm={1} md={0.5} lg={0.5} xl={0} marginTop={1.6}
                display={{ xs:'block',sm:'none',md:'none',lg:'none'}}>
                        <button style={{
                            display:'flex',
                            flexDirection:'column',
                            width:'3rem',
                            height:'3rem',
                            border:'0px',
                            background:'transparent',
                            gap:'.65rem'
                        }}>
                            <div className='menu-cross'
                            style={{
                                background:'black',
                                height:'2px',
                                width:'100%',
                                borderRadius:'5px',
                                transition: 'all .5s',
                                transformOrigin:'left'
                            }}>

                            </div>

                            <div className='menu-cross' style={{
                                background:'black',
                                height:'2px',
                                width:'100%',
                                borderRadius:'5px',
                                transition: 'all .5s',
                                transformOrigin:'left'
                            }}>
                            </div>

                            <div className='menu-cross' style={{
                                background:'black',
                                height:'2px',
                                width:'100%',
                                borderRadius:'5px',
                                transition: 'all .5s',
                                transformOrigin:'left'
                            }}>
                            </div>

                        </button>
                </Grid>
            </Grid>
        </Toolbar>
      </AppBar>

      <Menu
      open={open}
      id="insurancePeople"
      onClose={openSubMenu}
      onClick={openSubMenu}
      style={{marginTop:'-219px'}}
      PaperProps={{
        elevation: 0,
        
        sx: {
          width: '100%',
          height: '40%',
          marginTop: -100,
          overflow: 'visible',
          
          position: 'absolute',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          background: '#151F6D',
          borderRadius: '0px 0px 50px 50px',
          mt: 1.5,
         
        },
      }}
      >
          <Grid container  >
              <Grid item xs={4} style={{alignItems:'left',justifyContent: 'left'}}>
                    <Typography
                    style={{
                        color:'white',
                        textAlign:'center',
                        fontSize:'14px',
                        lineHeight:'23px',
                        marginTop:'4%',
                        marginLeft:'50%',
                        fontFamily:"Montserrat"
                    }}>COTIZA Y COMPARA</Typography>

                    <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={(event) => handleChange(event)} 
                    style={{
                        textAlign:'center',
                        alignItems:'left',
                        marginTop:'-1%',
                        justifyContent: 'left'
                    }}
                    
                    >
                        <Tab label="Seguro Vehicular" style={{
                            marginTop:'2%',
                            
                            fontStyle:'italic',
                            fontSize:'11px',fontFamily:'Montserrat',marginLeft:'50%',color:'#FFFFFF'}} 
                            icon={<KeyboardArrowRightIcon/>}
                            iconPosition={'end'}/>
                             
                        <Tab label="Seguro Hogar" style={{
                             marginTop:'-4%',
                            fontStyle:'italic',
                            fontSize:'11px',fontFamily:'Montserrat',marginLeft:'44%',color:'#FFFFFF'}}
                            icon={<KeyboardArrowRightIcon/>}
                            iconPosition={'end'}/>
                        <Tab label="Seguro Salud" style={{
                            marginTop:'-4%',
                            fontStyle:'italic',
                            fontSize:'11px',fontFamily:'Montserrat',marginLeft:'43%',color:'#FFFFFF'}}
                            icon={<KeyboardArrowRightIcon/>}
                            iconPosition={'end'}/>
                        
                    </Tabs>
              </Grid>

              <Grid item xs={1} style={{ height:210,  width:'1%', flexBasis:0}}>
                  
                   <Divider orientation="vertical" light={true}   style={{
                       borderColor:"#E5E5E5",
                       color:"#E5E5E5",
                       margin:'0px',
                       marginTop: '15px'

                       
                   }} />
              </Grid>
              
              <Grid item lg={2} style={{maxWidth:'17.66%'}} >
              <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={(event) => handleChange(event)} 
                    style={{
                        textAlign:'left',
                        alignItems:'left',
                        marginTop:'-1%'
                    }}
                    
                    >
                        <Tab label="SOAT" style={{
                            textAlign:'left',
                            marginTop:'1%',
                            fontStyle:'italic',
                            justifyContent: 'left',
                            fontSize:'11px',fontFamily:'Montserrat',marginLeft:'0%',color:'#FFFFFF'}} 
                            icon={<KeyboardArrowRightIcon/>}
                            iconPosition={'end'}/>
                             
                        <Tab label="Seguro de accidentes" style={{
                            
                            marginTop:'-10%',
                            justifyContent: 'left',
                            fontStyle:'italic',
                            fontSize:'11px',fontFamily:'Montserrat',marginLeft:'0%',color:'#FFFFFF'}}
                            icon={<KeyboardArrowRightIcon/>}
                            iconPosition={'end'}/>

                        <Tab label="Seguro para viajes" style={{
                            marginTop:'-7%',
                            justifyContent: 'left',
                            fontStyle:'italic',
                            fontSize:'11px',fontFamily:'Montserrat',marginLeft:'0%',color:'#FFFFFF'}}
                            icon={<KeyboardArrowRightIcon/>}
                            iconPosition={'end'}/>

                        <Tab label="Otros Seguros Vehiculares" style={{
                            marginTop:'-9%',
                            justifyContent: 'left',
                            width:'317px',
                            fontStyle:'italic',
                            fontSize:'11px',fontFamily:'Montserrat',marginLeft:'0%',color:'#FFFFFF'}}
                            icon={<KeyboardArrowRightIcon/>}
                            iconPosition={'end'}/>
                        
                    </Tabs>
              </Grid>

              <Grid item lg={3} >
              <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={(event) => handleChange(event)} 
                    style={{
                        textAlign:'left',
                        alignItems:'left',
                        marginTop:'-1%'
                    }}
                    
                    >
                        <Tab label="Seguro de vida" style={{
                            marginTop:'2%',
                            fontStyle:'italic',
                            justifyContent: 'left',
                            fontSize:'11px',fontFamily:'Montserrat',marginLeft:'0%',color:'#FFFFFF'}} 
                            icon={<KeyboardArrowRightIcon/>}
                            iconPosition={'end'}/>
                             
                        <Tab label="Seguro Oncológico" style={{
                             marginTop:'-8%',
                            fontStyle:'italic',
                            justifyContent: 'left',
                            fontSize:'11px',fontFamily:'Montserrat',marginLeft:'0%',color:'#FFFFFF'}}
                            icon={<KeyboardArrowRightIcon/>}
                            iconPosition={'end'}/>

                        <Tab label="Seguro de Autos y Camionetas" style={{
                            marginTop:'-4%',
                            fontStyle:'italic',
                            
                            justifyContent: 'left',
                            fontSize:'11px',fontFamily:'Montserrat',marginLeft:'0%',color:'#FFFFFF'}}
                            icon={<KeyboardArrowRightIcon/>}
                            iconPosition={'end'}/>

                        <Tab label="Ver todos" style={{
                            marginTop:'-7%',
                            fontStyle:'italic',
                            justifyContent: 'left',
                            fontSize:'11px',fontFamily:'Montserrat',marginLeft:'0%',color:'#FFFFFF'}}
                            icon={<KeyboardArrowRightIcon/>}
                            iconPosition={'end'}/>
                        
                    </Tabs>
              </Grid>

              <Grid item lg={3} >
                  
              </Grid>
          </Grid>
      </Menu>

      </>
    
    
    
  );
}

export default Navbar;