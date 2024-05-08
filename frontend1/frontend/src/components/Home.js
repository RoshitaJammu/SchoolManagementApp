import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Button } from '@mui/material';

const Home = () => {
  return (
    <Container style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      backgroundColor: '#f0f0f0' // Set desired background color
    }}>
      {/* Styled heading */}
      <h2 style={{ 
        fontFamily: 'Arial, sans-serif', // Change font family
        fontSize: '2.5rem', // Change font size
        color: '#333', // Change text color
        marginBottom: '20px' // Add margin bottom
      }}>
        Welcome to Home Page
      </h2>

      {/* Navbar with links to other components */}
      <Box mt={4}>
        <Button variant="contained" color="primary" component={Link} to="/academics" style={{ margin: '10px' }}>
          Academics
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/grading" style={{ margin: '10px' }}>
          Grading
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/staff" style={{ margin: '10px' }}>
          Staff
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/fees" style={{ margin: '10px' }}>
          Fees
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
