import React from 'react';
import { Typography, Container ,Box ,Button} from '@mui/material';
import StaffDetails from './StaffDetails';
import TimeTable from './TimeTable';
import Syllabus from './Syllabus';

const ParentDetailView = ({ name }) => {
  const navigateToMainPage = () => {
    window.location.href = '/app'; 
  };
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Parent Details
      </Typography>
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
      <Button variant="outlined" color="primary" align='right' onClick={navigateToMainPage}>
    Back to Main 
  </Button>

    </Container>
  );
};

export default ParentDetailView;
