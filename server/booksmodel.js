const mongoose = require("mongoose")
const postSchema = mongoose.Schema({
    title: String,
    source: String,
    img: String,
    UploadingDate: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('CS_Comsats_Books', postSchema);
