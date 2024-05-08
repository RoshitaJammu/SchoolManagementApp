const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',

    },
    amount: {
        type: Number,
    },
    course: {
        type: String,
    },
    dueDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ['Pending', 'Paid'],
        default: 'Pending',
    },
});

module.exports = mongoose.model('Fee', feeSchema);
