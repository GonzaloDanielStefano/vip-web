import { Box, Typography } from "@mui/material";
import { HomeLayout } from "../../components/layouts"
import "@fontsource/montserrat";
import Image from 'next/image';
import { useState } from "react";
import { HomeQuoteRequest } from "../../interfaces";
import React from "react";
import HomeQuoteStepOne from "../../components/cotizadores/home-quoter";
import CarouselInsurance from "../../components/ui/CarouselInsurance";
import BeaforeFooter from "../../components/ui/beforeFooter";
import Footer from "../../components/ui/footer";

const QuoteHomePage = () => {
    const [homeQuoteData, setHomeQuoteData] = useState<HomeQuoteRequest>();
    const steps = ['1', '2'];
    const [activeStep, setActiveStep] = React.useState(0);
    return (
        <HomeLayout title={""} pageDescription={""}>
            <Box mt={12} ml={14}>
                <Typography
                    sx={{

                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '23px',
                        lineHeight: '65px',
                        letterSpacing: '-0.02em',
                        color: '#151F6D',
                    }}>Más cuesta no tenerlo</Typography>
                <Typography
                    sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '45px',
                        lineHeight: '65px',
                        letterSpacing: '-0.02em',
                        color: '#151F6D',
                    }}>Seguro Hogar</Typography>
            </Box>

            <Box ml={5} mt={5} mb={5}>
                <Box display={'flex'}>
                    <HomeQuoteStepOne
                        setActiveStep={setActiveStep}
                        steps={steps}
                        setHomeQuoterData={setHomeQuoteData}
                        homeQuoterData={homeQuoteData}
                        activeStep={activeStep}
                    />

                    <Box ml={10}>
                        <Image src={'/car-30-percent-discount.png'} width={521} height={445} />
                    </Box>
                </Box>

            </Box>

            <CarouselInsurance />

            <BeaforeFooter />
            <Footer />
        </HomeLayout>

    )
}

export default QuoteHomePage;