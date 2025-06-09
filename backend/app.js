const express = require('express')
const app = express()
const cors = require('cors')
const internshipRoutes = require('./routes/internship')
const Port = 3000
app.use(cors())
app.use(express.json())
app.use('/api/v1/internship', internshipRoutes);
app.listen(3000 , () => console.log( `Server is running on port ${Port}`))