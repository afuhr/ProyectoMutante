const dna = require('./dna')

test('dna with 6 words', () => {
    var entity = new dna({sequences : ["AAAAAA", "AAAAAA", "AAAAAA", "AAAAAA", "AAAAAA", "AAAAAA"]});
    expect(entity.sequences.length).toBe(6);
  });

  test('dna with 6 words wich each one has 6 characters', () => {
    var entity = new dna({sequences : ["AAAAAA", "AAAAAA", "AAAAAA", "AAAAAA", "AAAAAA", "AAAAAA"]});
    for(var i = 0; i < 6; i++) {
        expect(entity.sequences[i].length).toBe(6);
    }
    
  });