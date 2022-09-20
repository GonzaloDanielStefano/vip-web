import { Box, FormControl, Grid, MenuItem, Select, Step, StepButton, Stepper, OutlinedInput, InputLabel, SelectChangeEvent, TextField, Button, IconButton } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import React from "react";
import TitleQuote from "./titleQuote";
import QontoConnector from "./quontoConnector";
import QuoteButton from "../button/quoteButton";
import { Dependent, HealthQuoterRequest, QuoteResult, VehicularQuoterRequest } from "../../interfaces";
import DependientesField from "./dependientesField";
import moment from "moment";
import DependentComponent from "./DependentComponent";
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {

  setActiveStep: Dispatch<SetStateAction<number>>
  activeStep: number
  completed: Array<number>
  quoterData: VehicularQuoterRequest
  setQuoterData: Dispatch<SetStateAction<VehicularQuoterRequest>>


}
function StepTwoHealth({ activeStep, completed, setActiveStep, quoterData, setQuoterData }: Props) {

  type SelectValue = {
    id: string,
    value: string
  }
  const steps = ['1', '2'];

  const [values, setValues] = useState<HealthQuoterRequest>({
    id: '',
    email: '',
    name: '',
    phone: '',
    dni: '',
    promotional_code: '',
    born_at: moment().format('YYYY-MM-DD'),
    dependents: []
  });

  const [selectValues] = useState<SelectValue[]>(
    [{ id: '1', value: 'SI' }, { id: '2', value: 'NO' }])
  const [hasDependent, setHasdependent] = useState<SelectValue>({ id: '2', value: 'NO' });
  const [dependents, setDependents] = useState<Dependent[]>([]);
  const [results, setResults] = useState<QuoteResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [dependentIndex, setDependentIndex] = useState(0)

  useEffect(() => {
    setValues({ ...values, dependents: dependents })
  }, [dependents])

  const addNewDependent = () => {
    var newDependent: Dependent = {
      id: dependentIndex,
      relationship: 'Hijo',
      born_at: moment().format('YYYY-MM-DD')
    }
    setDependentIndex(dependentIndex + 1);
    var newDependents: Dependent[] = [...dependents, newDependent];
    setDependents(newDependents);
  }

  const handleChangeHasDependent = (event) => {
    var newSelectValue = selectValues.find(selectValue => selectValue.value === event.target.value);
    setHasdependent(newSelectValue);
    if (event.target.value === 'SI') {
      addNewDependent();
    }
  }

  const handleChangeTitularBornDate = (event) => {
    setValues({ ...values, born_at: event.target.value });
  }
  return (
    <Box style={{
      background: 'white', width: '567px', minHeight: '450px', marginTop: '0px', marginLeft: '5%'
      , borderRadius: '0px 0px 20px 20px'
    }}>
      <TitleQuote title={'¡Cotiza en segundos tu seguro vehicular!'}
        image={'/vehicle.png'} />
      <Grid container padding={2} paddingLeft={6}
        direction="row"
        spacing={1}
        justifyContent="space-between"
        alignItems="center">

        <Grid item xs={6}>

          <TextField
            id="date"
            label="Fecha de nacimiento del titular"
            type="date"
            defaultValue={moment().format('YYYY-MM-DD')}
            onChange={handleChangeTitularBornDate}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />

        </Grid>

        <Grid container lg={5.9}
          sx={{
            marginLeft: '0%'
          }}>



          <Grid item xs={12}>
            <FormControl style={{ marginTop: '6px', width: '140px' }}>
              <InputLabel id="hasDependents">Tiene dependientes</InputLabel>
              <Select
                labelId="hasDependents"
                id="hasDependents"
                label="Tiene dependientes"
                value={hasDependent.value}
                onChange={handleChangeHasDependent}
              >
                {selectValues.map((item) => {
                  return <MenuItem key={item.id} id={item.id} value={item.value}>{item.value}</MenuItem>
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        {hasDependent.value === 'SI' && <Grid item xs={12}>

          {dependents.map((item) => {
            return (
              <DependentComponent
                key={item.id}
                dependent={item}
                dependents={dependents}
                setDependents={setDependents}
                addNewDependent={addNewDependent}
              />
            )
          })}
        </Grid>}


      </Grid>

      <Grid container>

      </Grid>

      <QuoteButton buttonName={"Siguiente"} setActiveStep={setActiveStep}
        activeStep={activeStep} quoterData={quoterData} />

      <Box sx={{ width: '40%', margin: 'auto', marginTop: '5%' }} >
        <Stepper nonLinear activeStep={activeStep} connector={<QontoConnector />} >
          {steps.map((label, index) => (
            <Step key={label} /*completed={completed[index]} */
              sx={{
                '& .MuiStepLabel-root .Mui-completed': {
                  color: 'black', // circle color (COMPLETED)
                },

                '& .MuiStepLabel-root .Mui-active': {
                  color: '#2E9F82', // circle color (ACTIVE)
                  border: '4px solid #151F6D',
                  borderRadius: '12px 12px 12px 12px'
                },
                '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                {
                  color: 'common.white', // Just text label (ACTIVE)
                },

              }}>
              <StepButton>

              </StepButton>
            </Step>
          ))}
        </Stepper>

      </Box>
    </Box>);
}

export default StepTwoHealth;