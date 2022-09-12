import { Button, Checkbox, FormControl, Grid, OutlinedInput, TextField, Typography } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FormWorkWithUs = () =>{

    return(
        <Grid container height={520} xs={5.7} marginTop={7}
        sx={{
            background:'#FFFFFF',
            position:'left',
            padding:'25px',
            boxShadow:'0px 9px 40px rgba(21,31,109,0.17)',
            borderRadius:'20px 20px 20px 20px'
        }}>

            <Grid item xs={6} maxHeight={55}>
                <FormControl sx={{height:'55px'}} fullWidth>
                    <OutlinedInput  
                    
                    placeholder="Nombres*" />
                </FormControl>
            </Grid>

            <Grid item xs={6} maxHeight={55} paddingLeft={1}>
                <FormControl sx={{height:'55px'}} fullWidth>
                    <OutlinedInput  
                    
                    placeholder="Apellidos*" />
                </FormControl>
            </Grid>

            <Grid item xs={6} maxHeight={55} paddingLeft={0}>
                <FormControl sx={{height:'55px'}} fullWidth>
                    <OutlinedInput  placeholder="Télefono*" />
                </FormControl>
            </Grid>

            <Grid item xs={6} maxHeight={55} paddingLeft={1}>
                <FormControl sx={{height:'55px'}} fullWidth>
                    <OutlinedInput  placeholder="E-mail*" />
                </FormControl>
            </Grid>

            <Grid item xs={12} maxHeight={55} marginTop={0}>
                <FormControl fullWidth>
                    <OutlinedInput  placeholder="Área de interés" />
                </FormControl>
            </Grid>

            <Grid item xs={12} maxHeight={55} marginTop={0}>
                <FormControl fullWidth>
                    <OutlinedInput
                    placeholder="Adjuntar CV*"
                    endAdornment={ <CloudUploadIcon sx={{color: '#2EA082'}}/> }/>
                </FormControl>
            </Grid>

            <Grid item xs={12} maxHeight={55} marginTop={0}>
                <FormControl fullWidth>
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

                <Grid item xs={1.3} paddingTop={1}>
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

export default FormWorkWithUs;