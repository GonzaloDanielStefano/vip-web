import { Grid, Typography } from "@mui/material";
import "@fontsource/montserrat";
import Image from 'next/image';
import { QuoteResult, VehicularProduct } from "../../interfaces";
import { useEffect, useState } from "react";

interface Props {
    quoteSelected: QuoteResult
}
const Promociones = ({ quoteSelected }: Props) => {
    const [vehicularProduct, setVehicularProduct] = useState<VehicularProduct>();

    useEffect(() => {
        if ('risk_factors' in quoteSelected.product) {
            setVehicularProduct(quoteSelected.product as VehicularProduct)
        }


    }, [])
    return (
        <Grid item height={150} minHeight={150} maxHeight={150}
            xs={6}>
            <Grid container>
                <Grid item xs={2}
                    sx={{
                        marginLeft: '0%',
                        marginTop: '6%'
                    }}>
                    <Image src={'/../public/promotionIcon.png'}
                        style={{}}
                        width={35.76} height={35}
                    />
                </Grid>

                <Grid item xs={2} width={300}
                    sx={{ marginTop: '8%' }}>
                    <Typography
                        sx={{
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            fontSize: '15px',
                            lineHeight: '17.35px',
                            color: '#0F206C'
                        }}>PROMOCIONES:</Typography>

                </Grid>
                <Grid container>
                    {
                        Array.isArray(vehicularProduct?.promotions)
                            ? vehicularProduct?.promotions.map((promotion) => (

                                <Grid container xs={6}>
                                    <Grid item xs={4} alignContent='center'
                                        sx={{
                                            marginTop: '0%'
                                        }}>
                                        <Image src={promotion.image}
                                            width={94} height={70}
                                        />
                                    </Grid>
                                    <Grid item xs={2} alignContent='center'
                                        sx={{
                                            marginTop: '5%'
                                        }}>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Montserrat',
                                                fontWeight: 500,
                                                fontStyle: 'normal',
                                                fontSize: '14px',
                                                lineHeight: '16px',
                                                color: '#000000'
                                            }}>{promotion.description}</Typography>
                                    </Grid>
                                </Grid>)) : []
                    }




                </Grid>

            </Grid>
        </Grid>
    )
}

export default Promociones;