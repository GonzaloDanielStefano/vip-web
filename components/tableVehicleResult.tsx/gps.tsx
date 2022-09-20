import { Grid, Typography } from "@mui/material";
import "@fontsource/montserrat";
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { QuoteResult, Vehicle, VehicularProduct } from "../../interfaces";

interface Props {
    gps: boolean
    quoteSelected: QuoteResult
    setGps: Dispatch<SetStateAction<boolean>>
}
const Gps = ({ gps, quoteSelected, setGps }: Props) => {

    const [vehicularProduct, setVehicularProduct] = useState<VehicularProduct>();

    // useEffect(() => {
    //     if ('risk_factors' in quoteSelected.product) {
    //         setVehicularProduct(quoteSelected.product as VehicularProduct)


    //         Array.isArray(vehicularProduct?.risk_factors)
    //             ? vehicularProduct?.risk_factors.map((risk_factor) => (

    //                 Array.isArray(risk_factor?.vehicles)
    //                     ? risk_factor?.vehicles.map((vehicle) => (
    //                         setGps(vehicle.mandatory_gps)
    //                     )) : []

    //             )) : []
    //     }
    // }, [])


return (
    <Grid item height={150} minHeight={150} maxHeight={150}
        xs={2}>
        <Grid container>
            <Grid item xs={4}
                sx={{
                    marginLeft: '25%',
                    marginTop: '18%'
                }}>
                <Image src={'/gpsIcon.png'}
                    style={{}}
                    width={35.76} height={35}
                />
            </Grid>

            <Grid item xs={4} width={300}
                sx={{ marginTop: '15%' }}>
                <Typography
                    sx={{
                        fontFamily: 'Montserrat',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontSize: '15px',
                        lineHeight: '17.35px',
                        color: '#0F206C'
                    }}>OBLIGACIÓN</Typography>
                <Typography
                    sx={{
                        fontFamily: 'Montserrat',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontSize: '15px',
                        lineHeight: '17.35px',
                        color: '#0F206C'
                    }}>DE GPS:</Typography>
            </Grid>

            <Grid item xs={12} alignContent='center' width={'100%'}
                sx={{
                    marginTop: '15%'
                }}>
                <Typography
                    sx={{
                        width: '100%',
                        marginLeft: '27%',
                        textAlign: 'center',
                        fontFamily: 'Montserrat',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontSize: '26px',
                        lineHeight: '23px',
                        color: '#313131'
                    }}>{gps == true ? 'Sí' : 'No'}</Typography>
            </Grid>



        </Grid>
    </Grid>
)
}

export default Gps;