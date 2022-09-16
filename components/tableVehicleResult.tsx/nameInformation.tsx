import { Grid, Typography } from "@mui/material"
import "@fontsource/montserrat";
import "@fontsource/raleway";

interface Props{
    name: string
}
const NameInformation = ({name}:Props) => {

    return(

        <Grid container  xs={12} alignItems='center'>
                    <Grid item xs={4}>
                        <Typography 
                        sx={{
                            textAlign:'end',
                            fontFamily:'Raleway',
                            fontStyle:'normal',
                            fontWeight:700,
                            fontSize:'23px',
                            lineHeight:'27px',
                            color:'#151F6D',
                            justifyContent:'center'
                            }}>
                            ¡Hola {name}!
                        </Typography>
                    </Grid>

                    <Grid item xs={8}>
                        <Typography sx={{
                             textAlign:'start',
                             fontFamily:'Raleway',
                             fontStyle:'normal',
                             fontWeight:500,
                             fontSize:'23px',
                             lineHeight:'27px',
                             color:'#414141'
                        }}>
                            Enviamos a tu correo detalle de las opciones comparadas
                        </Typography> 
                    </Grid> 
                </Grid>
    )
}

export default NameInformation;