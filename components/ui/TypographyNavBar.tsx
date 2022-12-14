import { createTheme, ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import "@fontsource/montserrat";
interface Props {
    
    title: string
    color: string

}

const colortheme = createTheme({
    palette: {
      primary: { main: "#151F6D", contrastText: "#151F6D" },
      secondary: { main: "#2EA082", contrastText: "#2EA082" },
      info: {main: "#FFFFFF", contrastText: "#FFFFFF"}
    }
  });
const TypographyNavBar = ({title,color}:Props) => {

                
        
    return(
        <ThemeProvider theme={colortheme}>
        <Typography variant="h6" component="div"  color={color}
                fontWeight={500} fontStyle="normal" fontFamily="Montserrat" style={{fontSize:"15px",margin:"0.2px"}}>
                {title}
        </Typography>
        </ThemeProvider>
    )
}

export default TypographyNavBar;