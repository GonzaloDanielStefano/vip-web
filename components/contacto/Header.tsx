import { Button, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import "@fontsource/montserrat";

import FormContact from "./FormContact";
import BoxMap from "./BoxMap";
import Contact from "../contactsComponent/Contact";
const Header = () => {

    return(
        <Grid container marginTop={0.3}>

            <Contact title={'Mantente en'} title_strong={'Contacto'}
            message={'Para obtener más información, comuníquese con uno de nuestros expertos.Llámenos para obtener más información.'} 
            second_message={''}/>

            <Grid item xs={6}>
                <Image src='/backgroundContacto.png' width={816} height={546}/>
            </Grid>

            <Grid container xs={12} height={662} marginTop={-0.5}
            sx={{
                background: '#2EA082',
                padding:'70px',
                paddingLeft:'72px'
            }}>

                <Grid item xs={6} minHeight={457}>
                    <Image src='/contactoMap.png' width={600} height={457}
                    style={{
                      minHeight:'457px'  
                    }}/>
                </Grid>

                <Grid item xs={6} marginLeft={-0.4}>
                    <FormContact/>
                </Grid>

            </Grid>

            <BoxMap/>
            
        </Grid>
    )
}

export default Header;