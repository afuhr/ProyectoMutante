var express = require('express'); 
var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.get('/', function(llamado, res){
  res.send("Hi");
});


app.post('/mutant', function(req, res) {
  // Validar entrada
  if (!isValid(req.body.dna)){
      res.status(400).send('Bad request');
      return;
  }
  
  if (isMutant(req.body.dna)) {
    res.sendStatus(200);
  }
  else {
    res.sendStatus(403);
  }
});

function isMutant(dna) {

    var resultado = createArray(dna);

    var totalMutantes = leerFilas(resultado);

    if (totalMutantes > 1) {
      return true;
    }

    totalMutantes += leerColumnas(resultado);
    if (totalMutantes > 2) {
      return true;
    }
    
    totalMutantes += leerDiagonal_a_Derecha(resultado);
    if (totalMutantes > 2) {
      return true;
    }
  }
 

  function isValid(dna)
  {
    var isValid = true;

    dna.forEach(function(element) {
      console.log("palabra" + element);
      if (!/\b[ACTG]+\b/.test(element)) {
        isValid = false;
      }
    });

    console.log(isValid);
    return isValid;
  }


  function esCandidataParaMutante(palabra) {

    var total_A = palabra.toUpperCase().indexOf('AAAA');
    var total_C = palabra.toUpperCase().indexOf('CCCC');
    var total_G = palabra.toUpperCase().indexOf('GGGG');
    var total_T = palabra.toUpperCase().indexOf('TTTT');

    var total = 0;
    total += total_A > -1 ? 1 : 0;
    total += total_C > -1 ? 1 : 0;
    total += total_G > -1 ? 1 : 0;
    total += total_T > -1 ? 1 : 0;

    // console.log(palabra + ' ' + total);
    return (total);

  }


  function leerDiagonal_a_Derecha(matriz) {
    // Arranco en la posicion 0,0 y me voy desplazando a la derecha y hacia abajo
    var salida = '';
    var total = 0;

    var MAXX = matriz.length - 1;
    for(diag=MAXX; diag>=0; diag--) {
      var palabra = '';
      for(x=0, y=diag; y<=MAXX; x++, y++) {
        salida += matriz[x][y];
        palabra += matriz[x][y];
      }
      var repeticiones = esCandidataParaMutante (palabra);
      total += repeticiones;
      salida += '\n';
    }

    var MAXY = matriz.length - 1;
    for(diag=1; diag<=MAXY; diag++) {
        for(x=0, y=diag; y<=MAXY; x++, y++){
          salida += matriz[y][x] + ' ';
        }
        salida += '\n';
      } 

      return total;
  }




  function leerFilas(arrayFilas) {
    var total = 0;
    
    for (i = 0; i < arrayFilas.length; i++) {
      var palabra = '';
      for(var j=0; j < arrayFilas[i].length; j++) {
        palabra += arrayFilas[i][j];
      }
      var repeticiones = esCandidataParaMutante (palabra);
      total += repeticiones;
    }

    return total;
  }

  function leerColumnas(arrayFilas) {
    var total = 0;
    
    for (i = 0; i < arrayFilas.length; i++) {
      var palabra = '';
      for(var j=0; j < arrayFilas[i].length; j++) {
        palabra += arrayFilas[j][i];
      }
      var repeticiones = esCandidataParaMutante (palabra);
      total += repeticiones;
    }

    return total;
  }


function createArray(dna) {
  //cuento la cantidad de palabras y determino el numero de filas
  var arrayFilas = new Array(dna.length);
  var columnasCount = dna[0].length;
  var impresionMatriz = '';
    
  for (i = 0; i < arrayFilas.length; i++) {
    //dentro de la palabra extraigo sus caracteres
    arrayFilas[i] = new Array(columnasCount);
    for(var j=0; j < arrayFilas[i].length; j++) {
      arrayFilas[i][j] = dna[i][j];
      impresionMatriz += arrayFilas[i][j] + ' ';
    }
    impresionMatriz += '\n'
  }
  
  return arrayFilas;
}


// Start server
const PORT = process.env.PORT  || 3000;
app.listen(PORT);