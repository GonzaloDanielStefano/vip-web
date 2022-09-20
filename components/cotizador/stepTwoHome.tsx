import { Box, FormControl, FormControlLabel, Grid, MenuItem, Select, Step, StepButton, Stepper, TextField, Radio, InputLabel, SelectChangeEvent, OutlinedInput, InputAdornment } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import React from "react";
import QontoConnector from "./quontoConnector";
import TitleQuote from "./titleQuote";
import QuoteButtonNext from "../button/quoteButtonNext";
import "@fontsource/montserrat";
import { HomeQuoteRequest, UseType } from "../../interfaces";
import QuoteButtonNextHome from "../button/quoteButtonNextHome";



interface Props {

    useTypes: UseType[];
    setActiveStep: Dispatch<SetStateAction<number>>
    activeStep: number
    completed: Array<number>
    homeQuoterData: HomeQuoteRequest
    setHomeQuoterData: Dispatch<SetStateAction<HomeQuoteRequest>>

}

function StepTwoHome({ activeStep, completed, setActiveStep,
    setHomeQuoterData, homeQuoterData, useTypes }: Props) {

    const steps = ['1', '2']
    async function handleChangePhone(event: any) {
        setHomeQuoterData({ ...homeQuoterData, phone: event.target.value });
    }

    async function handleChangeName(event: any) {
        setHomeQuoterData({ ...homeQuoterData, name: event.target.value });

    }
    async function handleChangeEmail(event: any) {
        setHomeQuoterData({ ...homeQuoterData, email: event.target.value });
    }


    async function handleChangeProvince(event: SelectChangeEvent) {
        setHomeQuoterData({ ...homeQuoterData, province: event.target.value });
    }

    async function handleChangeDistrict(event: SelectChangeEvent) {
        setHomeQuoterData({ ...homeQuoterData, district: event.target.value });
    }


    const typeOfClienteOptions = ['Opcion 1', 'Opcion 2'];


    return (
        <Box className="boxQuote">

            <TitleQuote title={'¡recibe información de seguro hogar!'}
                image={'/../public/homeIconQuoteHeader.png'} />

            <Grid container direction={'row'}>

                <Grid item xs={12} lg={5.1}
                    sx={{

                        marginLeft: '8.8%',
                        marginTop: '2%'
                    }}>
                    <FormControl className="homeField" sx={{
                        width: '88%',

                    }} size="small">
                        <InputLabel
                            id="typeOfClient"
                            sx={{
                                marginTop: '2%',

                            }}>Provincia</InputLabel>
                        <Select
                            labelId="province"
                            id="province"
                            label="Provincia"
                            onChange={handleChangeProvince}
                            value={homeQuoterData?.province}
                            sx={{ height: '55px' }}
                        >
                            {Array.isArray(typeOfClienteOptions) ? typeOfClienteOptions.map((typeOfClienteOption,index) => (

                                <MenuItem key={index} value={typeOfClienteOption}>{typeOfClienteOption}</MenuItem>
                            )) : []}


                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} lg={5.15}
                    sx={{
                        marginTop: '2%'
                    }}>
                    <FormControl className="homeFieldCurrency" >
                        <InputLabel
                            id="typeOfClient"
                            sx={{
                                marginTop: '2%',

                            }}>Distrito</InputLabel>
                        <Select
                            labelId="district"
                            id="district"
                            label="Distrito"
                            onChange={handleChangeDistrict}
                            value={homeQuoterData?.district}
                            sx={{ height: '55px' }}
                        >
                            {Array.isArray(typeOfClienteOptions) ? typeOfClienteOptions.map((typeOfClienteOption,index) => (

                                <MenuItem key={index} value={typeOfClienteOption}>{typeOfClienteOption}</MenuItem>
                            )) : []}


                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} lg={4.6}
                    sx={{
                        marginLeft: '8.5%',
                        marginTop: '2%'
                    }}>
                    <TextField className="name" id="name" label="Nombre"
                        value={homeQuoterData?.name}
                        variant="outlined" multiline={false}
                        sx={{
                            alignItem: 'center',
                            wordBreak: 'break-all',
                            "& .MuiInputBase-root": {
                                height: "100%",
                                display: "flex",
                                alignItems: "start"
                            }
                        }}
                        onChange={(event) => handleChangeName(event)} />
                </Grid>

                <Grid item xs={12} lg={4.6}
                    sx={{

                        marginTop: '2%',
                        marginLeft: '4.7%'
                    }}>
                    <TextField className="phone" id="phone" label="Télefono"
                        value={homeQuoterData?.phone}
                        variant="outlined" multiline={false}
                        sx={{
                            alignItem: 'center',
                            wordBreak: 'break-all',
                            "& .MuiInputBase-root": {
                                height: "100%",
                                display: "flex",
                                alignItems: "start"
                            }
                        }}
                        onChange={(event) => handleChangePhone(event)} />
                </Grid>

                <Grid item xs={12}
                    sx={{

                        marginTop: '2%',

                    }}>
                    <TextField className="email" id="email" label="E-mail"
                        value={homeQuoterData?.email}
                        variant="outlined" multiline={false}
                        sx={{
                            width: '82%',
                            marginLeft: '8%',

                            alignItem: 'center',
                            wordBreak: 'break-all',
                            "& .MuiInputBase-root": {
                                height: "100%",
                                display: "flex",
                                alignItems: "start"
                            }
                        }}
                        onChange={(event) => handleChangeEmail(event)} />
                </Grid>
            </Grid>



            <Grid container flexDirection={'row'}>



                <QuoteButtonNextHome setActiveStep={setActiveStep} quoterData={homeQuoterData}
                    activeStep={activeStep} completed={[]} isFieldComplete={false} />
            </Grid>

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




        </Box>


    );
}

export default StepTwoHome;