const express = require('express')
const server = express()

server.use(express.static('public'))



function greets () {
    var greet = ["Hei", "Hallo", "hei hei"];
    var random = greet[Math.floor((Math.random()*greet.length))];
    return random;
}

server.get('/random/:id', function (req, res) {
  res.send(greets() +" "+ req.params.navn);

})

server.listen(8080, function () {
  console.log(greets() + " christian")
  console.log('server listening on port 8080!')
})
