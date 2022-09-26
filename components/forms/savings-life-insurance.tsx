import { Box, Button, FormControl, InputLabel, OutlinedInput, Typography } from "@mui/material";

const SavingsLifeInsurance = () =>{

    return(
        <Box component={'form'}
        sx={{
            boxSizing:'border-box',
            background:'#FFFFFF',
            border: '1px solid #FFFFFF',
            borderRadius:'20px',
            boxShadow:'0px 6px 40px rgba(21,31,109,0.12)',
            width:'63%',
           
            ml:'20%',
            mt:'5%',
            padding:'25px'
        }}>
            <Typography
            sx={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '27px',
                lineHeight: '33px',
                color: '#151F6D',
            }}>Te llamamos</Typography>
            <Typography
            sx={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '20px',
                color: '#484848',
            }}>Llena el siguiente formulario y un asesor se pondrá en contacto contigo:</Typography>
            <Box display={'flex'}>
                <FormControl sx={{mt:'10px'}} >
                    <InputLabel htmlFor="component-outlined"
                    sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '15px',
                        lineHeight: '150%',
                        color: '#353535',
                    }}>Nombre</InputLabel>
                    <OutlinedInput sx={{borderRadius:'10px'}}/>
                </FormControl>

                <FormControl sx={{paddingLeft:'15px',mt:'10px'}}>
                    <InputLabel htmlFor="component-outlined"
                     sx={{
                         paddingLeft:'15px',
                         fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '15px',
                        lineHeight: '150%',
                        color: '#353535',}}>DNI / CE</InputLabel>
                    <OutlinedInput sx={{borderRadius:'10px'}}/>
                </FormControl>

                <FormControl sx={{paddingLeft:'15px',mt:'10px'}}>
                    <InputLabel htmlFor="component-outlined" 
                     sx={{paddingLeft:'15px'}}>Fecha de nacimiento</InputLabel>
                    <OutlinedInput />
                </FormControl>
            </Box>

            <Box display={'flex'}>
                <FormControl sx={{mt:'10px'}}>
                    <InputLabel htmlFor="component-outlined">Está buscando</InputLabel>
                    <OutlinedInput />
                </FormControl>

                <FormControl sx={{paddingLeft:'15px',mt:'10px'}}>
                    <InputLabel htmlFor="component-outlined"  
                    sx={{paddingLeft:'15px'}}>Por cuanto tiempo</InputLabel>
                    <OutlinedInput />
                </FormControl>

                <FormControl sx={{paddingLeft:'15px',mt:'10px'}}>
                    <InputLabel htmlFor="component-outlined"
                     sx={{paddingLeft:'15px'}}>Cuanto le gustaría invertir mensualmente</InputLabel>
                    <OutlinedInput />
                </FormControl>
            </Box>

            <Box display={'flex'}>
                <FormControl sx={{mt:'10px'}}>
                    <InputLabel htmlFor="component-outlined" >Teléfono </InputLabel>
                    <OutlinedInput />
                </FormControl>

                <FormControl sx={{paddingLeft:'15px',mt:'10px'}}>
                    <InputLabel htmlFor="component-outlined" sx={{paddingLeft:'15px'}}>Correo</InputLabel>
                    <OutlinedInput />
                </FormControl>

                
            </Box>

            <Box>
                <FormControl sx={{mt:'10px',width:'57%'}}>
                    <InputLabel htmlFor="component-outlined">Mensaje</InputLabel>
                    <OutlinedInput rows={3} multiline={true}/>
                </FormControl>

                <Button 
                sx={{
                    mt:'10px',
                    background:'#151F6D',
                    color:'white',
                    borderRadius:'10px',
                    width:'20%',
                    height:'13%',
                    ml:'15px'}}>
                    COTIZAR
                </Button>


            </Box>

        </Box>
    )
}

export default SavingsLifeInsurance;