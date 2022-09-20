import { Grid, Typography } from "@mui/material"
import "@fontsource/montserrat";
import { QuoteResult } from "../../interfaces";
import Image from 'next/image';
interface Props {
    quoteSelected: QuoteResult
}
const Financiamiento = ({ quoteSelected }: Props) => {

    return (
        <Grid container xs={12} height={150} minHeight={150} maxHeight={150}>

            <Grid item xs={12}>
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
                    FINANCIAMIENTO
                </Typography>
            </Grid>

            <Grid container xs={12} >
                {
                    Array.isArray(quoteSelected?.product?.funding?.installments)
                        ? quoteSelected?.product?.funding?.installments.map((installment) => (
                            <Grid container xs={12} paddingLeft={'2%'} key={installment.id}>
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
                                        {installment.name} de {quoteSelected?.product?.currency?.name}
                                        {installment.minimum_amount_installment}
                                    </Typography>
                                </Grid>
                            </Grid>

                        )) : []
                }
            </Grid>

        </Grid>
    )
}

export default Financiamiento;