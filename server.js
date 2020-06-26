const express = require('express');
const app = express();
const port = process.env.PORT||4200
const path = require('path');
const bodyParser=require('body-parser');
const db =require('./database/queries.js');

app.use(express.static(path.join(__dirname, './client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/display', (req, res) => {

    db.getProductInfo((err, result)=>{
      if(err){
        console.log(err)
        res.sendStatus(404)
      }else{
      res.send(result)
    }
  })
  });


app.listen(port, () => console.log(`Image Component listening at http://localhost:${port}`))