const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        default:null
    },
    last_name: {
        type: String,
        required: true,
        default:null
    },
});
module.exports = mongoose.model('User', userSchema);