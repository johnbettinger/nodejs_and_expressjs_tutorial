const express = require('express')
const app = express()

//  req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party
      // think express.static which we used earlier

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

// logger is the middleware
// express automatically passes req, res, and a next middleware to logger
app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
