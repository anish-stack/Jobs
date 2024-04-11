const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    CandidateName: {
        type: String,
        required: true
    },
    CandidateAge: {
        type: Number,
        required: true
    },
    CandidateGender: {
        type: String,
        required: true
    },
    CvLink: {
        type: String
    },
    Linkedin: {
        type: String
    },
    ContactNumber: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    companyName:{
        type: String
    },
    jobType:{
        type: String
    },
    JobId:{
        type: String
    }
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
