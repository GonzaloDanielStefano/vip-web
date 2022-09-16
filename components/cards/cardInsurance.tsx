
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from 'next/image';

interface Props {
    message: String
    image: String
    title: String
}
const CardInsurance = ({ message, image, title }: Props) => {
    return (

        <Card sx={{
            maxWidth: '382px', height: '216px',
            marginLeft: '17%', marginTop: '10%', paddingLeft: '5%'
        }}>

            <Image src={`${image}`} width={446} height={218} />

            <CardContent>

                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>

                <Typography variant="h2"
                    sx={{
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: '16px',
                        lineHeight: '30px',
                        color: '#000000'
                    }}>{message}

                </Typography>

            </CardContent>

        </Card>
    )
}

export default CardInsurance;