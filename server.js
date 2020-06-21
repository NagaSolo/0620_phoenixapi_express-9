const express = require('express')
const config = require('./config/parameters')

const app = express()

app.get('/', function (req, res) {
    res.send('Contact API')
  })

app.listen(config.PORT, function(){
    console.log('Mendengar di PORT nombor 3000')
})