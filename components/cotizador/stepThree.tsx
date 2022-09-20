import { Box, FormControl, FormControlLabel,Typography, Grid, MenuItem, Select, Step, StepButton, Stepper, TextField, OutlinedInput, Radio, Button, InputLabel, SelectChangeEvent } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import "@fontsource/montserrat";
import Image from 'next/image';
import React from "react";
import ButtonNextBack from "../button/quoteButton";
import TitleQuote from "./titleQuote";
import { VehicularQuoterRequest } from "../../interfaces";
import QontoConnector from "./quontoConnector";

interface Props{
    steps: Array<string>
    setActiveStep: Dispatch<SetStateAction<number>>
    activeStep:number
    completed: Array<number>
    setQuoterData: Dispatch<SetStateAction<VehicularQuoterRequest>>
    quoterData: VehicularQuoterRequest 
}
function StepThree  ({steps,activeStep,setActiveStep,setQuoterData,quoterData}:Props)  {

    async function handleChangeName(event:any){
      setQuoterData({...quoterData, name:event.target.value});
      
    }

    async function handleChangePhone(event: React.ChangeEvent<HTMLInputElement>){
      setQuoterData({...quoterData,phone:event.target.value});
    }
    
    async function handleChangeDni(event: React.ChangeEvent<HTMLInputElement>){
      setQuoterData({...quoterData,dni:event.target.value});
    }
return(
<Box style={{background:'white',width:'567px',height:'565px',marginTop:'0px',marginLeft:'5%'
              ,borderRadius: '0px 0px 20px 20px'}}>
                      
                      <TitleQuote title={'¡Cotiza en segundos tu seguro vehicular!'} 
                      image={'/vehicle.png'}/>
                      <Grid container direction={'row'}>
                        
                        <Grid item xs={4}>
                          <TextField id="outlined-basic" label="Nombre" variant="outlined" 
                          onChange={handleChangeName}
                          value={quoterData?.name}
                          sx={{width:'100.5%', marginLeft:'26%',marginTop:'3%'}} />
                        </Grid>

                        <Grid item xs={4}
                         sx={{
                          marginLeft: '11%',
                          marginTop:'1%'
                        }}>
                        <FormControl sx={{
                          width:'60%',
                          
                        }} size="small">
                          <InputLabel>DNI</InputLabel>
                          <Select
                            labelId="dni"
                            id="dni"
                            input={<OutlinedInput />}
                            sx={{height:'55px'}}
                            inputProps={{ 'aria-label': 'Without label' }}
                            
                            
                          >
                            <MenuItem value={0}>DNI</MenuItem>
                          </Select>
                        </FormControl>
                        </Grid>

                        <Grid item xs={2}
                        sx={{
                          marginLeft: '-13.5%',
                          marginTop:'1%'
                        }}>
                        <TextField id="dni-number" label=""
                        onChange={handleChangeDni}
                        value={quoterData?.dni}
                        variant="outlined" multiline={false}
                        sx={{
                          width:'151%',
                          alignItem: 'center',
                          wordBreak: 'break-all',
                          "& .MuiInputBase-root": {
                            height: "0%",
                            display: "flex",
                            alignItems: "start"
                          }
                        }}/>
                        </Grid>
                      </Grid>

                      <Grid container>
                        

                        <Grid item xs={6} alignItems='center' alignContent={'center'}>
                          <TextField id="phone" label="Télefono" variant="outlined"
                          onChange={handleChangePhone}
                          value={quoterData?.phone}
                           sx={{width:'67.5%', marginLeft:'17%',marginTop:'5%'}} />
                        </Grid>

                        <Grid item xs={6}>
                        <FormControlLabel value="end"
                        sx={{
                          marginLeft: '-14%',
                          marginTop: '5%'
                        }} control={<Radio />} 
                        label="SÓLO ESCRIBIRME POR WHATSAPP" />
                        </Grid>
                        
                      </Grid>
                      
                      <ButtonNextBack buttonName={"COTIZAR"} setActiveStep={setActiveStep} 
                      activeStep={activeStep} quoterData={quoterData}/>

                      <Box sx={{ width: '90%', marginTop:'6%', marginLeft:'5%'}} >
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

export default StepThree;