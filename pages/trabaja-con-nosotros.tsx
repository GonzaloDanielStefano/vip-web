import { Grid } from "@mui/material";
import Contact from "../components/contactsComponent/Contact";
import { HomeLayout } from "../components/layouts";
import FormWorkWithUs from "../components/WorkWithUs/FormWorkWhitUs";


const TrabajaConNosotros = () =>{

    return(
        <HomeLayout title={"Corredor de Seguros Vip"} pageDescription={"desc"}>
           <Grid container marginTop={0.3}>
                <Contact 
                    title={'Trabaja con'}
                    title_strong={'nosotros'}
                    message={'Completa el siguiente formulario para postular al empleo que más se adecúe a tu formación, experiencia, intereses y expectativas. '} 
                    second_message={'Si'}      
                    />
                
                <FormWorkWithUs/>
            </Grid>
        </HomeLayout>
    )
}

export default TrabajaConNosotros;