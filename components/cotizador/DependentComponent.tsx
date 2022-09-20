import { Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Delete } from '@mui/icons-material';
import moment from 'moment'
import { Dependent } from '../../interfaces';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
    dependent: Dependent,
    dependents: Dependent[],
    setDependents: Dispatch<SetStateAction<Dependent[]>>;
    addNewDependent: Function;
}


const DependentComponent = ({ dependent, dependents, setDependents, addNewDependent }: Props) => {

    type SelectValue = {
        id: string,
        value: string
    }

    const [relationshipValues] = useState<SelectValue[]>(
        [
            { id: '1', value: 'Hijo' },
            { id: '2', value: 'Conyuge' }
        ]
    )

    

    const handleChangeRelationship = (event) => {
        var newSelectValue = relationshipValues.find(selectValue => selectValue.value === event.target.value);
        const newElementsUpdated = dependents.map(dependentElement => {
            // 👇️ update element in array
            if (dependentElement.id === dependent.id) {
                return { ...dependentElement, relationship: newSelectValue.value };
            }

            // 👇️ otherwise return object as is
            return dependentElement;
        });

        setDependents(newElementsUpdated);
    }

    const handleChangeBornDate = (event) => {
        const newElementsUpdated = dependents.map(dependentElement => {
            // 👇️ update element in array
            if (dependentElement.id === dependent.id) {
                return { ...dependentElement, born_at: event.target.value };
            }

            // 👇️ otherwise return object as is
            return dependentElement;
        });

        setDependents(newElementsUpdated);
    }

    function handleDeleteDependent() {
        const newElementsUpdated = dependents.filter(dependentToDelete => dependentToDelete.id !== dependent.id);
        setDependents(newElementsUpdated);
    }

    return (
        <Grid
            container
            direction="row"
            spacing={1}
            justifyContent="space-between"
            alignItems="center">
            <Grid item xs={6}>
                <FormControl fullWidth style={{ marginTop: '20px' }}>
                    <InputLabel id="relationship">Parentesco</InputLabel>
                    <Select
                        labelId="relationship"
                        id="relationship"
                        label="Parentesco"
                        value={dependent?.relationship}
                        onChange={handleChangeRelationship}
                    >
                        {relationshipValues.map((item) => {
                            return <MenuItem id={item.id} key={item.id} value={item.value}>{item.value}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid container xs={6} marginLeft={0}>

                <Grid item xs={2} marginLeft={1}>
                <FormControl style={{ marginTop: '33px' }}>
                    <TextField
                        id="date"
                        label="Fecha de nacimiento del dependiente"
                        type="date"
                        defaultValue={moment().format('YYYY-MM-DD')}
                        onChange={handleChangeBornDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                </Grid>
                

                <Grid item xs={1} marginTop={5} marginLeft={14}>
                    <IconButton  onClick={() => handleDeleteDependent()}><DeleteIcon style={{color:'#262626'}}/></IconButton>
                </Grid>

                <Grid item xs={1}  marginTop={5}>
                    <IconButton  onClick={() => addNewDependent()}><AddCircleIcon style={{color:'#262626'}}/></IconButton>
                </Grid>




            </Grid>
        </Grid>
    );
}

export default DependentComponent;