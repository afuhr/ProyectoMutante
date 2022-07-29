var router = require("express").Router();
var mutantService = require('../service/mutantService');
 
function isMutant(req, res) {

     if (!mutantService.isValid(req.body.dna)){
        return res.status(400).send('Bad request to isMutantService');
      }
    
      if (mutantService.checkIsMutant(req.body.dna)){
        res.sendStatus(200);
      }
      else {
        res.sendStatus(403);
      }
}

async function stats(req, res, next) {
  var result = await mutantService.stats();
  res.status(200).jsonp(result); 
}


router.post("/mutant", isMutant);
router.get("/stats", stats);
 
module.exports = router;
