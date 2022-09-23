import { Box, Typography } from "@mui/material";
import Image from 'next/image'
import "@fontsource/montserrat";

const OtherQuoters = () => {

    return (
        <Box display={'flex'}>
            <Box mt={5} ml={10}>
                <Image src={'/compara-aseguradoras-home.png'} width={350} height={300} />
            </Box>

            <Box display={'flex'} ml={5} mt={5}>
                <Box width={184} height={158}
                    sx={{
                        background: 'white',
                        borderRadius:'20px',
                        boxShadow:'0px 4px 40px rgba(21,31,109,0.2)'
                    }}>
                        <Box ml={7} mt={-3.5} sx={{borderRadius:'20px'}}>
                        <Image src={'/vehicle.png'} width={70} height={70} 
                        style={{borderRadius:'120px' }} />
                        </Box>
                        

                        <Typography
                        sx={{
                            padding:'15px',
                            textAlign:'center',
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:700,
                            fontSize:'18px',
                            lineHeight:'115.7%',
                            alignItems:'center',
                            color:'#151F6D'
                            
                        }}>Seguro vehicular</Typography>

                        <Typography
                         sx={{
                            textAlign:'center',
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:600,
                            fontSize:'16px',
                            lineHeight:'115.7%',
                            alignItems:'center',
                            color:'#2EA082',
                         }}>
                             Cotiza aquí
                         </Typography>
                </Box>

                <Box width={184} height={158} ml={5} mt={5}
                    sx={{
                        background: '#151F6D',
                        borderRadius:'20px',
                        boxShadow:'0px 4px 40px rgba(21,31,109,0.2)'
                    }}>
                        <Box ml={7} mt={-3.5} sx={{borderRadius:'20px'}}>
                            <Image src={'/home-green.png'} width={70} height={70} 
                            style={{ borderRadius:'120px'}} />
                        </Box>
                         
                         <Typography
                         sx={{
                            padding:'17px',
                            textAlign:'center',
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:700,
                            fontSize:'18px',
                            lineHeight:'115.7%',
                            alignItems:'center',
                            color:'#FFFFFF',
                         }}>Seguro de hogar</Typography>

                        <Typography
                         sx={{
                            textAlign:'center',
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:600,
                            fontSize:'16px',
                            lineHeight:'115.7%',
                            alignItems:'center',
                            color:'#2EA082',
                         }}>
                             Cotiza aquí
                         </Typography>

                </Box>
 
                <Box width={184} height={158} ml={5} mt={10}
                    sx={{
                        background: 'white',
                        borderRadius:'20px',
                        boxShadow:'0px 4px 40px rgba(21,31,109,0.2)'
                    }}> 
                        <Box ml={7} mt={-3.5} sx={{borderRadius:'20px'}}>
                            <Image src={'/healthIconQuoteHeader.png'}
                             width={70} height={70} style={{ borderRadius:'120px'}} />
                        </Box>
                         
                         <Typography
                         sx={{
                            padding:'20px',
                            textAlign:'center',
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:700,
                            fontSize:'18px',
                            lineHeight:'115.7%',
                            alignItems:'center',
                            color:'#151F6D',
                         }}>Seguro salud</Typography>

                         <Typography
                         sx={{
                            textAlign:'center',
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:600,
                            fontSize:'16px',
                            lineHeight:'115.7%',
                            alignItems:'center',
                            color:'#2EA082',
                         }}>
                             Cotiza aquí
                         </Typography>
                </Box>


            </Box>
        </Box>
    )
}

export default OtherQuoters;