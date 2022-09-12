import { Box, FormControl, FormControlLabel, Grid, MenuItem, Select, Step, StepButton, Stepper, TextField, Radio, InputLabel, SelectChangeEvent, OutlinedInput } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import React from "react";
import QontoConnector from "./quontoConnector";
import TitleQuote from "./titleQuote";
import QuoteButtonNext from "../button/quoteButtonNext";
import "@fontsource/montserrat";
import { UseType, VehicularQuoterRequest } from "../../interfaces";


interface Props{
   
    useTypes: UseType[];
    setActiveStep: Dispatch<SetStateAction<number>>
    activeStep:number
    completed: Array<number>
    quoterData: VehicularQuoterRequest
    setQuoterData: Dispatch<SetStateAction<VehicularQuoterRequest>>
    noPatent: boolean
    setNoPatent: Dispatch<SetStateAction<boolean>>
}

function StepOneHome  ({activeStep,completed,setActiveStep,
  setQuoterData,quoterData,useTypes, noPatent,setNoPatent}:Props)  {

    const steps = ['1','2']
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

  const typeOfClienteOptions = ['Opcion 1', 'Opcion 2'];
  const 
  
return(
<Box style={{background:'white',width:'567px',height:'505px',marginTop:'0px',marginLeft:'5%'
              ,borderRadius: '0px 0px 20px 20px'}}>
                      
                      <TitleQuote title={'¡recibe información de seguro hogar!'} 
                      image={'/../public/homeIconQuoteHeader.png'}/>

                      <Grid container direction={'row'}>
                        
                      <Grid item xs={6}
                         sx={{
                          marginLeft: '-9%'
                        }}>
                        <FormControl sx={{
                          width:'79%',
                          
                        }} size="small">
                          <InputLabel
                          id="useType"
                          sx={{
                            marginTop:'3%',
                            marginLeft:'30%'
                          }}>Uso</InputLabel>
                          <Select
                            labelId="useType"
                            id="useType"
                            label="useType"
                            onChange={handleChangeUseType}
                            value={quoterData?.use_type?.id}
                            sx={{height:'55px'}}
                          >
                          {Array.isArray(useTypes) ? useTypes.map((useTypeIterator) => (

                          <MenuItem value={useTypeIterator.id}>{useTypeIterator.use_type}</MenuItem>
                          )) : []}
                   
                    
                          </Select>
                        </FormControl>
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
                          <TextField id="outlined-basic" label="Nombre" variant="outlined" fullWidth
                          onChange={handleChangeName}
                          value={quoterData?.name}
                          sx={{width:'78.5%', marginLeft:'17%',marginTop:'5%'}} />
                        </Grid>

                        <Grid item xs={6} alignItems='center' alignContent={'center'}>
                          <TextField id="phone" label="Télefono" variant="outlined"
                          onChange={handleChangePhone}
                          value={quoterData?.phone}
                           sx={{width:'78.5%', marginLeft:'0%',marginTop:'5%'}} />
                        </Grid>

                        
                        
                      </Grid>

                      <Grid container>
                        <Grid item xs={12}>
                          <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth
                          type="email"
                          onChange={handleChangeEmail}
                          value={quoterData?.email}
                          sx={{width:'80.5%', marginLeft:'9%',marginTop:'3%'}} />
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