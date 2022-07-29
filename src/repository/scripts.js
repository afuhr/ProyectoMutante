var mongoose = require('mongoose');
var dna = require('./models/dna');


const uri = "mongodb+srv://afuhr:ZDR3CJvBohpJHj9d@clusterproyectomutante.p27ss.mongodb.net/?retryWrites=true&w=majority";

try {
    // Connect to the MongoDB cluster
     mongoose.connect( 
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true });
      /* () => console.log(" Mongoose is connected")
    ); */

  } catch (e) {
    console.log("could not connect");
  }

  module.exports.add = function(matriz) {
    var entity = new dna({
      sequences : matriz
    });
  
    entity.save(function(err, entity) {
      if(err) console.log(err.message);
    });

    return entity;
  };


  module.exports.findAll = async function() {

    return await dna.find();

  };
  
  


  
