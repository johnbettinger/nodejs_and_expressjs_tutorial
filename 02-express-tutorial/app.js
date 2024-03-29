const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth');

// static asseets
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({extended:false}))

// parse json
app.use(express.json())

app.use('/api/people', people)

app.use('/login', auth)
 
app.listen(3000,()=>{
    console.log('server listening on port 3000...');
})