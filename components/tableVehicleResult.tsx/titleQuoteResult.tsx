import { Grid, Typography } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "@fontsource/montserrat";
const TitleQuoteResult = () => {

    return(
        <Grid container sx={{border:'1px solid',textAlign:'start',
                }} columnSpacing={0} 
                xs={12}>
                    <Grid item 
                    sx={{marginRight:'1%',
                        
                    }}>
                    <Typography
                    sx={{
                        fontFamily:'Montserrat',
                        fontSize:'16px',
                        fontStyle:'normal',
                        fontWeight:400,
                        lineHeight:'45px',
                        letterSpacing:'-0.02em',
                        color:'#999999'
                    }}
                    > Cotizador Vehicular </Typography>
                    </Grid>

                    <Grid item sx={{lineHeight:'55px',}}>
                    <ArrowBackIosIcon/>
                    </Grid>

                    <Grid item >
                    <Typography
                    sx={{
                        fontFamily:'Montserrat',
                        fontSize:'16px',
                        fontStyle:'normal',
                        fontWeight:600,
                        lineHeight:'45px',
                        letterSpacing:'-0.02em',
                        color:'#0F206C'
                    }}> Resultados </Typography>  
                    </Grid>

                </Grid>
    )
}

export default TitleQuoteResult;