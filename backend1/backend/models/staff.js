const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    position : {
        type: String,
    },
  
});

module.exports = mongoose.model('Staff', feeSchema);