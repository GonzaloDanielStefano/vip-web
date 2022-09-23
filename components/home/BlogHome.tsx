import { Box, Button, Typography } from "@mui/material"
import Image from 'next/image'
import "@fontsource/montserrat";

const BlogHome = () =>{

    return(
        <Box display={'flex'}
        sx={{
            position:'absolute',
            background:'#F8F8FA',
            mixBlendMode:'normal',
            borderRadius:'0px 20px 20px 0px',
            width:'89%',
            ml:'5%',
            mr:'5%',
            mt:'5%',
            height:'430px',
           
        }}>
        
        <Box width={'210%'} height={425}
        sx={{display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }}}>
            <Image src={'/blog-home-1.png'} width={592} height={425} />
        </Box>
        
        <Box sx={{ml:3.5,mr:1,mt:3}}>

        
        <Typography display={'flex'}
        sx={{
            fontFamily:'Montserrat',
            fontStyle:'normal',
            fontWeight:500,
            fontSize:'20px',
            letterSpacing:'0.05em',
            textTransform:'uppercase',
            color:'#151F6D' 
        }}>
            Seguros Vip
        </Typography>

        <Typography
        sx={{
            fontFamily:'Montserrat',
            fontStyle:'normal',
            fontWeight:700,
            fontSize:'40px',
            letterSpacing:'-0.02em',
            color:'#151F6D' 
        }}>
            Somos tu corredora
            de asesoría sin costo.
        </Typography>

        <Typography
        sx={{
            fontFamily:'Montserrat',
            fontStyle:'normal',
            fontWeight:400,
            fontSize:'17px',
            lineHeight:'30px',
            color:'#010101' 
        }}>
            Corredores de Seguros VIP nace en el 2003 de la experiencia de mas de 40 años en el mercado 
            asegurador de  Elizabeth Querol, quien llegó a ocupar cargos gerenciales en las principales 
            compañías aseguradoras. Desde 1994 se dedicó al asesoramiento y corretaje de seguros.
        </Typography>

        <Button
        sx={{
            mt:5,
            background:'#2EA082',
            borderRadius:'10px',
            color:'white',
            fontFamily:'Montserrat',
            fontStyle:'normal',
            fontWeight:700,
            fontSize:'14px',
            lineHeight:'20px',
            letterSpacing:'0.01em'

        }}>
            CONOCE MÁS
        </Button>

        </Box>

        </Box>
    )
}

export default BlogHome;