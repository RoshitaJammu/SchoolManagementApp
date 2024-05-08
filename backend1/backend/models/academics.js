const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
    course: {
        type:String,
    },
  
  
});

module.exports = mongoose.model('academics', feeSchema);