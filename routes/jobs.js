const express = require('express')
const testUser = require('../middleware/testUser')

const router = express.Router()
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
} = require('../controllers/jobs')

router.post('/', testUser,createJob).get('/', getAllJobs)

router.get('/:id',getJob).delete('/:id',testUser, deleteJob).patch('/:id',testUser, updateJob)

module.exports = router
