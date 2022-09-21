import Header from "../components/contacto/Header";
import { HomeLayout } from "../components/layouts";
import { Button, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import "@fontsource/montserrat";
import Contact from "../components/contactsComponent/Contact";
import FormContact from "../components/contacto/FormContact";
import BoxMap from "../components/contacto/BoxMap";


const Contacto = () => {

    return (
        <HomeLayout title={'Corredor de Seguros VIP'} pageDescription={'Seguros'}>

            <Header/>

        </HomeLayout>
    )
}

export default Contacto;