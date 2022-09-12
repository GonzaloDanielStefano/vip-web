import { Button, Grid, Typography } from "@mui/material";
import Image from 'next/image';
const BoxMap = () =>{

    return(
        <Grid container width={461} height={180}
        sx={{
            position:'absolute',
            marginLeft:'11%',
            marginTop:'850px',
            background:'#FFFFFF',
            borderRadius:'19px 19px 19px 19px',
            boxShadow:'0px 19px 52px rgba(0,57,72,0.15)',
            padding:'25px'
        }}>

                <Grid item xs={12}>
                    <Typography
                    sx={{
                        fontFamily:'Montserrat',
                        fontWeight:400,
                        fontStyle:'normal',
                        color:'#2EA082',
                        fontSize:'12px',
                        lineHeight:'97.69%',
                    }}>
                        UBICACIÓN
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography
                    sx={{
                        fontFamily:'Montserrat',
                        fontWeight:600,
                        fontStyle:'normal',
                        color:'#151F6D',
                        fontSize:'21px',
                        lineHeight:'104.7%',
                    }}>
                        Tambo de Oro 154 Surco Lima
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Button
                    startIcon={<Image src='/../public/waze.png' width={20} height={18.75}/>}
                    sx={{
                        height:'50px',
                        width:'195px',
                        borderRadius:'10px 10px 10px 10px',
                        lineHeight:' 16px',
                        background:'#FFFFFF',
                        fontyStyle:'normal',
                        color:'#151F6D',
                        border: '1px solid #00A887',
                        fontFamily:'Montserrat',
                        fontWeight:700,
                        fontSize:'13px',
                    }}>
                        IR CON WAZE
                    </Button>
                </Grid>

                <Grid item xs={6}>
                    <Button
                    startIcon={<Image src='/../public/maps.png' width={20} height={18.75}/>}
                    sx={{
                        height:'50px',
                        width:'195px',
                        borderRadius:'10px 10px 10px 10px',
                        lineHeight:' 16px',
                        background:'#151F6D',
                        fontyStyle:'normal',
                        color:'#FFFFFF',
                        border: '1px solid #00A887',
                        fontFamily:'Montserrat',
                        fontWeight:700,
                        fontSize:'13px',
                    }}>
                        IR CON MAPS
                    </Button>
                </Grid>

            </Grid>
    )
}

export default BoxMap;