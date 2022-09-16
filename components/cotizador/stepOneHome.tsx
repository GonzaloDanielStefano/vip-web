import { Box, FormControl, FormControlLabel, Grid, MenuItem, Select, Step, StepButton, Stepper, TextField, Radio, InputLabel, SelectChangeEvent, OutlinedInput, InputAdornment } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import React from "react";
import QontoConnector from "./quontoConnector";
import TitleQuote from "./titleQuote";
import QuoteButtonNext from "../button/quoteButtonNext";
import "@fontsource/montserrat";
import { HomeQuoterRequest, UseType, VehicularQuoterRequest } from "../../interfaces";
import { CancelRounded } from "@mui/icons-material";


interface Props{
   
    useTypes: UseType[];
    setActiveStep: Dispatch<SetStateAction<number>>
    activeStep:number
    completed: Array<number>
    homeQuoterData: HomeQuoterRequest
    setHomeQuoterData: Dispatch<SetStateAction<HomeQuoterRequest>>
    noPatent: boolean
    setNoPatent: Dispatch<SetStateAction<boolean>>
}

function StepOneHome  ({activeStep,completed,setActiveStep,
    setHomeQuoterData,homeQuoterData,useTypes, noPatent,setNoPatent}:Props)  {

    const steps = ['1','2']
    async function handleChangePhone(event: React.ChangeEvent<HTMLInputElement>){
        setHomeQuoterData({...homeQuoterData,phone:event.target.value});
      }

  async function handleChangeName(event:any){
    setHomeQuoterData({...homeQuoterData, name:event.target.value});
    
  }
  async function handleChangeEmail(event:any){
    setHomeQuoterData({...homeQuoterData, email:event.target.value});
  }

  
  async function handleChangeTypeOfClient(event:SelectChangeEvent){
    setHomeQuoterData({...homeQuoterData, typeOfCliente:event.target.value});
  }

  async function handleChangeValueOfHouse(event:any){
      setHomeQuoterData({...homeQuoterData, valueOfHouse:event.target.value});
  }

  async function handleChangeContentValue(event:any){
    setHomeQuoterData({...homeQuoterData, contentValue:event.target.value});
  }
  const typeOfClienteOptions = ['Opcion 1', 'Opcion 2'];
  
  
return(
<Box className="boxQuote">
                      
                      <TitleQuote title={'¡recibe información de seguro hogar!'} 
                      image={'/../public/homeIconQuoteHeader.png'}/>

                      <Grid container direction={'row'}>
                        
                      <Grid item xs={12}
                         sx={{
                          marginLeft: '8.7%'
                        }}>
                        <FormControl className="homeField" sx={{
                          width:'88%',
                          
                        }} size="small">
                          <InputLabel
                          id="typeOfClient"
                          sx={{
                            marginTop:'2%',
                            
                          }}>Tipo de cliente</InputLabel>
                          <Select
                            labelId="typeOfClient"
                            id="typeOfClient"
                            label="typeOfClient"
                            onChange={handleChangeTypeOfClient}
                            value={homeQuoterData?.typeOfCliente}
                            sx={{height:'55px'}}
                          >
                          {Array.isArray(typeOfClienteOptions) ? typeOfClienteOptions.map((typeOfClienteOption) => (

                          <MenuItem value={typeOfClienteOption}>{typeOfClienteOption}</MenuItem>
                          )) : []}
                   
                    
                          </Select>
                        </FormControl>
                        </Grid>

                        

                        <Grid item xs={12} lg={5.1}
                         sx={{
                          
                          marginLeft:'8.8%',
                          marginTop:'2%'
                        }}>
                        <FormControl className="homeField" sx={{
                          width:'88%',
                          
                        }} size="small">
                          <InputLabel
                          id="typeOfClient"
                          sx={{
                            marginTop:'2%',
                            
                          }}>¿Qué desea cotizar?</InputLabel>
                          <Select
                            labelId="typeOfClient"
                            id="typeOfClient"
                            label="typeOfClient"
                            onChange={handleChangeTypeOfClient}
                            value={homeQuoterData?.typeOfCliente}
                            sx={{height:'55px'}}
                          >
                          {Array.isArray(typeOfClienteOptions) ? typeOfClienteOptions.map((typeOfClienteOption) => (

                          <MenuItem value={typeOfClienteOption}>{typeOfClienteOption}</MenuItem>
                          )) : []}
                   
                    
                          </Select>
                        </FormControl>
                        </Grid>

                        <Grid item xs={12} lg={5.15}
                         sx={{
                            marginTop:'2%'
                        }}>
                        <FormControl  className="homeFieldCurrency" >
                          <InputLabel
                          id="typeOfClient"
                          sx={{
                            marginTop:'2%',
                            
                          }}>Modo a asegurar</InputLabel>
                          <Select
                            labelId="typeOfClient"
                            id="typeOfClient"
                            label="typeOfClient"
                            onChange={handleChangeTypeOfClient}
                            value={homeQuoterData?.typeOfCliente}
                            sx={{height:'55px'}}
                          >
                          {Array.isArray(typeOfClienteOptions) ? typeOfClienteOptions.map((typeOfClienteOption) => (

                          <MenuItem value={typeOfClienteOption}>{typeOfClienteOption}</MenuItem>
                          )) : []}
                   
                    
                          </Select>
                        </FormControl>
                        </Grid>

                        <Grid item xs={12} lg={5.15}
                         sx={{
                          marginLeft: '8.7%',
                          marginTop:'2%'
                        }}>
                        <FormControl className="homeField" sx={{
                          width:'88%',
                          
                        }} size="small">
                          <InputLabel
                          id="typeOfClient"
                          sx={{
                            marginTop:'2%',
                            
                          }}>Tipo de vivienda</InputLabel>
                          <Select
                            labelId="typeOfClient"
                            id="typeOfClient"
                            label="typeOfClient"
                            onChange={handleChangeTypeOfClient}
                            value={homeQuoterData?.typeOfCliente}
                            sx={{height:'55px'}}
                          >
                          {Array.isArray(typeOfClienteOptions) ? typeOfClienteOptions.map((typeOfClienteOption) => (

                          <MenuItem value={typeOfClienteOption}>{typeOfClienteOption}</MenuItem>
                          )) : []}
                   
                    
                          </Select>
                        </FormControl>
                        </Grid>

                        <Grid item xs={12} lg={5.15}
                         sx={{
                          
                          marginTop:'2%'
                        }}>
                        <FormControl className="homeFieldCurrency">
                          <InputLabel
                          id="typeOfClient"
                          sx={{
                            marginTop:'2%',
                            
                          }}>Moneda</InputLabel>
                          <Select
                            labelId="typeOfClient"
                            id="typeOfClient"
                            label="typeOfClient"
                            onChange={handleChangeTypeOfClient}
                            value={homeQuoterData?.typeOfCliente}
                            sx={{height:'55px'}}
                          >
                          {Array.isArray(typeOfClienteOptions) ? typeOfClienteOptions.map((typeOfClienteOption) => (

                          <MenuItem value={typeOfClienteOption}>{typeOfClienteOption}</MenuItem>
                          )) : []}
                   
                    
                          </Select>
                        </FormControl>
                        </Grid>

                        <Grid item xs={12} lg={4.6}
                         sx={{
                          marginLeft: '8.5%',
                          marginTop:'2%'
                        }}>
                            <TextField className="homeField" id="outlined-basic" label="Valor del inmueble"
                            value={homeQuoterData?.valueOfHouse}
                            variant="outlined" multiline={false}
                            sx={{
                            alignItem: 'center',
                            wordBreak: 'break-all',
                            "& .MuiInputBase-root": {
                                height: "100%",
                                display: "flex",
                                alignItems: "start"
                            }
                            }}
                            onChange={(event)=>handleChangeValueOfHouse(event)}/>
                        </Grid>

                        <Grid item xs={12} lg={4.6}
                         sx={{
                          
                          marginTop:'2%',
                          marginLeft:'4.7%'
                        }}>
                            <TextField className="homeField" id="outlined-basic" label="Valor del contenido"
                            value={homeQuoterData?.contentValue}
                            variant="outlined" multiline={false}
                            sx={{
                            alignItem: 'center',
                            wordBreak: 'break-all',
                            "& .MuiInputBase-root": {
                                height: "100%",
                                display: "flex",
                                alignItems: "start"
                            }
                            }}
                            onChange={(event)=>handleChangeContentValue(event)}/>
                        </Grid>
                      </Grid>

                    
                      
                      <Grid container flexDirection={'row'}>
                        


                        <QuoteButtonNext setActiveStep={setActiveStep} setNoPatent={setNoPatent}
                         activeStep={activeStep} completed={[]} noPatent={noPatent}/>
                      </Grid>

                      <Box sx={{ width: '40%',margin:'auto',marginTop:'5%'}} >
                        <Stepper nonLinear activeStep={activeStep} connector={<QontoConnector />} >
                          {steps.map((label, index) => (
                            <Step key={label} /*completed={completed[index]} */
                            sx={{
                              '& .MuiStepLabel-root .Mui-completed': {
                                color: 'black', // circle color (COMPLETED)
                              },
                              
                              '& .MuiStepLabel-root .Mui-active': {
                                color: '#2E9F82', // circle color (ACTIVE)
                                border: '4px solid #151F6D',
                                borderRadius: '12px 12px 12px 12px'
                              },
                              '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                                {
                                  color: 'common.white', // Just text label (ACTIVE)
                                },
                              
                            }}>
                              <StepButton>
                                
                              </StepButton>
                            </Step>
                          ))}
                        </Stepper>
                        
                      </Box>

                      
                       
                      
                </Box>


    );}

export default StepOneHome;