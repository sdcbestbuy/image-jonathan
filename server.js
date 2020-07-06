const express = require('express');
const app = express();
const port = process.env.PORT||4200
const path = require('path');
const bodyParser=require('body-parser');
const db =require('./database/queries.js');

app.use(express.static(path.join(__dirname, "Client/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/display', (req, res) => {

    db.getProductInfo((err, result)=>{
      if(err){
        console.log(err)
        res.sendStatus(400)
      }else{
      res.send(result)
    }
  })
  });

  app.get('/images', (req, res)=>{
   console.log("req body",req.body)
   console.log("body", req.body.params)
   console.log("query", req.query)
  db.getImages(req.query.id, (err, result)=>{
    if (err){
      console.log(err)
      res.send(err, null)
    } else {
      res.status(200).send(result)
    }
  })
  });


app.listen(port, () => console.log(`Image Component listening at ${port}`))