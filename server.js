const express = require('express')
const app = express()
const port = 4200
const path = require('path');
const bodyParser=require('body-parser');
const db =require('./database')

app.use(express.static(path.join(__dirname, './client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
  })

  app.get('/display', (req, res) => {

  })

app.listen(port, () => console.log(`Image Component listening at http://localhost:${port}`))