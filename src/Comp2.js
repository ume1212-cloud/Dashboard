
import React, { useEffect , useState} from 'react';
import { Container, Row, Col, FormControl, Button } from 'react-bootstrap';
import { Box } from '@mui/material';
export const Comp2 = () => {
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
    <div>
 <Row>        <Col xs={12} md={3}>
    <p style={{fontSize: '20px', fontFamily: 'fantasy'}}><img src='https://th.bing.com/th/id/OIP.6wzFlutPD-O7JK9FnvhWFAHaHw?w=189&h=198&c=7&r=0&o=5&pid=1.7' style={{height:'20px'}}/>Total revenue</p>
{data.length > 0 ? (
<h5 style={{color:'black'}} >{data.length}</h5>
) : (
<li>Loading...</li>
)}
</Col>
<Col xs={12} md={3}><p style={{fontSize: '20px', fontFamily: 'fantasy'}}><img src='https://th.bing.com/th/id/OIP.MxlFpCtVm8y3flYtWZ7PBgHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7'style={{height:'20px'}}/>Invoice</p>
{data.length > 0 ? (
<h5 style={{color:'black'}} >{data.length}</h5>
) : (
<li>Loading...</li>
)}
</Col>
<Col xs={12} md={3}><p style={{fontSize: '20px', fontFamily: 'fantasy'}}><img src='https://th.bing.com/th?q=Circle+Transparent+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-AU&cc=AU&setlang=en&adlt=moderate&t=1&mw=247'style={{height:'20px'}}/>Clients</p>
{data.length > 0 ? (
<h5 style={{color:'black'}} >{data.length}</h5>
) : (
<li>Loading...</li>
)}
</Col>
<Col xs={12} md={3}><p  style={{fontSize: '20px', fontFamily: 'fantasy'}}><img src='data:image/jpeg;base64,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'style={{height:'20px'}}/>Loyalty</p>
{data.length > 0 ? (
<h5 style={{color:'black'}} >{data.length}</h5>
) : (
<li>Loading...</li>
)}
</Col> </Row></div>
  )
}
