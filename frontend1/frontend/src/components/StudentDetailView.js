import React from 'react';
import Syllabus from './Syllabus';
import TimeTable from './TimeTable';
import { Typography, Container,Box, Button } from '@mui/material';

const StudentDetailView = ({ student }) => {
  const navigateToMainPage = () => {
    window.location.href = '/app'; 
  };
      

  return (
    <Container>
      <Box mb={5}  p={2} textAlign="center">
        <Typography variant="h5" gutterBottom>
          Syllabus
        </Typography>
        <Syllabus />
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Timetable
        </Typography>
        <TimeTable />
      </Box>
      <Button variant="outlined" color="primary" align='right' onClick={navigateToMainPage}>
    Back to Main 
  </Button>
     
  
 

    </Container>
  );
};

export default StudentDetailView;
