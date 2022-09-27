import { Box, Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import "@fontsource/montserrat";
import "@fontsource/raleway";

const SavingsLifeInsurance = () => {

    const lookingForOptions = ['Ahorro y mayor devolución', 'Ahorro y cuidar a mis dependientes',
        'Cuidar a mis dependientes'];
    const forHowLongOptions = ['5 años', '7 años', '10 años', '12 años', '15 años', '20 años'];

    const howMuchInvestOptions = ['Entre 100 y 200 soles', 'Entre 201 y 300 soles',
        'Entre 301 y 400 soles', 'Entre 401 y 500 soles', 'Más de 500 soles'];
    return (
        <Box component={'form'}
            sx={{
                boxSizing: 'border-box',
                background: '#FFFFFF',
                border: '1px solid #FFFFFF',
                borderRadius: '20px',
                boxShadow: '0px 6px 40px rgba(21,31,109,0.12)',
                width: '63%',

                ml: '20%',
                mt: '5%',
                padding: '25px'
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
                <FormControl sx={{ mt: '10px' }} >
                    <InputLabel htmlFor="component-outlined"
                        sx={{
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '15px',
                            lineHeight: '150%',
                            color: '#353535',
                        }}>Nombre</InputLabel>
                    <OutlinedInput sx={{ borderRadius: '10px' }} />
                </FormControl>

                <FormControl sx={{ paddingLeft: '15px', mt: '10px' }}>
                    <InputLabel htmlFor="component-outlined"
                        sx={{
                            paddingLeft: '15px',
                            fontFamily: 'Montserrat',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '15px',
                            lineHeight: '150%',
                            color: '#353535',
                        }}>DNI / CE</InputLabel>
                    <OutlinedInput sx={{ borderRadius: '10px' }} />
                </FormControl>

                <FormControl sx={{ paddingLeft: '15px', mt: '10px' }}>
                    <InputLabel htmlFor="component-outlined"
                        sx={{ paddingLeft: '15px' }}>Fecha de nacimiento</InputLabel>
                    <OutlinedInput sx={{ borderRadius: '10px' }} />
                </FormControl>
            </Box>

            <Box display={'flex'}>
                <FormControl sx={{ mt: '10px' }}>
                    <InputLabel htmlFor="component-outlined">Está buscando</InputLabel>
                    <Select
                        labelId="lookingFor"
                        id="lookingFor"
                        label="lookingFor"
                        sx={{ borderRadius: '10px',width:'223px' }}
                    >
                        {Array.isArray(lookingForOptions) ? lookingForOptions.map((option, index) => (

                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        )) : []}
                    </Select>
                </FormControl>

                <FormControl sx={{ paddingLeft: '15px', mt: '10px' }}>
                    <InputLabel htmlFor="component-outlined"
                        sx={{ paddingLeft: '15px' }}>Por cuanto tiempo</InputLabel>
                    <Select
                        labelId="forHowLong"
                        id="forHowLong"
                        label="forHowLong"
                        sx={{ borderRadius: '10px',width:'223px' }}
                    >
                        {Array.isArray(forHowLongOptions) ? forHowLongOptions.map((option, index) => (

                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        )) : []}
                    </Select>
                </FormControl>

                <FormControl sx={{ paddingLeft: '15px', mt: '10px' }}>
                    <InputLabel htmlFor="component-outlined"
                        sx={{ paddingLeft: '15px' }}>Cuanto le gustaría invertir mensualmente</InputLabel>
                    <Select
                        labelId="howMuchInvest"
                        id="howMuchInvest"
                        label="howMuchInvest"
                        sx={{ borderRadius: '10px',width:'223px' }}
                    >
                        {Array.isArray(howMuchInvestOptions) ? howMuchInvestOptions.map((option, index) => (

                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        )) : []}
                    </Select>
                </FormControl>
            </Box>

            <Box display={'flex'}>
                <FormControl sx={{ mt: '10px' }}>
                    <InputLabel htmlFor="component-outlined" >Teléfono </InputLabel>
                    <OutlinedInput sx={{ borderRadius: '10px' }} />
                </FormControl>

                <FormControl sx={{ paddingLeft: '15px', mt: '10px' }}>
                    <InputLabel htmlFor="component-outlined" sx={{ paddingLeft: '15px' }}>Correo</InputLabel>
                    <OutlinedInput sx={{ borderRadius: '10px' }} />
                </FormControl>


            </Box>

            <Box>
                <FormControl sx={{ mt: '10px', width: '58%' }}>
                    <InputLabel htmlFor="component-outlined">Mensaje</InputLabel>
                    <OutlinedInput rows={3} multiline={true} sx={{ borderRadius: '10px' }} />
                </FormControl>

                <Button
                    sx={{
                        mt: '10px',
                        background: '#151F6D',
                        color: 'white',
                        borderRadius: '10px',
                        width: '28%',
                        height: '50px',
                        ml: '15px',
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '15px',
                        lineHeight: '133%',
                    }}>
                    COTIZAR
                </Button>


            </Box>

        </Box>
    )
}

export default SavingsLifeInsurance;