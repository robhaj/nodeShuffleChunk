// dependencies
var express = require('express');
var request=require("request");
var cheerio=require("cheerio");
var app = express();


// perfrom request
app.get('/scrape/', function(req, res){

  url = 'https://github.com/robhaj/following';

  request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      // pass DOM to cheerio
      var $ = cheerio.load(html);
      var people = $('h3');
    }
  });
});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;
