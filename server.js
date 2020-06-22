const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/parameters')

const exphbs = require('express-handlebars')

const contactRouter = require('./routes/contact')

const app = express()

// default layout is at views/layouts/layout.hbs
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(contactRouter)

mongoose.connect(config.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Hubungan dengan DB berjaya'))
.catch((e) => {
  console.log('Hubungan dengan DB gagal')
  console.log(e)
  process.exit(1)
})

app.get('/', function (req, res) {
  res.send('Contact API')
})

app.listen(config.PORT, function() {
  console.log('Mendengar di PORT nombor 3000')
})