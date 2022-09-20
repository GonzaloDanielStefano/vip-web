import { Grid, Typography, Divider, Button } from "@mui/material";
import "@fontsource/montserrat";
import Image from 'next/image';
import { QuoteResult, VehicularProduct } from "../../interfaces";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Props {
    quoteSelected: QuoteResult
}
const Beneficios = ({ quoteSelected }: Props) => {
    const [vehicularProduct, setVehicularProduct] = useState<VehicularProduct>();


    function drawImage(trade_mark: any): React.ReactNode {
        if (trade_mark) {
            return (
                <>
                    {/* <img style={{
                        height: '60px',
                        width: '80px',
                        
                       
                    }} src={trade_mark} alt='Img' /> */}

                    <Image src={trade_mark}
                        width={90} height={70}
                    />

                </>);
        }
        return <div>Sin imagen</div>
    }

    useEffect(() => {
        if ('risk_factors' in quoteSelected.product) {
            setVehicularProduct(quoteSelected.product as VehicularProduct)
        }


    }, [])
    return (
        <Grid container>
            <Grid item xs={12}>
                <Divider orientation={'horizontal'} variant={"middle"}

                    light={true} />
            </Grid>

            <Grid item xs={12}>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '15px',
                        lineHeight: '115.7%',
                        color: '#0F206C',
                        marginTop: '3%'

                    }}>BENEFICIOS</Typography>
            </Grid>

            <Grid container xs={12} sx={{ marginTop: '4%' }}>
                <Grid container xs={1}>

                </Grid>
                {
                    Array.isArray(vehicularProduct?.benefits)
                        ? vehicularProduct?.benefits.map((benefit) => (

                            <Grid container xs={2} marginLeft={0} key={benefit.id}>
                                <Grid item xs={5}>
                                    {drawImage(benefit.image)}
                                </Grid>

                                <Grid item xs={6} >
                                    <Typography
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            lineHeight: '16px',
                                            color: '#363636',
                                            marginTop: '13%'
                                        }}>
                                        {benefit.description}
                                    </Typography>
                                </Grid>
                            </Grid>)) : []
                }


            </Grid>

            <Grid item xs={12}>
                <Button sx={{
                    border: '1px solid #151F6D',
                    background: '#151F6D',
                    color: '#FFFFFF',
                    fontFamily: 'Raleway',
                    fontWeight: 700,
                    fontSize: '15px',
                    lineHeight: '20px',
                    width: '250px',
                    height: '45px',
                    borderRadius: '10px 10px 10px 10px',
                    marginTop: '3.5%'

                }}>
                    <Link href='/quoteVehicleComparative'>
                        <a>
                            COMPARAR PLANES
                        </a>
                    </Link>

                </Button>
            </Grid>

            <Grid item xs={12} height={56}
                sx={{
                    background: '#E5E6EF',
                    borderRadius: '10px 10px 10px 10px',
                    marginTop: '3%',
                    marginLeft: '3%',
                    marginRight: '3%'

                }}>
                <Typography
                    sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '13px',
                        lineHeight: '20px',
                        color: '#151F6D',
                        textAlign: 'justify',
                        padding: '1%'
                    }}>
                    *Cualquier vehículo cuyo valor comercial al momento de la
                    contratación sea mayor a  USD. 50,000,
                    estará obligado a contratar servicio de monitoreo (GPS) para
                    obtener cobertura por robo total.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Beneficios;