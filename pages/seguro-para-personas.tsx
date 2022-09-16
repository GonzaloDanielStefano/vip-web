import { Grid, Typography } from "@mui/material";
import { HomeLayout } from "../components/layouts";
import BeforeFooter from "../components/ui/beforeFooter";
import Footer from "../components/ui/footer";
import "@fontsource/montserrat";

const InsuranceForPeople = () => {

    return (
        <HomeLayout title={""} pageDescription={""}>
            <Grid container>
                <Grid container xs={12} margin={'auto'} marginTop={'4%'}>
                    <Grid item xs={1.2} marginLeft={'auto'}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: 400,
                                fontSize: '35px',
                                lineHeight: '112.5%',
                                color: '#151F6D',
                                letterSpacing: '0.01em'
                            }}>
                            Seguro
                        </Typography>
                    </Grid>

                    <Grid item xs={3} marginRight={'auto'}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: 700,
                                fontSize: '35px',
                                lineHeight: '112.5%',
                                color: '#151F6D',
                                letterSpacing: '0.01em'
                            }}>
                            para personas
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container marginBottom={'5%'}>
                    <Grid item xs={4}>

                    </Grid>
                </Grid>
                <BeforeFooter />
                <Footer />
            </Grid>
        </HomeLayout>
    )
}

export default InsuranceForPeople;