import React from 'react';
import { Typography, List, ListItem, ListItemText, Container } from '@mui/material';

const Syllabus = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Class Syllabus
      </Typography>
      <Typography variant="h5" gutterBottom>
        Mathematics - Class 10
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Chapter 1: Real Numbers" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chapter 2: Polynomials" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chapter 3: Pair of Linear Equations in Two Variables" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chapter 4: Quadratic Equations" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chapter 5: Arithmetic Progressions" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chapter 6: Triangles" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chapter 7: Coordinate Geometry" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chapter 8: Introduction to Trigonometry" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chapter 9: Some Applications of Trigonometry" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chapter 10: Circles" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chapter 11: Constructions" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chapter 12: Areas Related to Circles" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chapter 13: Surface Areas and Volumes" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chapter 14: Statistics" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chapter 15: Probability" />
        </ListItem>
      </List>
    </Container>
  );
};

export default Syllabus;
