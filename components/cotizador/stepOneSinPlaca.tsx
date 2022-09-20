import { Box, FormControl, FormControlLabel,Grid, MenuItem, Select, Step, StepButton, Stepper, TextField, OutlinedInput, Radio, InputLabel, SelectChangeEvent } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import React from "react";
import TitleQuote from "./titleQuote";
import QuoteButtonNext from "../button/quoteButtonNext";
import QontoConnector from "./quontoConnector";
import { Brand, UseType, Vehicle, VehicularQuoterRequest } from "../../interfaces";
import {getVehiclesByBrand } from "../../pages/api/data";

interface Props{
    steps: Array<string>
    setActiveStep: Dispatch<SetStateAction<number>>
    activeStep:number
    completed: Array<number>
    noPatent: boolean
    setNoPatent: Dispatch<SetStateAction<boolean>>
    useTypes: UseType[];
    quoterData: VehicularQuoterRequest 
    setQuoterData: Dispatch<SetStateAction<VehicularQuoterRequest>> 
    brands: Brand[];
    
}
function StepOneSinPlaca  ({steps,activeStep,completed,setActiveStep
  ,useTypes,brands,quoterData,setQuoterData,setNoPatent}:Props)  {
    
    const [vehiclesByBrand, setVehiclesByBrand] = React.useState<Vehicle[]>();
    const [isFieldComplete,setIsFieldComplete] = useState<boolean>(false);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNoPatent((event.target as HTMLInputElement).checked);
        
      };

      async function handleChangeUseType(event: SelectChangeEvent){
        var newUseType = useTypes.find(useType => useType.id === event.target.value);
        if(newUseType != null){
         setQuoterData({...quoterData, use_type:newUseType});}
      };
    async function handleChangeEmail(event: any){
        setQuoterData({...quoterData, email:event});
    }
    async function handleChangeBrand(event: SelectChangeEvent){
        var newBrand = brands.find(brand => brand.id === event.target.value);
        const resultVehiclesByBrand = await getVehiclesByBrand(parseInt(event.target.value));
        setVehiclesByBrand(Array.isArray(resultVehiclesByBrand) ? resultVehiclesByBrand : [] );
        
    }

    async function handleChangeModel(event: SelectChangeEvent){
      var newModel = vehiclesByBrand?.find(vehicle => vehicle?.model?.id == event.target.value);
      if(newModel != null){
        setQuoterData({...quoterData, vehicle:newModel});
      }
    }

    async function handleChangeProducedAt(event:SelectChangeEvent){
      setQuoterData({...quoterData, produced_at: event.target.value});
    }

return(
<Box style={{background:'white',width:'567px',height:'565px',marginTop:'0px',marginLeft:'5%'
              ,borderRadius: '0px 0px 20px 20px'}}>
                      <TitleQuote title={'¡Cotiza en segundos tu seguro vehicular!'} 
                      image={'/vehicle.JPG'}/>

                      <Grid container direction={'row'}>
                        <Grid item xs={6}
                        sx={{
                          marginLeft: '9%'
                        }}>
                        <TextField id="outlined-basic" label="Código promocional 
                        (opcional)" 
                        variant="outlined" multiline={false}
                        value={quoterData?.promotional_code}
                        sx={{
                          alignItem: 'center',
                          wordBreak: 'break-all',
                          "& .MuiInputBase-root": {
                            height: "100%",
                            display: "flex",
                            alignItems: "start"
                          }
                        }}/>
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
                          {Array.isArray(useTypes) ? useTypes.map((useTypeIterator)=>(
                              
                              <MenuItem key={useTypeIterator.id} value={useTypeIterator.id}>{useTypeIterator.use_type}</MenuItem>
                          )):[]}
                          </Select>
                        </FormControl>
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
                        <Grid item xs={6} >
                        <FormControl sx={{
                            marginLeft: '18%',
                            marginTop: '4%',
                            width:'78%'
                        }} size="small">
                          <InputLabel>Marca</InputLabel>
                          <Select
                            labelId="brand"
                            id="brand"
                            onChange={handleChangeBrand}
                            input={<OutlinedInput />}
                            sx={{height:'55px'}} 
                            value={quoterData?.vehicle?.id}>
                            {Array.isArray(brands) ? brands.map((brand)=>(
                              
                                <MenuItem key={brand.id} value={brand.id}>{brand.brand_name}</MenuItem>
                            )):[]}
                          </Select>
                        </FormControl>
                        </Grid>

                        <Grid item xs={6} >
                        <FormControl sx={{
                            marginLeft: '0%',
                            marginTop: '4%',
                            width:'78%'
                          
                        }} size="small">

                          <InputLabel>Modelo</InputLabel>
                          <Select
                            labelId="brand"
                            id="brand"
                           
                            input={<OutlinedInput />}
                            sx={{height:'55px'}}
                            value={quoterData?.vehicle?.id} 
                            onChange={handleChangeModel}>
                            {Array.isArray(vehiclesByBrand) ? vehiclesByBrand.map((model)=>(
                              
                                <MenuItem key={model.id} value={model.model.id}>{model.model.model_name}</MenuItem>
                            )):[]}
                          </Select>
                        </FormControl>
                        </Grid>
                        
                      </Grid>

                      <Grid container flexDirection={'row'}>
                        <Grid item xs={6} >
                        <FormControl sx={{
                            marginLeft: '18%',
                            marginTop: '4%',
                            width:'78%'
                        }} size="small">
                          <InputLabel>Versión</InputLabel>
                          <Select
                            labelId="version"
                            id="version"
                            value={quoterData?.vehicle?.model}
                            input={<OutlinedInput />}
                            sx={{height:'55px'}} >
                            {Array.isArray(vehiclesByBrand) ? vehiclesByBrand.map((model)=>(
                              
                                <MenuItem key={model.id} value={model.model.id}>{model.model.sub_model}</MenuItem>
                            )):[]}
                          </Select>
                        </FormControl>
                        </Grid>

                        <Grid item xs={6} >
                        <FormControl sx={{
                            marginLeft: '0%',
                            marginTop: '4%',
                            width:'78%'
                          
                        }} size="small">

                          <InputLabel>Año de fabricación</InputLabel>
                          
                          <Select
                            labelId="createdAt"
                            id="createdAt"
                            value={quoterData?.produced_at}
                            input={<OutlinedInput />}
                            sx={{height:'55px'}}
                            onChange={handleChangeProducedAt}
                            >
                            <MenuItem value={2020}>2020</MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                          </Select>
                        </FormControl>
                        </Grid>
                        
                      </Grid>

                      <Grid container flexDirection={'row'}>
                        <Grid item xs={4}>
                        <FormControlLabel 
                        sx={{
                          marginLeft: '24.5%',
                          
                          marginTop: '9%',
                          
                        }} value={'checked'} 
                           checked={true}
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

                        <QuoteButtonNext setActiveStep={setActiveStep}
      activeStep={activeStep} completed={[]} isFieldComplete={isFieldComplete} quoterData={quoterData}/>
                      </Grid>

                      <Box sx={{ width: '90%', marginTop:'2.5%', marginLeft:'5%'}} >
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
                              <StepButton >
                                
                              </StepButton>
                            </Step>
                          ))}
                        </Stepper>
                        
                      </Box>

                      
                       
                      
                </Box>


    );}

export default StepOneSinPlaca;