import { Box, Divider, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image'
import "@fontsource/montserrat";

const HomeAnalytics = () =>{
    return(
        <>
        <Box alignItems={'center'} width='100%' >
            <Typography
            sx={{
                textAlign:'center',
                fontFamily:'Montserrat',
                fontStyle:'normal',
                fontWeight:400,
                fontSize:'26px',
                lineHeight:'32px',
                color:'#151F6D' 
                }}>
                Nuestra experiencia
            </Typography>

            <Typography
            sx={{
                textAlign:'center',
                fontFamily:'Montserrat',
                fontStyle:'normal',
                fontWeight:700,
                fontSize:'26px',
                lineHeight:'32px',
                color:'#151F6D' 
            }}>
                como corredores de seguro
            </Typography>
        </Box>
        
        <Box display={'flex'} sx={{ml:8,display: { xs: 'block', sm: 'block', md: 'block', lg: 'flex' }}}>
        
        
            <Box display={'flex'} ml={10} mt={5}>
                <Image src={'/costNosotros.png'} width={70} height={70} />
                <AddIcon sx={{color:'#00A887',mt:1.5}}/>
                <Typography
                sx={{
                    fontFamily:'Montserrat',
                    fontStyle:'normal',
                    fontWeight:600,
                    fontSize:'45px',
                    letterSpacing:'-0.02em',
                    lineHeight:'50px',
                    color:'#151F6D' 
                }}> 10 000</Typography>
                
                <Box position={'absolute'} ml={10} mt={6}>
                <Typography>Clientes asegurados</Typography>
                </Box>
                
            </Box>

            <Divider orientation="vertical" flexItem sx={{ml:7,mt:3}} />
            
            <Box display={'flex'} ml={10} mt={5}>
                <Image src={'/reportingNosotros.png'} width={70} height={70} />
                <AddIcon sx={{color:'#00A887',mt:1.5}}/>
                <Typography
                sx={{
                    fontFamily:'Montserrat',
                    fontStyle:'normal',
                    fontWeight:600,
                    fontSize:'45px',
                    letterSpacing:'-0.02em',
                    lineHeight:'50px',
                    color:'#151F6D' 
                }}> 20</Typography>
                
                <Box position={'absolute'} ml={10} mt={6}>
                <Typography>Años en el mercado</Typography>
                </Box>
                
            </Box>
            <Divider orientation="vertical" flexItem sx={{ml:15,mt:3}} />

            <Box display={'flex'} ml={10} mt={5}>
                <Image src={'/paperNosotros.png'} width={70} height={70} />
                <AddIcon sx={{color:'#00A887',mt:1.5}}/>
                <Typography
                sx={{
                    fontFamily:'Montserrat',
                    fontStyle:'normal',
                    fontWeight:600,
                    fontSize:'45px',
                    letterSpacing:'-0.02em',
                    lineHeight:'50px',
                    color:'#151F6D' 
                }}> 80 000</Typography>
                
                <Box position={'absolute'} ml={10} mt={6}>
                <Typography>Cotizaciones</Typography>
                </Box>
                
            </Box>
       
        </Box>

        </>
    )
}
export default HomeAnalytics;