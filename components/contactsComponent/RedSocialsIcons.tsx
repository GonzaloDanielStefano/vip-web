import { Grid } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const RedSocialsIcons = () =>{

    
    return(
        <Grid container xs={4} marginLeft={7} marginTop={1.5}>

            <Grid item xs={3}>
                <InstagramIcon  
                sx={{
                    color:'#2EA082',
                    width:'30px',
                    height:'35px',
                    borderRadius:'25px 25px 25px 25px',
                    boxShadow:'0px 7px 20px rgba(21,31,109,0.14)',
                    background:'#EEEEEE'
                    }}/>
            </Grid>

            <Grid item xs={3}>
                <FacebookIcon 
                sx={{
                    color:'#2EA082',
                    width:'30px',
                    height:'35px',
                    borderRadius:'25px 25px 25px 25px',
                    boxShadow:'0px 7px 20px rgba(21,31,109,0.14)',
                    background:'#EEEEEE'
                    }}/>
            </Grid>

            <Grid item xs={3}>
                <LinkedInIcon  
                sx={{
                    color:'#2EA082',
                    width:'30px',
                    height:'35px',
                    borderRadius:'25px 25px 25px 25px',
                    boxShadow:'0px 7px 20px rgba(21,31,109,0.14)',
                    background:'#EEEEEE'
                    }}/>
            </Grid>

            <Grid item xs={3}>
                <YouTubeIcon  
                sx={{
                    color:'#2EA082',
                    width:'30px',
                    height:'35px',
                    borderRadius:'25px 25px 25px 25px',
                    boxShadow:'0px 7px 20px rgba(21,31,109,0.14)',
                    background:'#EEEEEE'
                    }}/>
            </Grid>

                    
        </Grid>
    )
}

export default RedSocialsIcons;