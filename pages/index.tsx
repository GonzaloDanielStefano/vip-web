import { Grid } from '@mui/material';
import { HomeLayout } from '../components/layouts'
import "@fontsource/montserrat";
import React, { useState } from 'react';
import StepOne from '../components/cotizador/stepOne';
import StepTwo from '../components/cotizador/stepTwo';
import StepOneSinPlaca from '../components/cotizador/stepOneSinPlaca';
import StepThree from '../components/cotizador/stepThree';
import { Brand, Department, FuelType, HealthQuoterRequest, HomeQuoteRequest, UseType, Vehicle, VehicularQuoterRequest } from '../interfaces';
import WaitResult from '../components/cotizador/waitResult';
import { getBrands, getDepartments, getFuelTypes, getUseTypes, getVehicles } from './api/data';
import { GetServerSideProps } from 'next';
import HomeImage from '../components/ui/HomeImage';
import CarouselInsurance from '../components/ui/CarouselInsurance';
import QuoteHeader from '../components/cotizador/quoteHeader';
import QuoteHeaderFloat from '../components/cotizador/quoteHeaderFloat';
import StepOneHealth from '../components/cotizador/stepOneHealth';
import StepTwoHealth from '../components/cotizador/stepTwoHealth';
import StepOneHome from '../components/cotizador/stepOneHome';
import StepTwoHome from '../components/cotizador/stepTwoHome';

interface Props {
  vechiularQuoterRequest?: VehicularQuoterRequest
  useTypes: UseType[]
  vehicles: Vehicle[]
  brands: Brand[]
  departments: Department[]
  fuelTypes: FuelType[]
}

function Home({ useTypes, vehicles, brands, departments, fuelTypes }: Props) {

  const steps = ['1', '2', '3'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [noPatent, setNoPatent] = React.useState<boolean>(false);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});


  const [quoteHeaderVehicular, setQuoteHeaderVehicular] = useState<boolean>(true);
  const [quoteHeaderSalud, setQuoteHeaderSalud] = useState<boolean>(false);
  const [quoteHeaderHogar, setQuoteHeaderHogar] = useState<boolean>(false);

  /*DATOS*/
  const [quoterData, setQuoterData] = useState<VehicularQuoterRequest>();
  const [homeQuoteData, setHomeQuoteData]= useState<HomeQuoteRequest>();
  const [healthQuoteData, setHealthQuoteData] = useState<HealthQuoterRequest>();
  return (
    <HomeLayout title={'Corredor de Seguros VIP'} pageDescription={'Seguros'}>
      <div  className="index-bg" style={{ background: '#0F206C', height: '900px' }}>
        <Grid container>
          <Grid item xs={1} md={6} lg={6} style={{ background: '#0F206C' }}
            display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
            <HomeImage />
          </Grid>

          <Grid item xs={2} >
            <QuoteHeader
              setQuoteHeaderVehicular={setQuoteHeaderVehicular}
              setQuoteHeaderSalud={setQuoteHeaderSalud}
              setQuoteHeaderHogar={setQuoteHeaderHogar} />

            {activeStep == 0 && noPatent != true && quoteHeaderVehicular == true ?
              <StepOne steps={steps} setActiveStep={setActiveStep} activeStep={activeStep}
                completed={Array.isArray(completed) ? completed : []} useTypes={useTypes} quoterData={
                  quoterData
                } setQuoterData={setQuoterData} noPatent={noPatent} setNoPatent={setNoPatent} />
              : ''}

            {activeStep == 0 && quoteHeaderSalud == true ?
              <StepOneHealth setActiveStep={setActiveStep} activeStep={activeStep}
                completed={Array.isArray(completed) ? completed : []} useTypes={useTypes} quoterData={
                  healthQuoteData
                } setQuoterData={setHealthQuoteData} noPatent={noPatent} setNoPatent={setNoPatent} />
              : ''}

            {activeStep == 0 && quoteHeaderHogar == true ?
              <StepOneHome  setActiveStep={setActiveStep} activeStep={activeStep}
              completed={Array.isArray(completed) ? completed : []} useTypes={useTypes}
               homeQuoterData={homeQuoteData} setHomeQuoterData={setHomeQuoteData}/>
              : ''}


            {activeStep == 1 && quoteHeaderVehicular == true ?
              <StepTwo steps={steps} setActiveStep={setActiveStep} activeStep={activeStep}
                completed={Array.isArray(completed) ? completed : []} quoterData={quoterData}
                setQuoterData={setQuoterData} departments={departments}
                fuelTypes={fuelTypes} /> : ''}

            {activeStep == 1 && quoteHeaderSalud == true ?
              <StepTwoHealth
               
                setActiveStep={setActiveStep}
                activeStep={activeStep}
                completed={Array.isArray(completed) ? completed : []}
                quoterData={quoterData}
                setQuoterData={setQuoterData}
              /> : ''}

            {activeStep == 1 && quoteHeaderHogar == true ?
              <StepTwoHome setActiveStep={setActiveStep} activeStep={activeStep}
              completed={Array.isArray(completed) ? completed : []} useTypes={useTypes}
              homeQuoterData={homeQuoteData} setHomeQuoterData={setHomeQuoteData}/>
              : ''}

            {activeStep == 0 && noPatent == true ?
              <StepOneSinPlaca steps={steps} setActiveStep={setActiveStep}
              useTypes={useTypes}
              quoterData={quoterData}
              setQuoterData={setQuoterData}
              activeStep={activeStep}
              brands={brands}
              completed={Array.isArray(completed) ? completed : []} 
              noPatent={noPatent} 
              setNoPatent={setNoPatent} 
               /> : ''}

            {activeStep == 2 ?
              <StepThree steps={steps} setActiveStep={setActiveStep} activeStep={activeStep}
                setQuoterData={setQuoterData} quoterData={quoterData}
                completed={Array.isArray(completed) ? completed : []} /> : ''}


            {activeStep == 3 ?
              <WaitResult /> : ''}
          </Grid>
        </Grid>
      </div>

      <Grid container lg={12} sx={{ position: 'absolute', top: '145%' }}>
        <CarouselInsurance />
      </Grid>


      <QuoteHeaderFloat />


    </HomeLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  try {

    const vehicles = await getVehicles();
    const useTypes = await getUseTypes();
    const brands = await getBrands();
    const departments = await getDepartments();
    const fuelTypes = await getFuelTypes();

    return { props: { useTypes, brands, vehicles, departments, fuelTypes } }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }




}
export default Home
