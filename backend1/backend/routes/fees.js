// routes/fees.js

const express = require('express');
const router = express.Router();
const Fee = require('../models/Fee');


router.post('/', async (req, res) => {
  try {
    const { course, amount } = req.body;

    const newGrade = new Fee({
      course,
      amount,
    });

    const grade1 = await newGrade.save();
    res.json(grade1);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});





















// // Create a new fee
// router.post('/', async (req, res) => {
//   try {
//     const { studentId, amount, description, dueDate } = req.body;

//     const newFee = new Fee({
//       studentId,
//       amount,
//       description,
//       dueDate,
//     });

//     const fee = await newFee.save();
//     res.json(fee);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Get all fees
// router.get('/', async (req, res) => {
//   try {
//     const fees = await Fee.find();
//     res.json(fees);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Get fee by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const fee = await Fee.findById(req.params.id);
//     if (!fee) {
//       return res.status(404).json({ msg: 'Fee not found' });
//     }
//     res.json(fee);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Update fee by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const { studentId, amount, description, dueDate } = req.body;

//     let fee = await Fee.findById(req.params.id);
//     if (!fee) {
//       return res.status(404).json({ msg: 'Fee not found' });
//     }

//     fee.studentId = studentId;
//     fee.amount = amount;
//     fee.description = description;
//     fee.dueDate = dueDate;

//     await fee.save();
//     res.json(fee);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Delete fee by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const fee = await Fee.findById(req.params.id);
//     if (!fee) {
//       return res.status(404).json({ msg: 'Fee not found' });
//     }

//     await fee.remove();
//     res.json({ msg: 'Fee removed' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

module.exports = router;
