const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    
    grade: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Grade', gradeSchema);
