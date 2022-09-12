import "@fontsource/montserrat";
import { MultilineChart } from "@mui/icons-material";
import { Button, Checkbox, FormControl, Grid, Input, OutlinedInput, TextareaAutosize, TextField, Typography } from "@mui/material";

const FormContact = () =>{

    return(
        <Grid container width={500} height={457}
        sx={{
            background:'#FFFFFF',
            position:'left',
            padding:'25px'
        }}>
            <Grid item xs={12} maxHeight={40}>
                <Typography
                sx={{
                    fontFamily:'Montserrat',
                    fontWeight:400,
                    fontStyle:'normal',
                    color:'#000000',
                    fontSize:'16px',
                    lineHeight:'20px',
                }}>
                    Llena el siguiente formulario y un asesor se pondrá en contacto contigo:
                </Typography>
            </Grid>

            <Grid item xs={6} maxHeight={55}>
                <FormControl sx={{width:'210px',height:'55px'}}>
                    <OutlinedInput  placeholder="Nombres*" />
                </FormControl>
            </Grid>

            <Grid item xs={6} maxHeight={55}>
                <FormControl sx={{width:'210px',height:'55px'}}>
                    <OutlinedInput  placeholder="Apellidos*" />
                </FormControl>
            </Grid>

            <Grid item xs={6} maxHeight={55} marginTop={0} >
                <FormControl sx={{width:'210px',height:'55px'}}>
                    <OutlinedInput  placeholder="Télefono*" />
                </FormControl>
            </Grid>

            <Grid item xs={6} maxHeight={55} marginTop={0}>
                <FormControl sx={{width:'210px',height:'55px'}}>
                    <OutlinedInput  placeholder="E-mail*" />
                </FormControl>
            </Grid>

            <Grid item xs={12} maxHeight={55} marginTop={0}>
                <FormControl sx={{width:'434px', maxWidth:'434px'}}>
                    <TextField
                    placeholder="Mensaje"
                    multiline
                    rows={2}
                    
                    
                    />
                </FormControl>
                
            </Grid>

            <Grid container xs={12} marginTop={3}>
                <Grid item xs={1}>
                    <Checkbox  />
                </Grid>

                <Grid item xs={1.6} paddingTop={1}>
                    <Typography 
                    sx={{
                        fontFamily:'Montserrat',
                        fontWeight:500,
                        fontStyle:'normal',
                        color:'#606060',
                        fontSize:'12px',
                        lineHeight:'25px',
                    }}>
                        Acepto la 
                        
                    </Typography>
                    
                </Grid>

                <Grid item xs={6} paddingTop={1}>
                    <Typography
                    sx={{
                        fontFamily:'Montserrat',
                        fontWeight:500,
                        fontStyle:'normal',
                        color:'#2EA082',
                        fontSize:'12px',
                        lineHeight:'25px',
                        textDecorationLine:'underline'
                    }}>
                        claúsula de Protección de datos
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={6}>
                <Button
                sx={{
                    height:'50px',
                    width:'153.87px',
                    borderRadius:'10px 10px 10px 10px',
                    lineHeight:' 20px',
                    background:'#2EA082',
                    fontyStyle:'normal',
                    color:'#FFFFFF',
                    
                    fontFamily:'Montserrat',
                    fontWeight:700,
                    fontSize:'14px',
                }}>
                    ENVIAR
                </Button>
            </Grid>

            
            
        </Grid>
    )
}

export default FormContact;