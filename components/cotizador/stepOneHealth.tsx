import { Box, FormControl, FormControlLabel, Grid, MenuItem, Select, Step, StepButton, Stepper, TextField, Radio, InputLabel, SelectChangeEvent, OutlinedInput } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import React from "react";
import QontoConnector from "./quontoConnector";
import TitleQuote from "./titleQuote";
import QuoteButtonNext from "../button/quoteButtonNext";
import "@fontsource/montserrat";
import { HealthQuoterRequest, UseType, VehicularQuoterRequest } from "../../interfaces";
import QuoteButtonNextHealth from "../button/quoteButtonNextHealth";



interface Props{
   
    useTypes: UseType[];
    setActiveStep: Dispatch<SetStateAction<number>>
    activeStep:number
    completed: Array<number>
    quoterData: HealthQuoterRequest
    setQuoterData: Dispatch<SetStateAction<HealthQuoterRequest>>
    noPatent: boolean
    setNoPatent: Dispatch<SetStateAction<boolean>>
}

function StepOneHealth  ({activeStep,completed,setActiveStep,
  setQuoterData,quoterData,useTypes, noPatent,setNoPatent}:Props)  {

    const steps = ['1','2']
    const [isFieldComplete,setIsFieldComplete] = useState<boolean>(false);
    async function handleChangePhone(event: React.ChangeEvent<HTMLInputElement>){
        setQuoterData({...quoterData,phone:event.target.value});
      }

  
  
  async function handleChangeName(event:any){
    setQuoterData({...quoterData, name:event.target.value});
    
  }
  async function handleChangeEmail(event:any){
    setQuoterData({...quoterData, email:event.target.value});
  }

  async function handleChangeDni(event: React.ChangeEvent<HTMLInputElement>){
    setQuoterData({...quoterData,dni:event.target.value});
  }

  async function handleChangePromotionalCode(event: any){
    setQuoterData({...quoterData, promotional_code:event.target.value});
    
  }
  
return(
<Box style={{background:'white',width:'567px',height:'505px',marginTop:'0px',marginLeft:'5%'
              ,borderRadius: '0px 0px 20px 20px'}}>
                      
                      <TitleQuote title={'??Cotiza en segundos tu seguro de salud!'} 
                      image={'/healthIconQuoteHeader.png'}/>

                      <Grid container direction={'row'}>
                        
                      
                      <Grid item xs={4.67}
                      sx={{marginLeft:'9%',marginTop:'1%'}}>
                      <TextField id="outlined-basic" label="C??digo promocional 
                        (opcional)" 
                        value={quoterData?.promotional_code}
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
                        onChange={(event)=>handleChangePromotionalCode(event)}/>
                        </Grid>

                        <Grid item xs={3.1}
                        sx={{
                          marginLeft: '2.4%',
                          marginTop:'1%'
                        }}>
                        <TextField id="dni-number" label="DNI"
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
                        
                        <Grid item xs={6}>
                          <TextField id="outlined-basic" label="Nombre" variant="outlined" 
                          onChange={handleChangeName}
                          value={quoterData?.name}
                          sx={{width:'78.5%', marginLeft:'17%',marginTop:'5%'}} />
                        </Grid>

                        <Grid item xs={6} alignItems='center' alignContent={'center'}>
                          <TextField id="phone" label="T??lefono" variant="outlined"
                          onChange={handleChangePhone}
                          value={quoterData?.phone}
                           sx={{width:'78.5%', marginLeft:'0%',marginTop:'5%'}} />
                        </Grid>

                        
                        
                      </Grid>

                      <Grid container>
                        <Grid item xs={12}>
                          <TextField id="outlined-basic" label="E-mail" variant="outlined" 
                          type="email"
                          onChange={handleChangeEmail}
                          value={quoterData?.email}
                          sx={{width:'80.5%', marginLeft:'9%',marginTop:'3%'}} />
                        </Grid>

                        
                        
                      </Grid>

                      <Grid container flexDirection={'row'}>
                        


                        <QuoteButtonNextHealth setActiveStep={setActiveStep}
                         activeStep={activeStep} completed={[]} quoterData={quoterData} 
                         isFieldComplete={isFieldComplete}/>
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

export default StepOneHealth;