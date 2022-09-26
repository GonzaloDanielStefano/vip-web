import { Box, Grid, Typography } from "@mui/material";
import { HomeLayout } from "../components/layouts";
import BeforeFooter from "../components/ui/beforeFooter";
import Footer from "../components/ui/footer";
import "@fontsource/montserrat";

const InsuranceForPeople = () => {

    return (
        <HomeLayout title={""} pageDescription={""}>
            <Box display={'flex'} ml={50} mt={15}>

                <Typography
                    sx={{
                        textAlign: 'center',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '45px',
                        lineHeight: '65px',
                        letterSpacing: '-0.02em',
                        color: '#151F6D',
                    }}>
                    Seguro
                </Typography>

                <Typography ml={1}
                    sx={{
                        textAlign: 'center',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '45px',
                        lineHeight: '65px',
                        letterSpacing: '-0.02em',
                        color: '#151F6D',
                    }}>
                    para personas
                </Typography>

            </Box>

            <Grid container>
                    <BeforeFooter/>
                    <Footer/>
            </Grid>
        </HomeLayout>
    )
}

export default InsuranceForPeople;