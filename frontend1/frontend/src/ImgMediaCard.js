import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const ImgMediaCard = ({ title, description, image, buttonName }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (buttonName === 'View as Teacher') {
      navigate('/teacher-detail');
    } else if (buttonName === 'View as Student') {
      navigate('/student-detail');
    } else if (buttonName === 'View as Parent') {
      navigate('/parent-detail'); 
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {/* Button */}
      <Box display="flex" justifyContent="flex-end" marginRight="10px" marginBottom="10px">
        <Button 
          variant="contained" 
          color="primary" 
          endIcon={<ArrowForwardIcon />}
          onClick={handleButtonClick}
        >
          {buttonName}
        </Button>
      </Box>
    </Card>
  );
};

export default ImgMediaCard;
