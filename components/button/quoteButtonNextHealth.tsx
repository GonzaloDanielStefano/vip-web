import { Button, Grid } from "@mui/material";
import "@fontsource/montserrat";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { HealthQuoterRequest, HomeQuoteRequest } from "../../interfaces";

interface Props {
  setActiveStep: Dispatch<SetStateAction<number>>
  activeStep: number
  completed: Array<number>
  isFieldComplete: boolean
  quoterData: HealthQuoterRequest
}

const QuoteButtonNextHealth = ({ setActiveStep, activeStep, isFieldComplete,quoterData }: Props) => {

  const [disabled, setDisabled] = useState<boolean>(isFieldComplete);
  async function nextStep() {
    setActiveStep(activeStep + 1);

  }

  useEffect(() => {
    setDisabled(isFieldComplete);
  }, [quoterData])

  return (
    <Grid item xs={12}>
      <Button variant="contained"
        onClick={nextStep}
        disabled={disabled}
        sx={{
          marginLeft: '8.7%',
          marginTop: '3%',
          width: '81.5%',
          background: '#151F6D',
          color: 'white',
          fontFamily: "Montserrat",
          fontWeight: 'bold',
          height: '53px',
          borderRadius: '10px 10px 10px 10px'
        }}
      >
        SIGUIENTE
      </Button>
    </Grid>
  );
}

export default QuoteButtonNextHealth;