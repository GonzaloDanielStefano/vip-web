import { Button, Grid } from "@mui/material";
import "@fontsource/montserrat";
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props{
  setActiveStep: Dispatch<SetStateAction<number>>
  setNoPatent: Dispatch<SetStateAction<boolean>>
  activeStep:number
  completed: Array<number>
  noPatent: boolean
  isFieldComplete: boolean
}

const QuoteButtonNext = ({setActiveStep,activeStep,isFieldComplete}:Props) => {

  const [disabled,setDisabled] = useState<boolean>(true);
    async function nextStep(){
        setActiveStep(activeStep + 1);
        
    }

    useEffect(() => {
      setDisabled(isFieldComplete);
    }, [])
    
    return(
        <Grid item xs={12}>
                          <Button variant="contained" 
                          onClick={nextStep}
                          disabled={disabled}
                          sx={{
                            marginLeft: '8.7%',
                            marginTop: '3%',
                            width:'81.5%',
                            background: '#151F6D',
                            color: 'white',
                            fontFamily:"Montserrat",
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

export default QuoteButtonNext;