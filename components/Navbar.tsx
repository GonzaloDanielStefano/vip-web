import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import Toolbar from '@mui/material/Toolbar';
import {createTheme, ThemeProvider, Grid, Tabs, Menu, MenuItem, Divider,Typography, Tab} from '@mui/material';
import Image from 'next/image'
import "@fontsource/montserrat";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import TypographyNavBar from './ui/TypographyNavBar';
import TypographyNavBarImage from './ui/TypographyNavBarImage';
import { useState } from 'react';
import { KeyboardArrowRight } from '@mui/icons-material';






  const Navbar = () => {

    const [open,setOpen] = useState<boolean>(false);

    async function openSubMenu(){
       // setOpen(!open);
    }
    const [value, setValue] = useState();
    async function handleChange (event) {
        setValue(event.target.value);
      };
  return (
    
   
      <>
      <AppBar position="static" style={{
          background: "white"
      }}>
        <Toolbar>
            <Grid container>
                <Grid item xs={6} lg={3}>
                    <div style={{width:"138.3px", height:"57", marginLeft:"12.19%", marginRight:"10%"}}>
                    <Image src={'/../public/logoVipHeader.jpg'} width={138.3} height={57} 
                    />
                    </div>
                </Grid>
                
                <Hidden xsDown smDown >
                <Grid item xs={4} lg={4}>
                    <Tabs  >
                    <TypographyNavBar title={'Nosotros'} color={'primary'} />
                    

                    
                    <TypographyNavBarImage src={'/../public/flechaDesplegable.jpg'}
                     title={'Seguro personas'} color={'primary'} id={'insurancePeople'}/>
                    

                    
                    <TypographyNavBarImage src={'/../public/flechaDesplegable.jpg'} 
                    title={'Seguro empresas'} color={'primary'} id={'insuranceCompany'}/>
                    </Tabs>
            

                </Grid>
                </Hidden>
                
               
                <Grid item xs={6} lg={4}>
                    <Tabs>
                    <Hidden xsDown smDown >
                    <TypographyNavBar title={'Blog'} color={'primary'} />

                    <TypographyNavBar title={'Trabaja con nosotros'}  color={'primary'}/>
                    </Hidden>
                    <div style={{width:"141px", background:"#2EA082",
                    borderRadius:"10px", textAlign:"center", marginRight:"1%", marginTop:"0.5%"}} >
                    <TypographyNavBar title={'Contáctanos'} color={"info"} />
                    </div>
                    </Tabs>
                </Grid> 
                

                <Grid item xs={1} lg={1}>
                    <div style={{marginTop:"7%",marginLeft:"5%"}}>
                    <Image src={'/../public/phoneIcon.jpg'} width={40} height={40}/>
                    </div>
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