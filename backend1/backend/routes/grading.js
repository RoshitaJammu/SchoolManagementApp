// routes/grading.js

const express = require('express');
const router = express.Router();
const Grade = require('../models/Grade');






router.use(loggingMiddleware)
router.post('/', async (req, res) => {
  try {
    const { item, grade } = req.body;

    const newGrade = new Grade({
      item,
      grade,
    });

    const grade1 = await newGrade.save();
    res.json(grade1);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});










function loggingMiddleware(req, res, next) { 
  try {
   
      
      const token = req.headers.authorization ? req.headers.authorization.split(' ')[1]:null;
     
      if (!token) {
          return res.status(401).send('Authentication token failed!');
      }
      const decodedToken = jwt.verify(token, secretKey);
      
      if(decodedToken){
          console.log('Authentication Sucess!'); 

          next(); 

      }else{
          console.log(err+'Authentication failed!', 401); 
      }
      
  } catch (err) {
      console.log(err+' Authentication failed!', 401); 
      next();
     
      
  }
}












// // Create a new grade
// router.post('/', async (req, res) => {
//   try {
//     const { item, grade } = req.body;

//     const newGrade = new Grade({
//       item,
//       grade,
//     });

//     const grade1 = await newGrade.save();
//     res.json(grade1);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Get all grades
// router.get('/', async (req, res) => {
//   try {
//     const grades = await Grade.find();
//     res.json(grades);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Get grade by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const grade = await Grade.findById(req.params.id);
//     if (!grade) {
//       return res.status(404).json({ msg: 'Grade not found' });
//     }
//     res.json(grade);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Update grade by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const { studentId, classId, subject, score } = req.body;

//     let grade = await Grade.findById(req.params.id);
//     if (!grade) {
//       return res.status(404).json({ msg: 'Grade not found' });
//     }

//     grade.studentId = studentId;
//     grade.classId = classId;
//     grade.subject = subject;
//     grade.score = score;

//     await grade.save();
//     res.json(grade);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Delete grade by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const grade = await Grade.findById(req.params.id);
//     if (!grade) {
//       return res.status(404).json({ msg: 'Grade not found' });
//     }

//     await grade.remove();
//     res.json({ msg: 'Grade removed' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

module.exports = router;
