import { Box, Grid, Typography } from "@mui/material";
import QuoteHeaderFloat from "../components/cotizador/quoteHeaderFloat";
import SavingsLifeInsurance from "../components/forms/savings-life-insurance";
import { HomeLayout } from "../components/layouts";

const testElements = () =>{

    return(
        <HomeLayout title={""} pageDescription={""}>
            <Box mt={12} textAlign='center'>
                <Typography>Más cuesta no tenerlo</Typography>
                <Typography>Otros Seguros Vehiculares</Typography>
            </Box>
            <SavingsLifeInsurance/>
        </HomeLayout>
    )
}
export default testElements;