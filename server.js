const newrelic = require('newrelic');
const express = require('express');

newrelic.instrumentLoadedModule(
  'express', // the module's name, as a string
  express // the module instance
  );

const app = express();
const port = process.env.PORT||4200
const path = require('path');
const fs = require('fs');
const bodyParser=require('body-parser');
const db =require('./database/queries.js');

app.use(express.static(path.join(__dirname, "Client/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


  app.get('/display', (req, res) => {

    db.getProductInfo((err, result)=>{
      if(err){
        //console.log(err)
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

  app.post('/images', (req, res)=> {
    var data = [req.body.data];
    db.postImage(data, (err, result) => {
      if(err) {
        res.send(err);
      } else {
        res.status(200).send(result);
      }
    })
  })

  app.delete('/display/:id', (req, res)=> {
    var id = [req.params.id];
    db.deleteData(id, (err, result) => {
      if(err) {
        res.send(err);
      } else {
        res.status(200).send(result);
      }
    })
  })

  app.put('/display', (req, res)=> {
    // var id = [req.body.id];
    db.putData((err, result) => {
      if(err) {
        res.send(err);
      } else {
        res.status(200).send(result);
      }
    })
  })

app.listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
  })