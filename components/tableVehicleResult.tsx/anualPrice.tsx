import { Grid, Typography } from "@mui/material";
import "@fontsource/montserrat";
interface Props{
    quote: number
}
const AnualPrice = ({quote}:Props) => {
    return (
        <Grid item xs={12} alignContent='center' width={'100%'}
            sx={{
                marginTop: '15%'
            }}>
            <Typography
                sx={{
                    width: '100%',
                    marginLeft: '27%',
                    textAlign: 'start',
                    fontFamily: 'Montserrat',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '26px',
                    lineHeight: '23px',
                    color: '#313131'
                }}>US$ {quote}</Typography>
        </Grid>
    )
}

export default AnualPrice;