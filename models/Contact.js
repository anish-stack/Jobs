const mongoose = require('mongoose');

// Define the schema for the Contact Us model
const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // Add email validation if needed
    },
    message: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    Status:{
        type: String,
        enum:["Call-Done","Pending"],
        default:"Pending"
    }
});

// Create the Contact Us model
const ContactUs = mongoose.model('ContactUs', contactUsSchema);

module.exports = ContactUs;
