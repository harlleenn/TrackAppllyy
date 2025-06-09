const express = require('express')
const router = express.Router()
const {getInternship} = require('../controllers/internship')
router.route('/').get(getInternship)
module.exports = router