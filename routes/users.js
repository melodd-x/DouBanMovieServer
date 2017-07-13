var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con=mysql.createConnection({
        host:'127.0.0.1',
        port:3306,
        user:'root',
        password:'root',
        database:'doubanmovie'
    });


router.post('/adduser', function(req, res, next) {
  console.log(req.body)
  var username=req.body.username;
  var userpassword=req.body.userpassword;
  var usernickname=req.body.usernickname;
  con.query('INSERT INTO `user` ( `username`,`userpassword`,`usernickname`) VALUES(?,?,?)',[username,userpassword,usernickname],function (err,rows,f) {

      if(err){
          // console.log(err);
      }
      else{
          // console.log(rows);
          res.send(rows);
      }
  })
});
router.post("/checkusername",function(req, res, next){
    con.query('select * from `user` where `username`= '+'"' + req.body.username+'"',function (err,rows,f) {
        if(err){
        }
        else{
            res.send(rows);
        }
    })
});
router.post("/checknickname",function(req, res, next){
    con.query('select * from `user` where `usernickname`= '+'"' + req.body.usernickname+'"',function (err,rows,f) {
        if(err){
        }
        else{
            res.send(rows);
        }
    })
});
router.post("/checklogin",function(req, res, next){
    var username=req.body.username;
    var userpassword=req.body.userpassword;
    // console.log(req.body);
    // console.log(userpassword);
    con.query('select * from `user` where `username`= '+'"' +username+'"and `userpassword`='+'"' +userpassword+'"',function (err,rows,f) {
        if(err){
          res.send("no");
        }
        else{
          res.send(rows);
        }
    })
});







module.exports = router;
