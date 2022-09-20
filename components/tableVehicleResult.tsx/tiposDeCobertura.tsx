import { Box, Button, Grid } from "@mui/material";
import "@fontsource/montserrat";
import { QuoteResult } from "../../interfaces";
import { SetStateAction, useState,Dispatch } from "react";

interface Props {
    quoteResult: QuoteResult[]
    setQuoterResult: Dispatch<SetStateAction<QuoteResult[]>>
}
const TiposDeCobertura = ({ quoteResult, setQuoterResult }: Props) => {

    const [buttonBackground, setButtonBackground] = useState<string>('#FFFFFF');

    async function drawCategory(name:any) {
        <Grid item xs={2.4}>
            <Button sx={{
                height: '54px',
                width: '133.87px',
                borderRadius: '10px 10px 10px 10px',
                lineHeight: ' 115.7%',
                fontyStyle: 'normal',
                color: '#151F6D',
                border: '2px solid #2EA082',
                fontFamily: 'Montserrat',
                fontWeight: 600,
                fontSize: '13px',
            }}>
                {name}
            </Button>
        </Grid>
    }

    return (
        <Box width={'100%'} height={54} sx={{ padding: '7px' }}>
            <Grid container>


                <Grid item xs={2.4}>
                    <Button sx={{
                        height: '54px',
                        width: '133.87px',
                        borderRadius: '10px 10px 10px 10px',
                        lineHeight: ' 115.7%',
                        background: '#151F6D',
                        fontyStyle: 'normal',
                        color: '#FFFFFF',
                        border: '2px solid #2EA082',
                        fontFamily: 'Montserrat',
                        fontWeight: 600,
                        fontSize: '13px',
                    }}>
                        TODOS
                    </Button>
                </Grid>
                {
                    Array.isArray(quoteResult) ? quoteResult.map((result,index) => (
                        <Grid item xs={2.4} key={index}>
                        <Button sx={{
                            height: '54px',
                            width: '133.87px',
                            borderRadius: '10px 10px 10px 10px',
                            lineHeight: ' 115.7%',
                            fontyStyle: 'normal',
                            color: '#151F6D',
                            border: '2px solid #2EA082',
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            fontSize: '13px',
                        }}>
                            {result?.product?.category?.name}
                        </Button>
                    </Grid>
                    )) : []
                }


            </Grid>
        </Box>
    )
}

export default TiposDeCobertura;