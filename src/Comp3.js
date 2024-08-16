
import React, { useEffect , useState} from 'react';
import { Container, Row, Col, FormControl, Button } from 'react-bootstrap';
import { Box } from '@mui/material';
export const Comp3 = () => {
    const styles = {
        header: {
          display: 'flex',
          alignItems: 'center',
          margin: '20px 0',
        },
        formControl: {
          maxWidth: '300px',
        },
        button: {
          marginLeft: '10px',
          backgroundColor:'green',
          color:'white'
        },
        sidebar: {
          listStyleType: 'none',
          paddingLeft: 0,
          backgroundColor: '#fff0f5',
          color: 'black',
          height: '100vh',
          overflowY: 'auto',
        },
        sidebarItem: {
        //   marginBottom: '5px',
          display: 'flex',
          alignItems: 'center',
          marginLeft:'10px',
          fontSize: '15px', fontFamily: 'fantasy'
          
        },
        sidebarLink: {
          textDecoration: 'none',
          color: 'inherit',
          display: 'flex',
          alignItems: 'center',
        },
        sidebarLink1: {
            textDecoration: 'none',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            backgroundColor:'blue',
            width:'190px',
            borderRadius:'10px',
            height:'50px',
           
          },
       
        icon: {
          marginRight: '1px',
          height:'20px',
          borderRadius:'50px',
          marginLeft:'10px'
        },}
        const API = "https://api.restful-api.dev/objects";
        const [data, setData] = useState([]); // Step to hold fetched data
      
        const fetchApiData = async (url) => {
            try {
                const res = await fetch(url);
                const result = await res.json();
                setData(result); // Set the fetched data to state
            } catch (error) {
                console.log(error);
            }
        };
      
        useEffect(() => {
            fetchApiData(API);
        }, []);
  return (
    <div> <Row>
    <Col xs={12} md={6}>
    <div style={{ 
        
        width: '100%'
    }}>
        <Box color="black"
             bgcolor="white"borderRadius="5%" p={5}>
          <img src='data:image/png;base64,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' style={{height:'200px'}}/> 
            
           

        </Box>
    </div>
</Col>
   {/*  //////////////////// */}
   <Col xs={12} md={5}>
    <div style={{ 
       
        width: '100%'
    }}>
        <Box color="black"
            bgcolor="blue" borderRadius="10%" textAlign="left"  p={5}>
           <Button  style={{color:'blue',backgroundColor:'white',height:'35px',borderRadius:'15px',padding:'5px'}}>
          New
        </Button>
        <h2 style={{color:'white',fontSize: '20px', fontFamily: 'fantasy'}}>We Have added new invoicing template!</h2>
        <p style={{fontSize: '20px', fontFamily: 'fantasy'}}>New template focus on helping you improve your business</p>
        <Button  style={{color:'blue',backgroundColor:'white',height:'40px',width:'250px',borderRadius:'15px',padding:'5px'}}>
          Download Now
        </Button>
        </Box>
    </div></Col>
    </Row></div>
  )
}
