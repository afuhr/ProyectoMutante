var express = require('express'); 
var app = express();
var mutantController = require('./src/controller/mutantController');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
    extended: true
}));

app.get('/', function(llamado, res){
  res.status(200).send("hi");
});

app.use("/", mutantController);

// Start server
const PORT = process.env.PORT  || 3000;
app.listen(PORT);