import React, { useEffect , useState} from 'react';
import { Container, Row, Col, FormControl, Button } from 'react-bootstrap';
import { Box } from '@mui/material';
import { Comp1 } from './Comp1';
import { Comp2 } from './Comp2';
import { Comp3 } from './Comp3';
import { Comp4 } from './Comp4';
import { Comp5 } from './Comp5';
const Dashboard = () => {
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
    },
  };
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
    <Container fluid className="App" style={{backgroundColor:'#fff0f5'}}>
         <Row >
            {/* Sidebar */}
              <Col xs={12} md={2}>
                 <Comp1/>
               </Col>

       
             {/* searchbar  */}
        <Col xs={12} md={9}>
          <div style={styles.header}>
            <FormControl
              type="text"
              placeholder="Search"
              style={styles.formControl}
            />
            <Button variant="outline-success" style={styles.button}>
              Search
            </Button><p style={{marginLeft:'350px',fontSize: '20px', fontFamily: 'fantasy'}}><img src='https://cdn-icons-png.freepik.com/256/7606/7606403.png?ga=GA1.1.745059166.1723793898&semt=ais_hybrid'style={{height:'30px'}}/> UmeHabiba</p>
            </div>
{/* ///////////////////////////////////////////////////////////////////////////// */}
       
          <div className="content">{/* Main content */}
             <div style={{ marginTop: '20px', width: '90%' }}>
            <Box color="black" bgcolor="white"  borderRadius="15px" p={5}>
             
                  <Comp2/>
           </Box>
        </div>
        <br/>
   {/* ////////////////////////////// */}
       <Comp3/>
   {/* ////////////////////////////// */}
    
       <Comp4/>

          </div>
        </Col>
      </Row>
    </Container>
    
  );
};

export default Dashboard;