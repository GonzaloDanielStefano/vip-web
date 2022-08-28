import { Button, Grid } from "@mui/material";
import "@fontsource/montserrat";
import Image from 'next/image';
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";
import { VehicularQuoterRequest } from "../../interfaces";
import QuoteVehicleResult from "../../pages/quoteVehicleResult";
import { cotizarVehicle } from "../../pages/api/data";

interface Props{
    buttonName: string
    setActiveStep: Dispatch<SetStateAction<number>>
    activeStep:number
    quoterData: VehicularQuoterRequest 
}
const ButtonNextBack = ({buttonName,setActiveStep,activeStep,quoterData}:Props) => {

    
    const router = useRouter();
    async function nextStep(){
        
        if(buttonName == 'COTIZAR'){

            localStorage.setItem("quoterData",JSON.stringify(quoterData));
            const quoteVehicle = await cotizarVehicle(quoterData);
            localStorage.setItem("quoteResult",JSON.stringify(quoteVehicle));
            //return router.push({pathname:'/quoteVehicleResult'});
        
            
        }
        setActiveStep(activeStep + 1);}
        
    return(
        <Grid container>
            <Grid item xs={12} flexDirection='row' display={'flex'}>
                <Button variant="contained"  sx={{
                        marginLeft: '8.7%',
                        marginTop: '3%',
                        width:'50%',
                        background: '#151F6D',
                        color: 'white',
                        height: '53px',
                        fontFamily:"Montserrat",
                        fontWeight: 'bold',
                        borderRadius: '10px 10px 10px 10px'
                          }}
                >
                    <Image src={'/../public/arrowButtonBack.PNG'}
                        style={{marginRight:'1px',overflow:'visible'}}
                        width={8} height={13}/>
                            ATRAS
                            
                </Button>

                <Button variant="contained"  sx={{
                    marginLeft: '3.7%',
                    marginTop: '3%',
                    width:'50%',
                    background: '#151F6D',
                    color: 'white',
                    height: '53px',
                    fontFamily:"Montserrat",
                    fontWeight: 'bold',
                    marginRight:'10%',
                    borderRadius: '10px 10px 10px 10px',
                    overflow:'visible'
                    }}
                    onClick={nextStep}
                >
                    
                        {buttonName}
                        <Image src={'/../public/arrowButton.PNG'}
                        style={{marginLeft:'0%',overflow:'visible'}}
                        width={8} height={13}/>

                    
                            
                </Button>
            </Grid>
        </Grid>
    );
} 

export default ButtonNextBack;