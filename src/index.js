const express = require('express') // load library
const path = require('path');    
const app = express() // call express
const morgan = require('morgan')
const handlevars = require('express-handlebars')
const port = 3000 // port run website


app.use(express.static(path.join(__dirname, 'public')))

//HTTP looger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlevars({
  extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '\\resources\\views'));
console.log('PATH: ', __dirname);
console.log('PATH: ', path.join(__dirname, '\\resourses\\views'));
console.log('***************************************************************');


// route
app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})