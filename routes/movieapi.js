var express = require('express');
var router = express.Router();
var http = require('http');
var bodyparser=require("body-parser");
var iconv=require("iconv-lite")
// var request=

var answer;

router.use('/', function(req, res, next) {
  console.log("电影api收到了请求");
  res.set("Access-Control-Allow-Origin","http://localhost:8080");
  res.set("Cache-Control","no-cache");
  res.set("Access-Control-Allow-Credentials",true);
  res.set("Access-Control-Expose-Headers","Content-Type, Authorization, Accept, Range, Origin");
// 创建一个由服务器发送给豆瓣电影api的请求

var httpreq=http.request(
  req.body.url,
  // 'http://api.douban.com/v2/movie/in_theaters',
  function(res){
    // console.log(res);
  });

httpreq.end();

httpreq.on("response",function(request){
  var result="";
  request.on("data",function(chunk){
    result+=iconv.decode(chunk,'utf-8');
  })
  request.on("end",function(){
    answer=JSON.parse(result);
    res.send(answer);
  })
}

)

});










// var pageUrl = 'http://api.douban.com/v2/movie/in_theaters';
//
// http.get(pageUrl, function(res) {
//     var html = '';
//     res.on('data', function(data) {
//         html += data;
//     });
//     res.on('end', function() {
//         // console.log("123");
//     });
// });



// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
