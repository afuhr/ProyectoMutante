var mongoose = require('mongoose');

    
const dnaSchema = new mongoose.Schema({
        sequences: [String],
        createdAt: {
                type: Date,
                default: () => Date.now(),
        },
});

module.exports = mongoose.model('dna', dnaSchema);

