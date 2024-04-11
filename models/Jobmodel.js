const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    numberOfPersonsNeeded: {
        type: Number,
        required: true
    },
    typeOfJobs: {
        type: String,
        required: true
    },
    eligibility: {
        type: String,
        default: "Fresher",
        required: true
    },
    minSalary: {
        type: Number,
        required: true
    },
    maxSalary: {
        type: Number,
        required: true
    },
    dateOfPostJob: {
        type: Date,
        default: Date.now
       
    },
    skills: {
        type: [String],
        required: true
    },
    companyDetails: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    responsibilities: {
        type: [String],
        required: true
    },
    department: {
        type: String,
        required: true
    },
    recruiterName: {
        type: String,
        required: true
    },
    recruiterNumber: {
        type: String,
        required: true
    },
    recruiterCallTime: {
        type: String,
        required: true
    },
    JobCategory:{
        type: String,
    },
    JobActive:{
        type:Boolean,
        default:true
    },
    CallingDay: {
        type: String,
        required: true,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday','All-Day']
    }
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);
