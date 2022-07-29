const service = require('./mutantService')

test('dna empty should return false', () => {
    expect(service.isValid('')).toBe(false);
  });

test('dna null should return false', () => {
    expect(service.isValid(null)).toBe(false);
  });  

test('dna NxN with characters not in (A,C,T,G) should return false - NXN', () => {
    expect(service.isValid(["ACCC", "CCCA", "ACCC", "CCZA"])).toBe(false);
  });   

test('dna with 4 items, where each item has 4 characters should return true - NXN', () => {
    expect(service.isValid(["ACCC", "CCCA", "ACCC", "CCCA"])).toBe(true);
  });   

test('this array of string should be is mutant', () => {
    expect(service.isMutant(["CCCCAA","CAGTAC","ACCAGT","AGATTT","CCTCTA","TCACTC"])).toBe(true);
  });      

  test('this array of string not should be is mutant', () => {
    expect(service.isMutant(["CCCTAA","CAGTAC","ACCAGT","AGATTT","CCTCTA","TCACTC"])).toBe(false);
  });   