import "@fontsource/montserrat";
import { Typography } from "@mui/material";
import Image from 'next/image';
const YearCost = () =>{

    return(
        <div>
            <Image src={'/../public/yearCost.png'}
                        style={{}}
                        width={100} height={45}
                        /> 
            <Typography>COSTO ANUAL:</Typography>

            <Typography>US$. 1,903.65</Typography>

        </div>
    )
}

export default YearCost;