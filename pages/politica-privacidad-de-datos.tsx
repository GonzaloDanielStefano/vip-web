import { Grid, Typography } from "@mui/material";
import { HomeLayout } from "../components/layouts"
import BeforeFooter from "../components/ui/beforeFooter";
import Footer from "../components/ui/footer";
import "@fontsource/montserrat";

const DataPrivacyPolicy = () => {


    return (
        <HomeLayout title={"C"} pageDescription={"C"} >
            <Grid container>
                <Grid container xs={12} margin={'auto'} marginTop={'4%'}>
                    <Grid item xs={1.45} marginLeft={'auto'}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat',
                                fontWeight: 400,
                                fontSize: '35px',
                                lineHeight: '112.5%',
                                color: '#151F6D',
                                letterSpacing: '0.01em'
                            }}>
                            Políticas
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
                            de privacidad
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={8} margin={'auto'} marginBottom={'5%'} marginTop={'5%'}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                            fontSize: '15px',
                            lineHeight: '142.5%',
                            color: '#3A3A3A',
                            letterSpacing: '0.01em'
                        }}>
                        It is a long established fact 
                    </Typography>
                </Grid>
            </Grid>

            <BeforeFooter />
            <Footer />

        </HomeLayout>
    )
}

export default DataPrivacyPolicy;