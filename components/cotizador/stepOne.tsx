import { Box, FormControl, FormControlLabel, Grid, MenuItem, Select, Step, StepButton, Stepper, TextField, Radio, InputLabel, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import React from "react";
import QontoConnector from "./quontoConnector";
import TitleQuote from "./titleQuote";
import QuoteButtonNext from "../button/quoteButtonNext";
import "@fontsource/montserrat";
import { UseType, VehicularQuoterRequest } from "../../interfaces";


interface Props{
    steps: Array<string>
    useTypes: UseType[];
    setActiveStep: Dispatch<SetStateAction<number>>
    activeStep:number
    completed: Array<number>
    quoterData: VehicularQuoterRequest
    setQuoterData: Dispatch<SetStateAction<VehicularQuoterRequest>>
    noPatent: boolean
    setNoPatent: Dispatch<SetStateAction<boolean>>
}

function StepOne  ({steps,activeStep,completed,setActiveStep,
  setQuoterData,quoterData,useTypes, noPatent,setNoPatent}:Props)  {

 

  async function handleChangeUseType(event: SelectChangeEvent){
    var newUseType = useTypes.find(useType => useType.id === event.target.value);
    if(newUseType != null){
    setQuoterData({...quoterData, use_type:newUseType});}
  };
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoPatent((event.target as HTMLInputElement).checked);
    
  };

  async function handleChangeEmail(event:any){
    setQuoterData({...quoterData, email:event.target.value});
  }

  

  async function handleChangePromotionalCode(event: any){
    setQuoterData({...quoterData, promotional_code:event.target.value});
    
  }
  
return(
<Box style={{background:'white',width:'567px',height:'565px',marginTop:'0px',marginLeft:'5%'
              ,borderRadius: '0px 0px 20px 20px'}}>
                      
                      <TitleQuote/>

                      <Grid container direction={'row'}>
                        <Grid item xs={6}
                        sx={{
                          marginLeft: '9%'
                        }}>
                        <TextField id="outlined-basic" label="Código promocional 
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
                      </Grid>

                      <Grid container>
                        <Grid item xs={12}>
                          <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth
                          onChange={handleChangeEmail}
                          value={quoterData?.email}
                          sx={{width:'80.5%', marginLeft:'9%',marginTop:'3%'}} />
                        </Grid>

                        <Grid item xs={12} alignItems='center' alignContent={'center'}>
                          <TextField id="outlined-basic" label="Placa" variant="outlined"
                           sx={{width:'80.5%', marginLeft:'9%',marginTop:'3%'}} />
                        </Grid>
                        
                      </Grid>

                      <Grid container flexDirection={'row'}>
                        <Grid item xs={4}>
                        <FormControlLabel 
                        sx={{
                          marginLeft: '24.5%',
                          
                          marginTop: '9%',
                          
                        }} value={'checked'} 
                           
                           control={<Radio />}
                           label={undefined}
                           onChange = {handleRadioChange} 
                         />
                         
                        </Grid>

                        <Grid item xs={8}>
                        <InputLabel
                        sx={{
                          marginTop:'7.2%',
                          marginLeft:'-25%',
                          fontFamily:"Montserrat",
                          fontWeight: 'bold',
                          
                        }}>0KM / SIN PLACA POR EL MOMENTO </InputLabel>
                        </Grid>

                        <QuoteButtonNext setActiveStep={setActiveStep} setNoPatent={setNoPatent}
                         activeStep={activeStep} completed={[]} noPatent={noPatent}/>
                      </Grid>

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

export default StepOne;