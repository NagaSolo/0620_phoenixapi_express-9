const mongoose = require('mongoose')

// JSON object
const { Schema } = mongoose

const ContactSchema = new Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    description:{
        DOB: { type: String, required: true },
        Hobbies: { type: String, required: true },
        Relationship: { type: String, required: true }
    }
})

mongoose.exports = mongoose.Model( 'Contact', ContactSchema )