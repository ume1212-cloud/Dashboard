import React from 'react'

export const Comp1 = () => {
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
  return (
    <nav>
    <ul style={styles.sidebar}>
      <li style={styles.sidebarItem}>
        <h2> <img src='data:image/jpeg;base64,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'style={{marginRight: '1px', height:'50px',borderRadius:'50px', marginLeft:'10px'}} />
     Invo</h2>
     <br/><br/><br/><br/>
      </li>
      <li style={styles.sidebarItem}>
        <a href="#home" style={styles.sidebarLink1}>
          <img src='data:image/jpeg;base64,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'style={styles.icon} />
          Home
        </a>
        
      </li>
      <hr/>
      <li style={styles.sidebarItem}>
        <a href="#about" style={styles.sidebarLink}>
          <img src='https://cdn-icons-png.freepik.com/256/12125/12125367.png?ga=GA1.1.745059166.1723793898&semt=ais_hybrid' style={styles.icon} />
          About
        </a>
      </li>
      <hr/>
      <li style={styles.sidebarItem}>
        <a href="#services" style={styles.sidebarLink}>
          <img src='https://cdn-icons-png.freepik.com/256/5597/5597512.png?ga=GA1.1.745059166.1723793898&semt=ais_hybrid' style={styles.icon} />
          Services
        </a>
      </li>
      <hr/>
      <li style={styles.sidebarItem}>
        <a href="#contact" style={styles.sidebarLink}>
          <img  src='https://cdn-icons-png.freepik.com/256/5591/5591688.png?ga=GA1.1.745059166.1723793898&semt=ais_hybrid' style={styles.icon} />
          Contact
        </a>
      </li>
      <hr/>
      <li style={styles.sidebarItem}>
        <a href="#help" style={styles.sidebarLink}>
          <img src='https://cdn-icons-png.freepik.com/256/15695/15695135.png?ga=GA1.1.745059166.1723793898&semt=ais_hybrid'style={styles.icon} />
          Help
        </a>
      </li>
      <hr/>
      <li style={styles.sidebarItem}>
        <a href="#clients" style={styles.sidebarLink}>
          <img  src='https://cdn-icons-png.freepik.com/256/4989/4989497.png?ga=GA1.1.745059166.1723793898&semt=ais_hybrid'  style={styles.icon} />
          Clients
        </a>
      </li>
      <hr/>
      <li style={styles.sidebarItem}>
        <a href="#messages" style={styles.sidebarLink}>
          <img  src='https://cdn-icons-png.freepik.com/256/907/907851.png?ga=GA1.1.745059166.1723793898&semt=ais_hybrid'  style={styles.icon} />
          Messages
        </a>
      </li>
      <hr/>
      <br/> <br/>
      <li style={styles.sidebarItem}>
        <a href="#messages" style={styles.sidebarLink}>
          <img  src='https://cdn-icons-png.freepik.com/256/7139/7139307.png?ga=GA1.1.745059166.1723793898&semt=ais_hybrid'  style={styles.icon} />
         Logout
        </a>
      </li>
    </ul>
  </nav>
  )
}
