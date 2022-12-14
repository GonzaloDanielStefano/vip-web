import { Grid } from "@mui/material";
import Image from 'next/image';
const ImageCard = () =>{

    return(
        <Grid container lg={10} paddingTop={10} paddingLeft={12}>

            <Grid item lg={7}>
                <Image src={'/cotizar-y-ahorrar.png'} width={351} height={277} />
            </Grid>

            <Grid item lg={5} paddingTop={6} marginLeft={-2}>
                <Image src={'/cotizar-y-ahorrar-v.png'} width={130} height={70} />
            </Grid>

        </Grid>
    )
}

export default ImageCard;