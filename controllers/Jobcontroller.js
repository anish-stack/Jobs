const Job = require('../models/Jobmodel');
const ApplyJobModel = require('../models/ApplyForJob')
const NewsModel = require('../models/NewsModel')
const Testimonial = require('../models/Testinomial')
const ContactUs = require("../models/Contact")
// Create Job
exports.createJob = async (req, res) => {
    try {
        const newJob = new Job(req.body);
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Jobs
exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getJobBydepartemnt = async (req, res) => {
    try {
        const job = await Job.find({ department: req.params.department });
        if (!job) {
            return res.status(404).json({ message: 'department not found' });
        }
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Get single Job by jobname
exports.getJobByJobname = async (req, res) => {
    try {
        const jobs = await Job.find({ department: req.params.jobname });
        if (jobs.length === 0) {
            return res.status(404).json({ message: 'Jobs not found' });
        }
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getJobById = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const jobs = await Job.findById( id);
        console.log(jobs)
        if (jobs.length === 0) {
            return res.status(404).json({ message: 'Jobs not found' });
        }
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Delete Job
exports.deleteJob = async (req, res) => {
    try {
        console.log("i am hit")
        const job = await Job.findById(req.params.id);
        console.log(job)
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        await job.deleteOne();
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// ===================================Apply Job
exports.ApplyJob = async (req, res) => {
    try {
        console.log("I am hit");
        const newApply = new ApplyJobModel(req.body);
        const savedApplyJob = await newApply.save();
        res.status(201).json(savedApplyJob);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
exports.ApplyJobs = async (req, res) => {
    try {
        const News = await ApplyJobModel.find();
        res.status(200).json(News);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
exports.deleteJobApply = async (req, res) => {
    try {
        console.log("i am hit")
        const job = await ApplyJobModel.findById(req.params.id);
        console.log(job)
        if (!job) {
            return res.status(404).json({ message: 'Apply not found' });
        }
        await ApplyJobModel.deleteOne();
        res.status(200).json({ message: 'Apply deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//=====================================News
exports.CreateNews = async (req,res)=>{
    try {
        console.log("I am hit");
        const newNews = new NewsModel(req.body);
        const savedNews = await newNews.save();
        res.status(201).json(savedNews);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

exports.getAllNews = async (req, res) => {
    try {
        const News = await NewsModel.find();
        res.status(200).json(News);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteNews = async (req, res) => {
    try {
        console.log("i am hit")
        const job = await NewsModel.findById(req.params.id);
        console.log(job)
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        await NewsModel.deleteOne();
        res.status(200).json({ message: 'News deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//=====================================Testinimial

exports.createReview = async (req, res) => {
    try {
        const { userName, textReview, numberOfStars, userImage } = req.body;
        const newTestimonial = new Testimonial({
            userName,
            textReview,
            numberOfStars,
            userImage
        });
        const savedTestimonial = await newTestimonial.save();
        res.status(201).json(savedTestimonial);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

// Function to get all reviews
exports.getReviews = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

// Function to delete a review by ID
exports.deleteReview = async (req, res) => {
    try {
        const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);
        res.json(deletedTestimonial);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

// Function to make a review active by ID
exports.makeActiveReview = async (req, res) => {
    try {
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(req.params.id, { active: true }, { new: true });
        res.json(updatedTestimonial);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};


//=====================================Call-form

exports.makeCall = async (req, res) => {
    try {
        const { name, email, message, contactNumber } = req.body;
        const newCall = new ContactUs({
            name,
            email,
            message,
            contactNumber
        });
        const savedCall = await newCall.save();
        res.status(201).json(savedCall);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to make a call" });
    }
};

// Function to get all call records
exports.getCall = async (req, res) => {
    try {
        const calls = await ContactUs.find();
        res.json(calls);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to get calls" });
    }
};

// Function to update the status of a call record to "Call-Done"
exports.updateStatusCall = async (req, res) => {
    try {
        const updatedCall = await ContactUs.findByIdAndUpdate(req.params.id, { Status: "Call-Done" }, { new: true });
        res.json(updatedCall);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to update status" });
    }
};

// Function to delete a call record by ID
exports.deleteCall = async (req, res) => {
    try {
        const deletedCall = await ContactUs.findByIdAndDelete(req.params.id);
        res.json(deletedCall);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to delete call" });
    }
};
