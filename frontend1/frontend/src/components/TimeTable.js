import React from 'react';
import { Typography, Table, TableHead, TableRow, TableCell, TableBody, Container } from '@mui/material';

const TimeTable = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Class TimeTable
      </Typography>
      
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time/Day</TableCell>
            <TableCell>Monday</TableCell>
            <TableCell>Tuesday</TableCell>
            <TableCell>Wednesday</TableCell>
            <TableCell>Thursday</TableCell>
            <TableCell>Friday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>09:00 - 10:00</TableCell>
            <TableCell>Mathematics</TableCell>
            <TableCell>English</TableCell>
            <TableCell>Science</TableCell>
            <TableCell>Social Studies</TableCell>
            <TableCell>Mathematics</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>10:00 - 11:00</TableCell>
            <TableCell>Science</TableCell>
            <TableCell>Mathematics</TableCell>
            <TableCell>English</TableCell>
            <TableCell>Mathematics</TableCell>
            <TableCell>Science</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>11:00 - 12:00</TableCell>
            <TableCell>Social Studies</TableCell>
            <TableCell>Science</TableCell>
            <TableCell>Mathematics</TableCell>
            <TableCell>English</TableCell>
            <TableCell>Social Studies</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12:00 - 01:00</TableCell>
            <TableCell>English</TableCell>
            <TableCell>Social Studies</TableCell>
            <TableCell>Science</TableCell>
            <TableCell>Mathematics</TableCell>
            <TableCell>English</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01:00 - 02:00</TableCell>
            <TableCell>Lunch</TableCell>
            <TableCell>Lunch</TableCell>
            <TableCell>Lunch</TableCell>
            <TableCell>Lunch</TableCell>
            <TableCell>Lunch</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>02:00 - 03:00</TableCell>
            <TableCell>Physical Education</TableCell>
            <TableCell>Physical Education</TableCell>
            <TableCell>Physical Education</TableCell>
            <TableCell>Physical Education</TableCell>
            <TableCell>Physical Education</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};

export default TimeTable;
