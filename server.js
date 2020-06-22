const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/parameters')

const app = express()

async function start() {
  try {
    await mongoose.connect(config.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(config.PORT, function(){
      console.log('Mendengar di PORT nombor 3000')
    })
  } catch(e) {
    console.log(e)
  }
}

app.get('/', function (req, res) {
    res.send('Contact API')
  })