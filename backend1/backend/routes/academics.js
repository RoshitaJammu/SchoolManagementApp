// routes/academics.js

const express = require('express');
const router = express.Router();
const Academics = require('../models/academics');


router.post('/', async (req, res) => {
  try {
    const {course } = req.body;

    const newGrade = new Academics({
      course,
    });

    const grade1 = await newGrade.save();
    res.json(grade1);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});





























// // Create a new class
// router.post('/classes', async (req, res) => {
//   try {
//     const { name, teacher, schedule } = req.body;

//     const newClass = new Class({
//       name,
//       teacher,
//       schedule,
//     });

//     const classObj = await newClass.save();
//     res.json(classObj);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Get all classes
// router.get('/classes', async (req, res) => {
//   try {
//     const classes = await Class.find();
//     res.json(classes);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Get class by ID
// router.get('/classes/:id', async (req, res) => {
//   try {
//     const classObj = await Class.findById(req.params.id);
//     if (!classObj) {
//       return res.status(404).json({ msg: 'Class not found' });
//     }
//     res.json(classObj);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Update class by ID
// router.put('/classes/:id', async (req, res) => {
//   try {
//     const { name, teacher, schedule } = req.body;

//     let classObj = await Class.findById(req.params.id);
//     if (!classObj) {
//       return res.status(404).json({ msg: 'Class not found' });
//     }

//     classObj.name = name;
//     classObj.teacher = teacher;
//     classObj.schedule = schedule;

//     await classObj.save();
//     res.json(classObj);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Delete class by ID
// router.delete('/classes/:id', async (req, res) => {
//   try {
//     const classObj = await Class.findById(req.params.id);
//     if (!classObj) {
//       return res.status(404).json({ msg: 'Class not found' });
//     }

//     await classObj.remove();
//     res.json({ msg: 'Class removed' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Create a new syllabus
// router.post('/syllabus', async (req, res) => {
//   try {
//     const { subject, topics, classId } = req.body;

//     const newSyllabus = new Syllabus({
//       subject,
//       topics,
//       classId,
//     });

//     const syllabus = await newSyllabus.save();
//     res.json(syllabus);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Get all syllabi
// router.get('/syllabus', async (req, res) => {
//   try {
//     const syllabi = await Syllabus.find();
//     res.json(syllabi);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Get syllabus by ID
// router.get('/syllabus/:id', async (req, res) => {
//   try {
//     const syllabus = await Syllabus.findById(req.params.id);
//     if (!syllabus) {
//       return res.status(404).json({ msg: 'Syllabus not found' });
//     }
//     res.json(syllabus);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Update syllabus by ID
// router.put('/syllabus/:id', async (req, res) => {
//   try {
//     const { subject, topics, classId } = req.body;

//     let syllabus = await Syllabus.findById(req.params.id);
//     if (!syllabus) {
//       return res.status(404).json({ msg: 'Syllabus not found' });
//     }

//     syllabus.subject = subject;
//     syllabus.topics = topics;
//     syllabus.classId = classId;

//     await syllabus.save();
//     res.json(syllabus);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Delete syllabus by ID
// router.delete('/syllabus/:id', async (req, res) => {
//   try {
//     const syllabus = await Syllabus.findById(req.params.id);
//     if (!syllabus) {
//       return res.status(404).json({ msg: 'Syllabus not found' });
//     }

//     await syllabus.remove();
//     res.json({ msg: 'Syllabus removed' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

module.exports = router;
