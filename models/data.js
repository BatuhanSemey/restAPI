const mongoose = require('mongoose')
const Schema = mongoose.Schema
const dataSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Data = mongoose.model('data', dataSchema)

module.exports = Data;