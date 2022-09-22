import { Button, Grid } from "@mui/material";
import "@fontsource/montserrat";
import Image from 'next/image';
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { HomeQuoteRequest } from "../../interfaces";
import { BuildersMethods } from "../../utils/BuildersMethods";
import { saveHomeQuote } from "../../pages/api/data";


interface Props {
   
    setActiveStep: Dispatch<SetStateAction<number>>
    activeStep: number
    quoterData: HomeQuoteRequest
}
const ButtonNextBack = ({setActiveStep, activeStep, quoterData }: Props) => {


    const router = useRouter();

    async function nextStep() {
        
        await saveHomeQuote(
        BuildersMethods.buildHomeQuote(
            null,
            quoterData?.type_of_client,
            quoterData?.want_to_quote,
            quoterData?.way_to_secure,
            quoterData?.type_of_housing,
            quoterData?.currency,
            quoterData?.value_of_house,
            quoterData?.content_value,
            quoterData?.province,
            quoterData?.district,
            quoterData?.name,
            quoterData?.phone,
            quoterData?.email,
            null,
            null
        ));

        router.push('/mensaje-enviado');
        
        
       
    }

    async function backStep(){
        setActiveStep(activeStep - 1);
    }

    return (
        <Grid container>
            <Grid item xs={12} flexDirection='row' display={'flex'}>
                <Button variant="contained"
                    onClick={backStep}
                    sx={{
                        marginLeft: '8.7%',
                        marginTop: '3%',
                        width: '50%',
                        background: '#151F6D',
                        color: 'white',
                        height: '53px',
                        fontFamily: "Montserrat",
                        fontWeight: 'bold',
                        borderRadius: '10px 10px 10px 10px'
                    }}
                >
                    <Image src={'/arrowButtonBack.PNG'}
                        style={{ marginRight: '1px', overflow: 'visible' }}
                        width={8} height={13} />
                    ATRAS

                </Button>

                <Button variant="contained" sx={{
                    marginLeft: '3.7%',
                    marginTop: '3%',
                    width: '50%',
                    background: '#151F6D',
                    color: 'white',
                    height: '53px',
                    fontFamily: "Montserrat",
                    fontWeight: 'bold',
                    marginRight: '10%',
                    borderRadius: '10px 10px 10px 10px',
                    overflow: 'visible'
                }}
                    onClick={nextStep}
                >

                    SIGUIENTE
                    <Image src={'/arrowButton.PNG'}
                        style={{ marginLeft: '0%', overflow: 'visible' }}
                        width={8} height={13} />



                </Button>
            </Grid>
        </Grid>
    );
}

export default ButtonNextBack;