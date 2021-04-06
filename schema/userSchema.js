const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    id: {
        type: String
    },
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
    },
    Phone: {
        type: Number,
        required: true,
    },
    Company: {
        type: String,
        required: true,
    },
    City: {
        type: String,
    },
    Designation: {
        type: String,
    }
})
const User = new mongoose.model("user", userSchema)

module.exports = User