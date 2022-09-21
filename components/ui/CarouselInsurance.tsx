import { Box, Grid } from "@mui/material";
import Image from 'next/image';
const CarouselInsurance = () =>{

    const imagenes = ['chubLogo.png','mapfreLogo.png','lapositivaLogo.png','mapfreLogo.png','mapfreLogo.png'];
    return(
        <Box
        sx={{
            width:'90%',
            marginLeft:'10%',
            marginRight:'5% ', 
           
           
        }}>

       
        <Grid container direction={'row'} lg={12}
        borderRadius={'20px 20px 20px 20px'}
        sx={{background:'#FFFFFF'}}
        columnSpacing={4}
        height={120}>
           
           {Array.isArray(imagenes)? imagenes.map((imagen,index)=>(
                <Grid item key={index}
                sx={{marginLeft:'auto',marginRight:'auto',marginTop:'2%'}}>
                    <Image src={`/${imagen}`} width={150} height={65} />
                </Grid>
           )):[]}

           

        </Grid>

        </Box>
    )
}

export default CarouselInsurance;