import { Box, Divider, Grid, Typography } from "@mui/material";
import "@fontsource/montserrat";
import Image from 'next/image';
const Header = () => {

    return(
        <div>
        <Box sx={{
            boxSizing: 'border-box',
            position:'absolute',
            width:'300px',
            height:'9%',
            left:'206px',
            top:'542px',
            background:'#151F6D',
            border: '1px solid #0F206C',
            borderRadius:'20px',
            fontFamily:'Montserrat',
            fontStyle:'normal',
            fontWeight:'700',
            fontSize:'17px',
            lineHeight:'115.7%',
            textAlign:'center',
            color:'#FFFFFF',
            paddingTop:'1%'
        }}>
            FULL: Protección total
        </Box>

        <Box sx={{
            boxSizing: 'border-box',
            position:'absolute',
            width:'300px',
            height:'25%',
            left:'206px',
            top:'598px',
            background:'#FFFFFF',
            border: '3px solid #0F206C',
            borderRadius:'0px',
            fontFamily:'Montserrat',
            fontStyle:'normal',
            fontWeight:'700',
            fontSize:'17px',
            lineHeight:'115.7%',
            textAlign:'center',
            color:'#0F206C',
            paddingTop:'1%',
            overflow:'visible'
        }}>
            <Grid container>
                <Grid item xs={3} sx={{overflow:'visible'}}>
                {/*<Image src={'/../public/logoPositiva.png'}
                        
                        width={100} height={45}
                        style={{
                            overflow:'visible',
                            marginLeft:'10px',
                            position:'relative',
                            marginTop: '1px',
                            
                        }}
                    />*/}
                    <h2>LOGO</h2>
                </Grid>
                <Grid item xs={3}>
                <Divider orientation={'vertical'} variant={"middle"} textAlign={'center'} sx={{marginLeft:'50%'}}
                    light={true} />
                    
                </Grid>
                <Grid item xs={6} flexDirection={'row'}>
                    <Typography variant="h6" sx={{fontSize:'16px'}}>
                        PAGO MENSUAL
                    </Typography>

                    <Typography variant="h6" sx={{fontSize:'16px'}}>
                        10 CUOTAS DE 
                    </Typography>

                    <Typography variant="h6" sx={{fontSize:'16px'}}>
                        US$80.65
                    </Typography>
                </Grid>
            </Grid>
           
            
        </Box>

        </div>
    )
}

export default Header;