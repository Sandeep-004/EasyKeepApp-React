const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: String
    
})

module.exports = mongoose.model("notesDB", appSchema);