// routes/staff.js

const express = require('express');
const router = express.Router();
const Staff = require('../models/staff');




router.post('/', async (req, res) => {
  try {
    const {name , position} = req.body;

    const newGrade = new Staff({
      name,
      position,
    });

    const grade1 = await newGrade.save();
    res.json(grade1);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});



























// Create a new teacher
// router.post('/teachers', async (req, res) => {
//   try {
//     const { firstName, lastName, subject } = req.body;

//     const newTeacher = new Teacher({
//       firstName,
//       lastName,
//       subject,
//     });

//     const teacher = await newTeacher.save();
//     res.json(teacher);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Get all teachers
// router.get('/teachers', async (req, res) => {
//   try {
//     const teachers = await Teacher.find();
//     res.json(teachers);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Create a new administrator
// router.post('/administrators', async (req, res) => {
//   try {
//     const { firstName, lastName, role } = req.body;

//     const newAdministrator = new Administrator({
//       firstName,
//       lastName,
//       role,
//     });

//     const administrator = await newAdministrator.save();
//     res.json(administrator);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Get all administrators
// router.get('/administrators', async (req, res) => {
//   try {
//     const administrators = await Administrator.find();
//     res.json(administrators);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Update teacher by ID
// router.put('/teachers/:id', async (req, res) => {
//   try {
//     const { firstName, lastName, subject } = req.body;

//     let teacher = await Teacher.findById(req.params.id);
//     if (!teacher) {
//       return res.status(404).json({ msg: 'Teacher not found' });
//     }

//     teacher.firstName = firstName;
//     teacher.lastName = lastName;
//     teacher.subject = subject;

//     await teacher.save();
//     res.json(teacher);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Update administrator by ID
// router.put('/administrators/:id', async (req, res) => {
//   try {
//     const { firstName, lastName, role } = req.body;

//     let administrator = await Administrator.findById(req.params.id);
//     if (!administrator) {
//       return res.status(404).json({ msg: 'Administrator not found' });
//     }

//     administrator.firstName = firstName;
//     administrator.lastName = lastName;
//     administrator.role = role;

//     await administrator.save();
//     res.json(administrator);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Delete teacher by ID
// router.delete('/teachers/:id', async (req, res) => {
//   try {
//     const teacher = await Teacher.findById(req.params.id);
//     if (!teacher) {
//       return res.status(404).json({ msg: 'Teacher not found' });
//     }

//     await teacher.remove();
//     res.json({ msg: 'Teacher removed' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Delete administrator by ID
// router.delete('/administrators/:id', async (req, res) => {
//   try {
//     const administrator = await Administrator.findById(req.params.id);
//     if (!administrator) {
//       return res.status(404).json({ msg: 'Administrator not found' });
//     }

//     await administrator.remove();
//     res.json({ msg: 'Administrator removed' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

module.exports = router;
