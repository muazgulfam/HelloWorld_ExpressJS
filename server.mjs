import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  console.log('Hello World! Deploying my first server') 
  res.send('Hello World! Deploying my first server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})