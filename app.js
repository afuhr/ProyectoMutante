var express = require('express'); 
var app = express();

app.get('/', function(llamado, respuesta){
  respuesta.send(200,"hi");
});

// Start server
app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });