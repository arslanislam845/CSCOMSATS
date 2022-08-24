const mongoose = require("mongoose")
const Users = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    confirmPassword: String,
    
})

module.exports = mongoose.model('CS_Comsats_Users', Users);
