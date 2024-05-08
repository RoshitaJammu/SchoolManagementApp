import React from 'react';
import { Typography, Container, Box ,Button } from '@mui/material';
import Syllabus from './Syllabus';
import StaffDetails from './StaffDetails';
import TimeTable from './TimeTable';


const TeacherDetailView = () => {
  const navigateToMainPage =() =>{
    window.location.href='/app'
  }
  return (
    <Container style={{ marginTop: '50px' }}>
      <Box bgcolor="primary.main" color="white" p={2} textAlign="center">
        <Typography variant="h4">
          Teacher Details
        </Typography>
      </Box>
      

      <Box mb={4}>
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
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
        StaffDetails
        </Typography>
        <StaffDetails />
      </Box>
      <Button variant='outlined' color='primary' onClick={navigateToMainPage}>Back To Main
      </Button>
    </Container>
  );
};

export default TeacherDetailView;
