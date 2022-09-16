import { Box, FormControl, Grid, MenuItem, Select, Step, StepButton, Stepper, OutlinedInput, InputLabel, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import React from "react";
import TitleQuote from "./titleQuote";
import QontoConnector from "./quontoConnector";
import QuoteButton from "../button/quoteButton";
import { Department, FuelType, VehicularQuoterRequest } from "../../interfaces";

interface Props{
    steps: Array<string>
    setActiveStep: Dispatch<SetStateAction<number>>
    activeStep:number
    completed: Array<number>
    quoterData: VehicularQuoterRequest 
    setQuoterData: Dispatch<SetStateAction<VehicularQuoterRequest>>
    departments: Department[]
    fuelTypes: FuelType[]
}
function StepTwo  ({steps,activeStep,completed,setActiveStep,quoterData,setQuoterData,
  departments, fuelTypes}:Props)  {
    
  function handleChangeDepartament(event: SelectChangeEvent){
    var newDepartment = departments.find(department => department.id === event.target.value);
    if(newDepartment != null){
    setQuoterData({...quoterData, department:newDepartment});}
    
  }

  async function handleChangeFuelType(event:SelectChangeEvent){
    var newFuelType = fuelTypes.find(fuelType => fuelType.id === event.target.value);
    if(newFuelType != null){
      setQuoterData({...quoterData, fuel_type: newFuelType});
    }
  }
return(
<Box style={{background:'white',width:'567px',height:'565px',marginTop:'0px',marginLeft:'5%'
              ,borderRadius: '0px 0px 20px 20px'}}>
                      <TitleQuote title={'¡Cotiza en segundos tu seguro vehicular!'} 
                      image={'/../public/vehicle.JPG'}/>
                      <Grid container>
                        

                        <Grid item xs={6} 
                         sx={{
                          marginLeft: '9%'
                        }}>
                        <FormControl sx={{
                          width:'162%',
                          
                        }} size="small">
                          
                          <InputLabel>Departamento</InputLabel>
                          <Select 
                            labelId="department"
                            id="department"
                            input={<OutlinedInput />}
                            sx={{height:'55px'}}
                            inputProps={{ 'aria-label': 'Without label' }}
                            onChange={handleChangeDepartament}  
                            value={quoterData?.department?.id}               
                          >
                          {Array.isArray(departments) ? departments.filter(department=> department.disabled
                          === false)
                          .map((department)=>(
                            
                            <MenuItem value={department.id}>{department.name}</MenuItem>
                          )):[]}
                            
                          </Select>
                        </FormControl>
                        </Grid>
                      </Grid>

                      <Grid container>
                      <Grid item xs={6} 
                         sx={{
                          marginLeft: '9%',
                          marginTop:'5%'
                        }}>
                        <FormControl sx={{
                          width:'162%',
                          
                        }} size="small">
                          <InputLabel>Biocombustible</InputLabel>
                          <Select
                            labelId="fuelType"
                            id="fuelType"
                            input={<OutlinedInput />}
                            sx={{height:'55px'}}
                            inputProps={{ 'aria-label': 'Without label' }}
                            value={quoterData?.fuel_type?.id}
                            onChange={handleChangeFuelType}
                          >
                           {Array.isArray(fuelTypes) ? fuelTypes.map((fuelType)=>(
                            
                            <MenuItem value={fuelType.id}>{fuelType.name}</MenuItem>
                          )):[]}
                            
                          </Select>
                        </FormControl>
                        </Grid>                                               
                      </Grid>

                      <QuoteButton buttonName={"Siguiente"} setActiveStep={setActiveStep}
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
                </Box>);}

export default StepTwo;