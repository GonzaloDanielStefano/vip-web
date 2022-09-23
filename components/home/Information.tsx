import Image from 'next/image'
import "@fontsource/montserrat";
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';


const Information = () =>{
    
    type Information = {
        id: string,
        value: string,
        message: string
    }
    
    const [selectValues] = useState<Information[]>(
        [{ id: '1', value: 'Info 1',message:'Hola' }, 
        { id: '2', value: 'Info 2',message:'Hola' }
        ,{id:'3',value:'Info 3',message:'Hola'}]);
    
    const [message,setMessage] = useState<string>();

    function returnContent(message){
       setMessage(message);
    }

    return(
        <Box display={'flex'}>
            <Box display={'inline-grid'} ml={30} mt={5}>
                {
                    Array.isArray(selectValues) ? selectValues.map((information,index)=>(
                        <Button sx={{mt:3}} key={index}
                        onClick={()=>returnContent(information.message)}>
                        <Typography
                        sx={{
                            textAlign:'center',
                            fontFamily:'Montserrat',
                            fontStyle:'normal',
                            fontWeight:400,
                            fontSize:'22px',
                            lineHeight:'50px',
                            letterSpacing:'-0.02em',
                            color:'#151F6D',
                            textDecoration:'underline'
                        }}>
                            {information.value}
                        </Typography>
                        </Button>
                    )):[]
                }
               
                   
               
            </Box>

            <Box ml={30} mt={10}>
                <Typography 
                sx={{
                    textAlign:'center',
                    fontFamily:'Montserrat',
                    fontStyle:'normal',
                    fontWeight:400,
                    fontSize:'17px',
                    lineHeight:'30px',
                    color:'#000000' 
                }}>
                    {message}
                </Typography>

                <Button sx={{
                    justifyContent:'center',
                    alignItems:'center',
                    padding:'10px 15px',
                    background:'#2EA082',
                    borderRadius:'10px',
                    color:'white',
                    position:'flex',
                    mt:5
                }}>
                    más información
                </Button>
            </Box>
        </Box>
    )
}

export default Information;