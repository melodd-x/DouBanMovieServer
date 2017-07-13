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


router.post('/sendmsg', function(req, res, next) {
  console.log(req.body)
  var username=req.body.username;
  var movieid=req.body.movieid;
  var moviestate=req.body.moviestate;
  var moviestar=req.body.moviestar;
  var movieContent=req.body.movieContent;
  var movieContenttags=req.body.movieContenttags;
  var movieupvote=req.body.movieupvote;
  con.query('INSERT INTO `usermovie` ( `username`,`movieid`,`moviestate`,`moviestar`,`movieContent`,`movieContenttags`,`movieupvote`) VALUES(?,?,?,?,?,?,?)',[username,movieid,moviestate,moviestar,movieContent,movieContenttags,movieupvote],function (err,rows,f) {

      if(err){
        console.log(err)
      }
      else{
          res.send(rows);
      }
  })
});
router.post('/checkmsg', function(req, res, next) {
  console.log(req.body)
  var username=req.body.username;
  var movieid=req.body.movieid;
  con.query('select * from `usermovie` where `username`= '+'"' +username+'"and `movieid`='+'"' +movieid+'"',function (err,rows,f) {
      if(err){
        res.send("no");
      }
      else{
        res.send(rows);
      }
  })
});
router.post('/update', function(req, res, next) {
  console.log(req.body)
  var username=req.body.username;
  var movieid=req.body.movieid;
  var moviestate=req.body.moviestate;
  var moviestar=req.body.moviestar;
  var movieContent=req.body.movieContent;
  var movieContenttags=req.body.movieContenttags;
  var movieupvote=req.body.movieupvote;
  con.query('update `usermovie` set ( `username`,`movieid`,`moviestate`,`moviestar`,`movieContent`,`movieContenttags`,`movieupvote`) VALUES(?,?,?,?,?,?,?) where `username`= '+'"' +username+'"and `movieid`='+'"' +movieid+'"',[username,movieid,moviestate,moviestar,movieContent,movieContenttags,movieupvote],function (err,rows,f) {
      if(err){
        res.send("no");
      }
      else{
        res.send(rows);
      }
  })
});

















module.exports = router;
