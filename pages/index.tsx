
import { Box,Grid,Typography } from '@mui/material';
import Image from 'next/image';
import { HomeLayout } from '../components/layouts'
import React, { SetStateAction, useState } from 'react';
import StepOne from '../components/cotizador/stepOne';
import StepTwo from '../components/cotizador/stepTwo';
import StepOneSinPlaca from '../components/cotizador/stepOneSinPlaca';
import StepThree from '../components/cotizador/stepThree';
import { Brand, Department, FuelType, UseType, Vehicle, VehicularQuoterRequest } from '../interfaces';
import WaitResult from '../components/cotizador/waitResult';
import { getBrands, getDepartments, getFuelTypes, getUseTypes, getVehicles } from './api/data';
import { GetServerSideProps } from 'next';

interface Props {
  vechiularQuoterRequest? : VehicularQuoterRequest
  useTypes: UseType[]
  vehicles: Vehicle[]
  brands: Brand[]
  departments: Department[]
  fuelTypes: FuelType[]
}

function Home ({vechiularQuoterRequest, useTypes,vehicles,brands,departments,fuelTypes}:Props){

  const [activeStep, setActiveStep] = React.useState(0);
  const [noPatent, setNoPatent] = React.useState<boolean>(false);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const steps = ['1', '2', '3'];


  /*DATOS*/
  const [quoterData, setQuoterData] = useState<VehicularQuoterRequest>();
  return (
    <HomeLayout title={'Corredor de Seguros VIP'} pageDescription={'Seguros'}>
      <div style={{background:'#0F206C', width:'100%',height:'900px'}}>
          <Grid container>
             <Grid item xs={6} style={{background:'#0F206C'}}>
                 
             </Grid>

             <Grid item xs={2} >
                <Box display={'flex'} sx={{marginTop:'30px',marginLeft:'11px',width:'567px'}}>

                <Box sx={{width:'33.33%',background:'#2E9F82',height:'50px',alignItems:'center'
                ,borderRadius:'10px 10px 0px 0px',marginRight:'1px',fontFamily:'Montserrat'}} display={'flex'}>

                  <Box sx={{marginLeft:'40px',
                  marginRight:'0px',position:'relative'}}>
                    <Image src={'/../public/vehicular.PNG'} width={27.5} height={27.5} 
                      /> </Box>

                    <Typography fontFamily='Montserrat' fontSize={13}
                    sx={{ marginLeft:'3%', color:'white'}}>SEGURO VEHICULAR</Typography></Box>
                  

                <Box sx={{width:'33.33%',background:'#2E9F82',height:'50px'
                ,borderRadius:'10px 10px 0px 0px',marginRight:'1px',fontFamily:'Montserrat',
                alignItems:'center', position:'relative'}} display={'flex'}>

                  <Box sx={{marginLeft:'24px',
                  marginRight:'0px',position:'relative'}}>
                  <Image src={'/../public/hogar.PNG'} width={26} height={22} 
                    />
                  </Box>
                  
                    <Typography fontFamily='Montserrat' fontSize={13}
                    sx={{textAlign:'end', marginLeft:'3%', color:'white'}}>SEGURO HOGAR</Typography></Box>

                  <Box sx={{width:'33.33%',background:'#2E9F82',height:'50px'
                ,borderRadius:'10px 10px 0px 0px',marginRight:'1px',fontFamily:'Montserrat',
                alignItems:'center', position:'relative'}} display={'flex'}>

                  <Box sx={{marginLeft:'30px',
                  marginRight:'0px',position:'relative'}}>
                  <Image src={'/../public/salud.PNG'} width={26} height={22} 
                    />
                  </Box>
                  
                    <Typography fontFamily='Montserrat' fontSize={13}
                    sx={{textAlign:'end', marginLeft:'3%', color:'white'}}>SEGURO SALUD</Typography></Box>
              </Box>
              {activeStep == 0 && noPatent != true ?
              <StepOne steps={steps} setActiveStep={setActiveStep} activeStep={activeStep}
              completed={Array.isArray(completed) ? completed : []} useTypes={useTypes} quoterData={
                quoterData
              } setQuoterData={setQuoterData} noPatent={noPatent} setNoPatent={setNoPatent}/>
              :''}


                {activeStep == 1 ?
              <StepTwo steps={steps} setActiveStep={setActiveStep} activeStep={activeStep}
              completed={Array.isArray(completed) ? completed : []} quoterData={quoterData} 
              setQuoterData={setQuoterData} departments={departments} 
              fuelTypes={fuelTypes}/>:''}

                {activeStep == 0 && noPatent == true?
              <StepOneSinPlaca steps={steps} setActiveStep={setActiveStep} 
              useTypes={useTypes}
              quoterData={quoterData}
              setQuoterData={setQuoterData}
              activeStep={activeStep} 
              
              brands = {brands}
              completed={Array.isArray(completed)?completed:[]} />:''}

                {activeStep == 2 ?
              <StepThree steps={steps} setActiveStep={setActiveStep} activeStep={activeStep} 
              setQuoterData={setQuoterData}  quoterData={quoterData}
              completed={Array.isArray(completed)?completed:[]} />:''}


                {activeStep == 3 ?
              <WaitResult/>:''}
             </Grid>
          </Grid>
      </div>
    </HomeLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) =>{
    
  try{
  
    const vehicles = await getVehicles();
    const useTypes = await getUseTypes();
    const brands = await getBrands();
    const departments = await getDepartments();
    const fuelTypes = await getFuelTypes();
    
    return { props:{useTypes,brands, vehicles,departments, fuelTypes}}
} catch (err:any){
    return {props: {errors: err.message}}
}

  
  

}
export default Home
