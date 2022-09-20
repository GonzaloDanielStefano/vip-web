import { Box, Divider, Grid, Typography } from "@mui/material";
import { HomeLayout } from "../components/layouts";
import "@fontsource/montserrat";
import "@fontsource/raleway";
import TitleQuoteResult from "../components/tableVehicleResult.tsx/titleQuoteResult";
import Image from 'next/image';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Department, QuoteResult, UseType, Vehicle, VehicularQuoterRequest } from '../interfaces';
import { getDepartment, getUseType, getVehicle } from "./api/data";
import NameInformation from "../components/tableVehicleResult.tsx/nameInformation";
import HeaderTableResult from "../components/tableVehicleResult.tsx/headerTableResult";
import Coberturas from "../components/tableVehicleResult.tsx/coberturas";
import AnualPrice from "../components/tableVehicleResult.tsx/anualPrice";
import Financiamiento from "../components/tableVehicleResult.tsx/financiamiento";
import TiposDeCobertura from "../components/tableVehicleResult.tsx/tiposDeCobertura";
import ChangeValueVehicle from "../components/tableVehicleResult.tsx/changeValueVehicle";
import Deducible from "../components/tableVehicleResult.tsx/deducible";
import Gps from "../components/tableVehicleResult.tsx/gps";
import Promociones from "../components/tableVehicleResult.tsx/promociones";
import Beneficios from "../components/tableVehicleResult.tsx/beneficios";
import BeaforeFooter from "../components/ui/beforeFooter";
import Footer from "../components/ui/footer";
import Glossary from "../components/ui/glossary";



const QuoteVehicleResultt = () => {

    const router = useRouter();
    const [vehicle, setVehicle] = useState<Vehicle>();
    const [department, setDepartment] = useState<Department>();
    const [useType, setUseType] = useState<UseType>();
    const [quoteResult, setQuoterResult] = useState<QuoteResult[]>();
    const [quoteData, setQuoteData] = useState<VehicularQuoterRequest>();
    //const localResult = JSON.parse(typeof localStorage.getItem('quoteResult') == "undefined" ? '{}' : localStorage.getItem('quoteResult'));
    const [anualPrice, setAnualPrice] = useState<number>();
    const [quoteSelected, setQuoteSelected] = useState<QuoteResult>();
    const [quoteResultIndex, setQuoteResulIndex] = useState<number>(0);
    const [priceVehicle, setPriceVehicle] = useState<number>();
    const [gps, setGps] = useState<boolean>(false);



    function parsedDataFunction() {

        var rawData = localStorage.getItem("quoteResult");
        var parsedData = null;  // set whatever the default value should be if there is no localStorage value
        if (rawData) {
            parsedData = JSON.parse(rawData);
            return parsedData;
        }
        return parsedData;
    }
    useEffect(() => {


        setQuoteData({ ...quoteData, name: typeof router.query.name == "string" ? router.query.name.toString() : '' });
        setQuoteData({ ...quoteData, email: typeof router.query.email == "string" ? router.query.email.toString() : '' });
        setQuoteData({ ...quoteData, phone: typeof router.query.phone == "string" ? router.query.phone.toString() : '' });
        setQuoteData({ ...quoteData, dni: typeof router.query.dni == "string" ? router.query.dni.toString() : '' });
        setQuoteData({ ...quoteData, produced_at: typeof router.query.produced_at == "string" ? router.query.produced_at.toString() : '' });
        setQuoteData({ ...quoteData, promotional_code: typeof router.query.promotional_code == "string" ? router.query.promotional_code.toString() : '' });


        const localData = parsedDataFunction();
        if (localData != null) {
            setQuoterResult(localData);
        }




        if (typeof router.query.vehicle == "string") {
            getVehicle(router.query.vehicle.toString())
                .then((response) => {
                    if (typeof response === 'object') {
                        setVehicle(response);
                        setQuoteData({ ...quoteData, vehicle: response });

                    }
                });
        }

        if (typeof router.query.department == "string") {
            getDepartment(router.query.department.toString())
                .then((response) => {
                    if (typeof response === 'object') {
                        setDepartment(response);
                        setQuoteData({ ...quoteData, department: response });

                    }
                });
        }

        if (typeof router.query.use_type == "string") {
            getUseType(router.query.use_type.toString())
                .then((response) => {
                    if (typeof response === 'object') {
                        setUseType(response);
                        setQuoteData({ ...quoteData, use_type: response });

                    }
                });
        }




    }, [])




    return (
        <HomeLayout title={'Corredor de Seguros VIP'} pageDescription={'Seguros'}>
            <Box sx={{ marginLeft: '5%', marginRight: '5%', height: '1500px', width: '90%' }}>


                <Grid container gridTemplateRows={10} rowSpacing={0} columnSpacing={0}
                    sx={{

                        gridGap: '10px',
                        padding: '15px',
                        textAlign: 'center',

                        gridTemplateRows: 10
                    }}>

                    <TitleQuoteResult isTableComparative={false} />

                    <NameInformation name={typeof router.query.name == "string" ? router.query.name.toString() : ''} />

                    <Grid item xs={12} >
                        <Divider sx={{ border: '1px solid #DEDEDE' }} />
                    </Grid>
                    <Grid item xs={12} >
                        <Typography sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 500,
                            fontSize: '25px',
                            lineHeight: '28.75px',
                            textAlign: 'center',
                            color: '#151F6D'
                        }}>
                            {useType?.use_type} - {department?.description_for_client}

                        </Typography>

                        <Typography sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 500,
                            fontSize: '25px',
                            lineHeight: '28.75px',
                            textAlign: 'center',
                            color: '#151F6D'
                        }}>
                            {vehicle?.brand?.brand_name} / {vehicle?.model?.model_name}
                            / {vehicle?.model?.sub_model} / {router.query.produced_at}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} >
                        <Divider sx={{ border: '1px solid #DEDEDE' }} />
                    </Grid>

                    <Grid container xs={12} alignItems='center'>

                        <ChangeValueVehicle priceVehicle={priceVehicle}
                            produced_at={typeof router.query.name == "string" ? router.query.produced_at.toString() : ''} setPriceVehicle={setPriceVehicle}
                            vehicle={vehicle} />

                        <Grid item xs={8} sx={{ marginLeft: '0px' }}  >
                            <Typography sx={{
                                textAlign: 'start',
                                marginTop: '7px',
                                fontFamily: 'Montserrat',
                                fontStyle: 'normal',
                                fontSize: '18px',
                                fontWeight: 500,
                                lineHeight: '22px',
                                color: '#000000'
                            }}>
                                Tipos de Cobertura:
                            </Typography>

                            <TiposDeCobertura quoteResult={quoteResult} setQuoterResult={setQuoterResult} />



                        </Grid>

                        <Grid container sx={{ padding: '40px' }} columnSpacing={4}>
                            <Box width={'100%'} height={900}
                                sx={{

                                    marginTop: '50px'
                                }}>

                                <Grid container xs={12} >

                                    {

                                        Array.isArray(quoteResult) ? quoteResult.map((result, index) => (
                                            <HeaderTableResult
                                                key={index}
                                                setAnualPrice={setAnualPrice}
                                                quoteResult={result}
                                                index={index}
                                                quoteSelected={quoteSelected}
                                                setQuoteSelected={setQuoteSelected}
                                                quoteResultIndex={quoteResultIndex}
                                                setQuoteResulIndex={setQuoteResulIndex}
                                                title={result?.product?.category?.name}

                                            />
                                        )) : []
                                    }

                                </Grid>

                                <Grid item>
                                    <Box width={'100%'} height={814}
                                        sx={{
                                            border: '3px solid #0F206C',
                                            borderStyle: 'outlet',
                                            boxShadow: '0px 10px 30px rgba(21,31,109,0.1)',
                                            borderRadius: '0px 0px 20px 20px'
                                        }}>
                                        <Grid container>
                                            {
                                                quoteSelected !== undefined ? <Coberturas quoteSelected={quoteSelected} /> : ''
                                            }


                                            <Grid item xs={1}>
                                                <Divider orientation={'vertical'} variant={"middle"}

                                                    light={true} />
                                            </Grid>

                                            <Grid item xs={5} height={300} minHeight={300} maxHeight={300}>
                                                <Grid container>
                                                    {
                                                        quoteSelected !== undefined ?
                                                            <Deducible quoteSelected={quoteSelected} /> : ''
                                                    }
                                                    {
                                                        quoteSelected !== undefined ? <Financiamiento
                                                            quoteSelected={quoteSelected} /> : ''
                                                    }

                                                </Grid>


                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Divider orientation={'horizontal'} variant={"middle"}

                                                    light={true} />
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item height={150} minHeight={150} maxHeight={150}
                                                xs={2}>
                                                <Grid container>
                                                    <Grid item xs={4}
                                                        sx={{
                                                            marginLeft: '28%',
                                                            marginTop: '18%'
                                                        }}>
                                                        <Image src={'/yearCost.png'}
                                                            style={{}}
                                                            width={35.76} height={35}
                                                        />
                                                    </Grid>

                                                    <Grid item xs={4}
                                                        sx={{ marginTop: '15%' }}>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: 'Montserrat',
                                                                fontWeight: 600,
                                                                fontStyle: 'normal',
                                                                fontSize: '15px',
                                                                lineHeight: '17.35px',
                                                                color: '#0F206C'
                                                            }}>COSTO</Typography>
                                                        <Typography
                                                            sx={{
                                                                fontFamily: 'Montserrat',
                                                                fontWeight: 600,
                                                                fontStyle: 'normal',
                                                                fontSize: '15px',
                                                                lineHeight: '17.35px',
                                                                color: '#0F206C'
                                                            }}>ANUAL:</Typography>
                                                    </Grid>
                                                    {
                                                        anualPrice !== undefined ? <AnualPrice quote={anualPrice} /> : ''
                                                    }




                                                </Grid>

                                            </Grid>

                                            <Grid item height={150} minHeight={150} maxHeight={150}
                                                xs={1}>
                                                <Divider orientation={'vertical'} variant={"middle"}
                                                    light={true} />
                                            </Grid>

                                            {gps !== undefined && quoteSelected !== undefined
                                                ? <Gps gps={gps} quoteSelected={quoteSelected}
                                                    setGps={setGps} /> : ''}


                                            <Grid item height={150} minHeight={150} maxHeight={150}

                                                xs={1}>
                                                <Divider orientation={'vertical'} variant={"middle"}
                                                    light={true} />
                                            </Grid>

                                            {quoteSelected !== undefined ?
                                                <Promociones quoteSelected={quoteSelected} /> : ''}
                                        </Grid>

                                        {quoteSelected !== undefined ?
                                            <Beneficios quoteSelected={quoteSelected} /> : ''}
                                    </Box>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>


            <Glossary />

            <BeaforeFooter />

            <Footer />

        </HomeLayout>

    );
}

export default QuoteVehicleResultt;