var express = require('express');
var router = express.Router();

function shuffleArr(array){

  var arrayCopy = array.slice(0);
  var shuffled = [];
  while (arrayCopy.length !== 0) {
    if (arrayCopy.length === 1) {
      shuffled.push(arrayCopy[0]);
      break;
    } else {
      var i = Math.floor(Math.random() * arrayCopy.length);
      shuffled.push(arrayCopy.splice(i, 1)[0]);
    }
  }
  return shuffled;
}

function chunkArr(array, size) {
   var chunked = [];
   for (var i=0; i<array.length; i+=size)
       chunked.push(array.slice(i,i+size));
   return chunked;
 }

router.get('/', function(req, res, next) {
  var html = '<form action="/" method="post">' +
  '<input type="text" name="people" placeholder="Enter people to chunk"/>'+
  'Enter a size to chunk by:' +
  '<input type="text" name="chunkSize"/>' +
  '<button type = "submit">CHUNK BITCH!</button></form>';
  res.send(html);
});

router.post('/', function(req, res) {
  var people = req.body.people;
  var chunkSize = req.body.chunkSize;
  var shuffedArr = shuffleArr(people.split(','));
  var chunkedArr = chunkArr(shuffedArr, +chunkSize);
  res.send(chunkedArr);
});

module.exports = router;
