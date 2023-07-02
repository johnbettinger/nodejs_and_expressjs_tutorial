const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

// there are three ways to use index.html
// app.get('/', (req, res) => {
//  1. res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//  2. adding to static assets
//  3. SSR (server side rendering)
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
