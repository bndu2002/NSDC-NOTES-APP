const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({

    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    isDeleted: { type: Boolean, default: null },
}, { timestamps: true })

module.exports = mongoose.model('Note', noteSchema)