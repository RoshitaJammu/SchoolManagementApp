

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); 
const secretKey = 'SecretKey'; 





router.post('/signup', async (req, res) => {

  try {
    const admin = await User.findOne({ email: req.body.email });
    if (admin) {
      return res.status(400).json({ error: 'Admin already registered' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newAdmin = new User({ email: req.body.email, password: hashedPassword });
    await newAdmin.save();

    const token = jwt.sign({ email: newAdmin.email }, secretKey, { expiresIn: '1h' });
    res.status(201).json({ token});
  } catch (error) {
    console.error('Error registering admin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login', async (req, res) => {
  try {

    const admin = await User.findOne({ email: req.body.email });
    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    const passwordMatch = await bcrypt.compare(req.body.password, admin.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: 'Incorrect password' });
    }

    const token = jwt.sign({ email: admin.email }, secretKey, { expiresIn: '1h' });
    res.status(200).json({ token});
  } catch (error) {
    console.error('Error logging in admin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





module.exports = router;
