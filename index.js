const express = require('express') // load library
const app = express() // call express
const port = 3000 // port run website

// route
app.get('/home', (req, res) => {
    var a= 1;
    var b= 2;
    var c= a+b;
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})