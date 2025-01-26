const express = require('express')
const app = express()

app.use('/users/', require('./routes/usersRoute'))


app.listen(5002,()=> console.log('Express Server Running on Port: 5002'))