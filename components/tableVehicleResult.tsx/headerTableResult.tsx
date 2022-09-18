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
 function HeaderTableResult({ title,quoteSelected, setAnualPrice,
    setQuoteSelected, quoteResultIndex, setQuoteResulIndex, index, quoteResult }: Props)  {

    const [vehicularProduct, setVehicularProduct] = useState<VehicularProduct>();
    const [funding, setFunding] = useState<Funding>();
    const [installment, setInstallment] = useState<Installment>();
    const [installmentIndex,setInstallmentIndex] = useState<number>(0);
    const [opacity,setOpacity] = useState<string>('0.5');
    const [background,setBackground] = useState<string>('rgba(21, 31, 109, 0.11)');
    const [border,setBorder] = useState<string>('3px solid #C1C1C1');
    const [borderColor,setBorderColor] = useState<string>('#C1C1C1');
    

    async function changeQuoteSelected(){
        setQuoteSelected(quoteResult);
        setQuoteResulIndex(index);
    }
    useEffect(() => {
        if (index == quoteResultIndex) {
            setQuoteSelected(quoteResult);
            setAnualPrice(quoteResult?.quote);
            setOpacity('1');
            setBackground('#151F6D');
            setBorder('3px solid #0F206C');
            setBorderColor('#0F206C');
        } 
        if (quoteSelected && 'risk_factors' in quoteSelected?.product) {
            setVehicularProduct(quoteSelected.product as VehicularProduct)}
        // if(vehicularProduct !== undefined && vehicularProduct?.funding){
        //     setFunding(vehicularProduct.funding);
        //     var installmentSelected = funding?.installments?.find(installment => 
        //         installment?.installments > installmentIndex);
        //     setInstallment(installmentSelected);
        // }

        var installmentSelected = quoteResult?.product?.funding?.installments?.find(installment => 
            installment?.installments > installmentIndex);
        setInstallment(installmentSelected);
        
        
        
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
                    
                </div>);
        }
        return <div>Sin imagen</div>
    }
    return (
        <Grid item xs={4} >
            <Button 
            onClick={changeQuoteSelected}
            sx={{
                boxSizing: 'border-box',
                width: '378px',
                height: '59px',
                marginLeft: '-1px',
                padding: '0px',
                background: `${background}`,
                border: `1px solid ${borderColor}`,
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
                    border: `${border}`,
                    marginLeft: '0px',
                    opacity:`${opacity}`
                }}>
                <Grid container xs={12} sx={{ padding: '20px' }}>
                    <Grid item xs={5}>
                        {drawImage('')}
                    </Grid>

                    <Grid item xs={1}>
                        <Divider orientation={'vertical'} variant={"middle"}

                            light={true} />
                    </Grid>

                    {installment !== undefined ?
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
                    </Grid>:''}
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
                            borderRadius: '10px 10px 10px 10px',
                            

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