const url = require('url')
const express = require('express')
const bodyParser = require('body-parser');
const server = express()

server.use(express.static(__dirname + '/public'));

function greeter () {
    var greet = ["Hei", "Hallo", "hei hei"];
    var random = greet[Math.floor((Math.random()*greet.length))];
    return random;
}

server.get('/random/:id', function (req, res) {
  res.send(greeter() +" "+ req.params.navn);

})

server.listen(32463, function () {
  console.log(greets() + " christian")
  console.log('server listening on port 8080!')
})



}

app.get('/hehe/:navn', function (req, res) {
  res.send(randomGreeting() + " " + req.params.navn)
})