import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import "@fontsource/montserrat";
import { Phone } from "@mui/icons-material";
import { Funding, Installment, QuoteResult, VehicularProduct } from "../../interfaces";
import { Dispatch, SetStateAction, useEffect, useState } from "react";


interface Props {
    title: string
    quoteSelected: QuoteResult
    setQuoteSelected: Dispatch<SetStateAction<QuoteResult>>
    quoteResultIndex: number
    setQuoteResulIndex: Dispatch<SetStateAction<number>>
    index: number
    quoteResult: QuoteResult
    setAnualPrice: Dispatch<SetStateAction<number>>
}
const HeaderTableResult = ({ title,quoteSelected, setAnualPrice,
    setQuoteSelected, quoteResultIndex, setQuoteResulIndex, index, quoteResult }: Props) => {

    const [vehicularProduct, setVehicularProduct] = useState<VehicularProduct>();
    const [funding, setFunding] = useState<Funding>();
    const [installment, setInstallment] = useState<Installment>();
    const [installmentIndex,setInstallmentIndex] = useState<number>(0);
    
    useEffect(() => {
        if (index == quoteResultIndex) {
            setQuoteSelected(quoteResult);
            setAnualPrice(quoteResult?.quote);
        }
        if ('risk_factors' in quoteSelected.product) {
            setVehicularProduct(quoteSelected.product as VehicularProduct)}
        if(vehicularProduct !== undefined && vehicularProduct?.funding){
            setFunding(vehicularProduct.funding);
            var installmentSelected = funding?.installments?.find(installment => 
                installment?.installments > installmentIndex);
            setInstallment(installmentSelected);
        }
        
        
        
    }, [])

    function drawImage(trade_mark: any): React.ReactNode {
        if (trade_mark) {
            return (
                <div style={{ height: '100px', width: '150px' }}>
                    <img style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        borderColor: '#1976d2',
                        borderStyle: 'solid',
                        borderWidth: 'thin'
                    }} src={trade_mark} alt='Img' />
                    {'Logo'}
                </div>);
        }
        return <div>Sin imagen</div>
    }
    return (
        <Grid item xs={4}>
            <Button sx={{
                boxSizing: 'border-box',
                width: '378px',
                height: '59px',
                marginLeft: '-1px',
                padding: '0px',
                background: '#151F6D',
                border: '1px solid #0F206C',
                borderRadius: '20px 20px 0px 0px',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '17px',
                lineHeight: '115.7%',
                textAlign: 'center',
                color: '#FFFFFF',
            }}>
                {title}
            </Button>

            <Box width={'378px'} height={213}
                sx={{
                    border: '3px solid #0F206C',
                    marginLeft: '0px',
                }}>
                <Grid container xs={12} sx={{ padding: '20px' }}>
                    <Grid item xs={5}>
                        {drawImage('')}
                    </Grid>

                    <Grid item xs={1}>
                        <Divider orientation={'vertical'} variant={"middle"}

                            light={true} />
                    </Grid>

                    <Grid item xs={5} flexDirection={'row'} sx={{ marginLeft: '15px' }}>
                        <Typography variant="h6" 
                        sx={{ 
                            fontSize: '16px',
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:600,
                            lineHeight:'118.7%',
                            color:'#151F6D' }}>
                            PAGO MENSUAL
                        </Typography>

                        <Typography variant="h6"
                        sx={{
                            fontSize: '16px',
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:600,
                            lineHeight:'118.7%',
                            color:'#00A887'}}>
                            {installment?.name}  de
                        </Typography>

                        <Typography variant="h6" 
                        sx={{ 
                            fontSize: '27px',
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:600,
                            lineHeight:'85%',
                            color:'#151F6D'}}>
                            US${installment?.minimum_amount_installment}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12}>
                        <Button startIcon={<Phone />} sx={{
                            border: '2px solid #2EA082',
                            background: '#00A887',
                            color: '#FFFFFF',
                            fontFamily: 'Montserrat',
                            fontWeight: 500,
                            fontSize: '13px',
                            lineHeight: '15.04px',
                            width: '250px',
                            height: '45px',
                            borderRadius: '10px 10px 10px 10px'

                        }}>
                            CONTRATAR
                        </Button>
                    </Grid>
                </Grid>

            </Box>


        </Grid>
    )
}

export default HeaderTableResult;