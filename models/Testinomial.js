const mongoose = require('mongoose');

// Define the schema for the Testimonial
const testimonialSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    textReview: {
        type: String,
        required: true
    },
    numberOfStars: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    dateOfReview: {
        type: Date,
        required: true,
        default: Date.now
    },
    active:{
        type:Boolean,
        default:false
    },
    userImage: {
        type: String,
        required: true
    }
});

// Create the Testimonial model
const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
