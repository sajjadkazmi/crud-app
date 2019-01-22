var express = require('express');
var router = express.Router();

var connection = require('../connection');
var server = require('../app')
/* GET users listing. */

router.get('/', function (req, res, next) {

  server.request.query(`SELECT * FROM records`, (err, result) => {
    if (!err) {
      res.send(result)
      console.log("res", result);

    }
    else
      console.log(err);


  })
});


router.post('/Users/', (req, res) => {

  server.request.query(`SELECT * FROM records where isActive ='True'`, (error, result) => {
     {
      console.log("error", error);
    }
   
  });
});

router.post('/AddUser', (req, res) => {

  server.request.query(`INSERT INTO records (name,email,isActive) VALUES('${req.body.name}','${req.body.email}','${req.body.isActive}')`, (error, result) => {
    if (error) {
      console.log("error", error);
    }
    else {
      console.log("result", result);
      server.request.query(`SELECT * FROM records where isActive ='True'`, (error0, result0) => {
        if (error0) {
          console.log("error", error0);
        }
        else {
          return res.send(result0)
        }
      });
    }
  });
});


router.put('/DeleteUser', (req, res) => {
  server.request.query(`Update records SET isActive='false' where id =${req.body.id}`, (err, result1) => {
      if (err) {
          return res.send(err)
          console.log("error", err)
      }
      else {
          console.log("result", result1);
          server.request.query(`SELECT * FROM records where isActive='True'`, (error1, result2) => {
            if (error1) {
              console.log("error", error1);
            }
            else {
              return res.send(result2)
            }
          });
      }
  })
})


router.post('/EditUser', (req, res) => {
  server.request.query(` UPDATE records SET name=${req.body.name},email=${req.body.name} WHERE id=${req.body.id}`, (err, result1) => {
      if (err) {
          return res.send(err)
          console.log("error", err)
      }
      else {
          console.log("result", result1);
          server.request.query(`SELECT * FROM records where isActive='True'`, (error1, result2) => {
            if (error1) {
              console.log("error", error1);
            }
            else {
              return res.send(result2)
            }
          });
      }
  })
})




module.exports = router;
