const express = require('express')
const { createJob, getJobs, getJobByJobname, deleteJob, getJobBydepartemnt, ApplyJob, CreateNews, getAllNews, createReview, getReviews, deleteReview, makeActiveReview, makeCall, getCall, updateStatusCall, deleteCall, deleteNews, ApplyJobs, getJobById, deleteJobApply } = require('../controllers/Jobcontroller')
const route = express.Router()


route.post('/create-job',createJob)
route.get('/get-job',getJobs)
route.get('/get-job/:jobname',getJobByJobname)
route.get('/get-jobs/:department',getJobBydepartemnt)
route.get('/get-job-by/:id',getJobById)

route.post('/delete-job/:id',deleteJob)

// ==========================
route.post('/Apply-Job',ApplyJob)
route.get('/Apply-Jobs',ApplyJobs)
route.post('/delete-apply/:id',deleteJobApply)


//==============================
route.post('/create-news',CreateNews)
route.get('/get-news',getAllNews)
route.post('/delete-news/:id',deleteNews)


//==============================

route.post('/create-review', createReview);
route.get('/get-reviews', getReviews);
route.delete('/delete-review/:id', deleteReview);
route.put('/make-active/:id', makeActiveReview);


// =================================
route.post('/make-call', makeCall);
route.get('/get-call', getCall);
route.put('/update-status/:id', updateStatusCall);
route.delete('/delete-call/:id', deleteCall);





module.exports=route