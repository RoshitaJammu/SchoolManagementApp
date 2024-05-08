const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./models/user'); 
const Grade = require('./models/Grade');
const Fee = require('./models/Fee');
const Staff = require('./models/staff');
const Academics = require('./models/academics');



const secretKey = 'SecretKey'; 

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/schoolManagement')
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('MongoDB connection error:', error));

const academicsRoutes = require('./routes/academics');
const gradingRoutes = require('./routes/grading');
const staffRoutes = require('./routes/staff');
const feesRoutes = require('./routes/fees');
const authRoutes = require('./routes/auth');


app.use('/api/academics', academicsRoutes);
app.use('/api/grading', gradingRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/fees', feesRoutes);
app.use('/api/auth', authRoutes);

















const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
