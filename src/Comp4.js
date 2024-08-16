
import React, { useEffect , useState} from 'react';
import { Container, Row, Col, FormControl, Button } from 'react-bootstrap';
import { Box } from '@mui/material';
export const Comp4 = () => {
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
    <Col xs={12} md={4}>
    <div style={{ 
        // marginLeft: '20%', 
        marginTop: '15px', 
        width: '100%'
    }}>
       <Box color="black"
            bgcolor="white" borderRadius="5%" textAlign="left" p={5}>
       <h3 style={{fontSize: '20px', fontFamily: 'fantasy'}}>Activities</h3>
       <p style={{color:'green'}}><img src='https://th.bing.com/th/id/OIP.6wzFlutPD-O7JK9FnvhWFAHaHw?w=189&h=198&c=7&r=0&o=5&pid=1.7' style={{height:'20px'}}/>New invoice</p>
<b><p  style={{fontSize: '15px', fontFamily: 'fantasy'}}>Franciso Gibbs</p></b>  
<p >invoice PQ-44915C</p>
<br/>
<b><p  style={{fontSize: '15px', fontFamily: 'fantasy'}}>Invoice JL-55356365</p></b>  
<p  >invoice PQ-44915C</p>
        </Box>
    </div>
</Col>
   {/*  ////// */}
   <Col xs={12} md={7}>
    <div style={{ 
        // marginLeft: '10%', 
        marginTop: '15px', 
        width: '100%'
    }}>
       
       <Box 
color="black" 
bgcolor="white" 
borderRadius="5%" 
p={5}
>

{data.length > 0 ? (
<table style={{ width: '100%',textAlign:'left' }}>
  <thead>
    <tr>
      <th style={{
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'left',
        padding: '12px',
        borderBottom: '2px solid #ddd',
        fontSize: '20px', fontFamily: 'fantasy',
      }}>ID</th>
      <th style={{
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'left',
        padding: '12px',
        borderBottom: '2px solid #ddd',
        fontSize: '20px', fontFamily: 'fantasy',
      }}>Name</th>
      <th style={{
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'left',
        justifyContent:'left',
        padding: '12px',
        borderBottom: '2px solid #ddd',
        fontSize: '20px', fontFamily: 'fantasy',
      }}>Data</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, index) => (
      <tr key={index} style={{
        backgroundColor:  'white',
        borderBottom: '1px solid #ddd'
      }}>
        <td style={{ padding: '12px' }}>{item.id}</td>
        <td style={{ padding: '12px' }}>{item.name}</td>
        <td style={{ padding: '12px' }}>{item.name} </td>
      </tr>
    ))}
  </tbody>
</table>
) : (
<p>Loading...</p>
)}
</Box>
    </div></Col>
    </Row></div>
  )
}
