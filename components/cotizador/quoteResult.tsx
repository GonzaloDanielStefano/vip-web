import { Box, Divider, Grid } from "@mui/material";
import Image from 'next/image';
import { VehicularQuoterRequest } from "../../interfaces";
import { HomeLayout } from "../layouts";

interface Props{
    vechiularQuoterRequest : VehicularQuoterRequest
}
const QuoteResult = ({vechiularQuoterRequest}:Props) => {

    return(
        <HomeLayout title={'Corredor de Seguros VIP'} pageDescription={'Seguros'}>
            <Grid container>
                <Grid item>
                    <Box>
                        <h2>Cotizador Vehicular</h2>
                        <Image src={'/../public/arrowLeft.png'} width={67.7} height={67.7} />
                        <h3>Resultados</h3>

                        <h4>¡Hola ${vechiularQuoterRequest.name?.split(' ')[0]}! Enviamos a tu correo 
                        detalles de las opciones comparadas</h4>
                    </Box>
                </Grid>

                <Grid item>
                        <Divider variant="middle" />
                </Grid>

                <Grid item>
                
                </Grid>

                <Grid item>
                    <Divider />
                </Grid>

            </Grid>
        </HomeLayout>
        
    );
}

export default QuoteResult;