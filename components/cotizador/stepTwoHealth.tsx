import { Box, FormControl, Grid, MenuItem, Select, Step, StepButton, Stepper, OutlinedInput, InputLabel, SelectChangeEvent, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import React from "react";
import TitleQuote from "./titleQuote";
import QontoConnector from "./quontoConnector";
import QuoteButton from "../button/quoteButton";
import { VehicularQuoterRequest } from "../../interfaces";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DependientesField from "./dependientesField";
interface Props{
    steps: Array<string>
    setActiveStep: Dispatch<SetStateAction<number>>
    activeStep:number
    completed: Array<number>
    quoterData: VehicularQuoterRequest 
    setQuoterData: Dispatch<SetStateAction<VehicularQuoterRequest>>
    
    
}
function StepTwoHealth  ({steps,activeStep,completed,setActiveStep,quoterData,setQuoterData}:Props)  {

    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
      );

    function handleChangeDependiente(event:any){
        setDependienteValue(event.target.value);
        if(event.target.value == 'SI' && dependienteValue != 'SI'){
            setCantidadDependientes(1);
        }else{
            setCantidadDependientes(0);
        }
    }


    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
      };
    
    function sumDependientes(){
        
        setCantidadDependientes(cantidadDependientes + 1);

    }

    function deleteDependientes(){
        setCantidadDependientes(cantidadDependientes -1);
    }

      const dependientes = ['SI', 'NO'];
      const [dependienteValue,setDependienteValue] = React.useState<string>('SI');
      const [cantidadDependientes,setCantidadDependientes] = React.useState<number>(0);
      const arrayDependientes = [1,2,3,4,5,6,7,8];
 
return(
<Box style={{background:'white',width:'567px',minHeight:'300px',marginTop:'0px',marginLeft:'5%'
              ,borderRadius: '0px 0px 20px 20px'}}>
                      <TitleQuote title={'¡Cotiza en segundos tu seguro vehicular!'} 
                      image={'/../public/vehicle.JPG'}/>
                      <Grid container padding={2} paddingLeft={6}>
                        
                        <Grid item lg={5.3}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker
                            label="Fecha de nacimiento"
                            inputFormat="MM/DD/YYYY"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                            />
                            </LocalizationProvider>
                        </Grid>

                        <Grid container lg={5.2}
                        sx={{
                          marginLeft: '4%'
                        }}>

                        <Grid item lg={8}>
                            <TextField id="outlined-basic" label="" variant="outlined"
                            value={"Dependientes"}
                            
                            sx={{marginLeft:'0%'}} />
                        </Grid>

                        <Grid item lg={1} ml={-0.3}>

                        
                        <Select
                            labelId="dependientes"
                            id="dependientes"
                            label=""
                            onChange={handleChangeDependiente} 
                            value={dependienteValue}
                            sx={{height:'55px'}}
                           // endAdornment={<KeyboardArrowDownIcon style={{color:'green'}}/>}
                          >
                          {dependientes.map((dependiente) => (

                          <MenuItem value={dependiente}>{
                                        dependiente
                            }</MenuItem>
                          ))}
                   
                    
                          </Select>
                          </Grid>
                        </Grid>
                        {
                            arrayDependientes.map((number)=>(
                                cantidadDependientes >= number ? 
                                <DependientesField
                                 setCantidadDependientes={setCantidadDependientes} 
                                 cantidadDependientes={cantidadDependientes}/> : ''
                                
                            ))
                        }
                        
                       
                      </Grid>

                      <Grid container>
                                                                  
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

export default StepTwoHealth;