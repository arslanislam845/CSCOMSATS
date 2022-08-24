const mongoose = require("mongoose")
const postSchema = mongoose.Schema({
    title: String,
    heading: String,
    source: String,
    course_content: String,
    books: String,
    slides: String,
    past_papers: String,
    UploadingDate: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('CS_Comsats', postSchema);
