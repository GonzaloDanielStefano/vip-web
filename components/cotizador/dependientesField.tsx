import { FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { Dispatch, SetStateAction } from "react";

interface Props{

    setCantidadDependientes:Dispatch<SetStateAction<number>>
    cantidadDependientes: number
}
const DependientesField = ({setCantidadDependientes,cantidadDependientes}:Props) =>{
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
      );

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };

    const parentesco = ['Hijo/a', 'Cónyuge','Otro'];

    const [parentescoValue,setParentescoValue] = React.useState<string>();

    function handleChangeParentesco(event:any){
        setParentescoValue(event.target.value);
    }
    return(
        <Grid container paddingTop={3} columnSpacing={2}>
            <Grid item lg={5}>
            <FormControl fullWidth>
                          <InputLabel>Parentesco</InputLabel>
                          <Select
                            labelId="parentesco"
                            id="parentesco"
                            input={<OutlinedInput />}
                            sx={{height:'55px'}}
                            inputProps={{ 'aria-label': 'Without label' }}
                            value={parentescoValue}
                            onChange={handleChangeParentesco}
                          >
                           {Array.isArray(parentesco) ? parentesco.map((value)=>(
                            
                            <MenuItem value={value}>{value}</MenuItem>
                          )):[]}
                            
                          </Select>
                        </FormControl>
            </Grid>

            <Grid item lg={5}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                    label="Fecha de nacimiento"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Grid>

            <Grid item lg={0.7}>
                <IconButton
                onClick={()=>{ setCantidadDependientes(cantidadDependientes+1)}}>
                  <AddCircleIcon style={{color:'#262626'}}/>
                </IconButton>
            </Grid>

            <Grid item lg={1}>
                <IconButton
                onClick={()=>{cantidadDependientes !== 1 ? setCantidadDependientes(cantidadDependientes-1):''}}>
                    <DeleteIcon style={{color:'#262626'}}/>
                </IconButton>
            </Grid>

                    
        </Grid>
    )
}

export default DependientesField;