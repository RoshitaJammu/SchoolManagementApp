const express = require('express');
const connectDB = require('./config/db');
const schoolsRoutes = require('./routes/schools');
const cors = require('cors');

const app = express();

// Middleware for serving static files from 'uploads' directory
app.use('/uploads', express.static('./uploads'));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/schools', schoolsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
