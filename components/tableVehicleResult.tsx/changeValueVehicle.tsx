import { Box, Button, Grid, Input, Typography } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import "@fontsource/montserrat";
import { Dispatch, SetStateAction } from "react";
import {  Vehicle } from "../../interfaces";


interface Props{
    priceVehicle: number
    produced_at: string
    setPriceVehicle:Dispatch<SetStateAction<number>>
    vehicle: Vehicle
   
}
const ChangeValueVehicle = ({priceVehicle,produced_at,setPriceVehicle,vehicle}:Props) => {

    foundPriceVehicle();
    function foundPriceVehicle(){
        if(priceVehicle !== undefined){
      var quote_data = vehicle?.quote_data;
      var amount = quote_data.find(quote_data => quote_data.year.toString() === produced_at);
      if(amount !== undefined){
      setPriceVehicle(amount?.amount);}

      
      
    }}

    function handleChangePriceVehicle(event:any){
        setPriceVehicle(event.target.value);
    }
    return (
        <Grid container xs={4} alignItems='center'>

            <Grid item xs={1}
                sx={{
                    marginTop: '3%'
                }}>
                <QuestionMarkIcon
                    style={{
                        color: '#FFFFFF',
                        background: '#2EA082',
                        borderRadius: '25px 25px 25px 25px',
                        padding: '2px',
                        width: '21px',
                        height: '21px'
                    }} />
            </Grid>

            <Grid item xs={10}>
                <Typography
                    sx={{
                        textAlign: 'start',
                        marginTop: '10px',
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontSize: '18px',
                        fontWeight: 500,
                        lineHeight: '22px',
                        color: '#000000'
                    }}>

                    Cambiar el valor del Vehículo
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Box width={'99%'} height={54}
                    sx={{
                        border: '2px solid #2EA082',
                        padding: '5px',
                        marginTop: '2%',
                        borderRadius: '10px 10px 10px 10px'
                    }}>

                    <Input
                        defaultValue={priceVehicle}
                        value={priceVehicle}
                        onChange={handleChangePriceVehicle}
                        endAdornment={<CreateIcon />} />

                    <Button sx={{
                        color: '#FFFFFF',
                        background: '#151F6D',
                        fontFamily: 'Montserrat',
                        fontWeight: 700,
                        fontSize: '12px',
                        lineHeight: '13.88px',
                        width: '87px',
                        height: '40px',
                        borderRadius: '6px 6px 6px 6px',
                        marginLeft: '8%'
                    }}>
                        APLICAR
                    </Button>
                </Box>
            </Grid>

        </Grid>
    )
}

export default ChangeValueVehicle;