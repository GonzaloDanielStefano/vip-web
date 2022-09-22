import { Box, Button, Typography } from "@mui/material";
import { HomeLayout } from "../components/layouts"
import "@fontsource/montserrat";
import Image from 'next/image';
import { useRouter } from "next/router";

const MensajeEnviado = () =>{

    async function redirectToHome(){
        router.push('/');
    }
    const router = useRouter();
    return(
        <HomeLayout title={""} pageDescription={""} >

            <Box display='flex'>
            
                <Box sx={{ml:'200px',mt:'100px',width:'30%'}}>
                    <Image src={'/mensaje-enviado.PNG'} width={246} height={246} />
                </Box>

                <Box display={'block'} sx={{mr:'100px',mt:'100px'}}>
                    <Typography variant="h2"
                    sx={{
                        fontFamily:'Montserrat',
                        fontStyle:'normal',
                        fontWeight:400,
                        fontSize:'40px',
                        lineHeight:'50px',
                        color:'#151F6D',
                        display:'flex',
                        alignItems:'center'
                    }}>
                        Cotización Enviada
                    </Typography>

                    <Typography variant="h2"
                    sx={{
                        fontFamily:'Montserrat',
                        fontStyle:'normal',
                        fontWeight:400,
                        fontSize:'15px',
                        lineHeight:'26px',
                        color:'#000000',
                        mt:'5%'
                        
                    }}>
                        Gracias por escribirnos un asesor se pondra en contacto contigo 
                        lo mas pronto posible para resolver tus duda
                    </Typography>

                    <Button
                    onClick={redirectToHome}
                    sx={{
                        width:'165px',
                        height:'42px',
                        background:'#151F6D',
                        borderRadius:'10px',
                        boxShadow:'0px 11px 20px rgba(21,31,109,0.22)',
                        mt:'5%',
                        alignItems:'center',
                        textAlign:'center',
                        letterSpacing:'0.05em',
                        textTransform:'uppercase',
                        color:'#FFFFFF',
                        fontFamily:'Montserrat',
                        fontStyle:'normal',
                        fontWeight:700,
                        fontSize:'14px',
                        lineHeight:'97.69%'
                    }}>
                        IR AL HOME
                    </Button>
                </Box>

            </Box>
        </HomeLayout>
    )
}

export default MensajeEnviado;