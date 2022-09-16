import { Grid, Typography } from "@mui/material";
import "@fontsource/montserrat";
import { QuoteResult, RiskFactor, VehicularProduct } from "../../interfaces";
import { useEffect, useState } from "react";
import Image from 'next/image';

interface Props{
    quoteSelected: QuoteResult
}
const Coberturas = ({quoteSelected}:Props) => {

    const [vehicularProduct,setVehicularProduct] = useState<VehicularProduct>();

    
    

    useEffect(() => {
        if ('risk_factors' in quoteSelected.product) {
            setVehicularProduct(quoteSelected.product as VehicularProduct)}
      
    }, [])
    
    return (
        <Grid container xs={5} height={300} minHeight={300} maxHeight={300}>

            <Grid item xs={12} height={20}>
            <Typography
                sx={{
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '15px',
                    lineHeight: '115.7%',
                    textAlign: 'start',
                    marginLeft: '5%',
                    marginTop: '5%',
                    color: '#0F206C'
                }}>
                COBERTURAS / DEDUCIBLES
            </Typography>
            </Grid>

            
            <Grid container xs={12} marginTop={-12}>
                {
                    Array.isArray(vehicularProduct?.risk_factors)
                        ? vehicularProduct?.risk_factors.map((risk_factor) => (

                            Array.isArray(risk_factor?.coverage?.coverage_types)
                            ? risk_factor?.coverage?.coverage_types.map((coverage) => (
                            
                            <Grid container xs={12} paddingLeft={'2%'}>
                            <Grid item xs={1}>
                                <Image src={'/../public/check.png'} width={20} height={20} />
                            </Grid>
                                <Grid item xs={6}>
                                    <Typography
                                    sx={{
                                        textAlign:'start',
                                        fontFamily:'Montserrat',
                                        fontSize:'13px',
                                        lineHeight:'17px',
                                        fontStyle:'normal',
                                        fontWeight:400,
                                        color:'#000000'
                                    }}>
                                        {coverage.coverage_category?.name}
                                    </Typography>
                                </Grid>
                            </Grid>  )) : []

                        )) : []
                }
            </Grid>
            

        </Grid>
    )
}

export default Coberturas;