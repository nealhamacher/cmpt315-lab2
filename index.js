const findNaNIndex = require('./findNaNIndex.js');
const isArrayFactorChain = require('./isArrayFactorChain.js');
const countNumberOfArrays = require('./countNumberOfArrays.js');
const participants = require('./participants.js')
const winnersObject = require('./winnersObject.js')
const biggestLoser = require('./biggestLoser.js')

const matches = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
  ];

module.exports = {
    findNaNIndex,
    isArrayFactorChain,
    countNumberOfArrays,
    participants,
    winnersObject,
    biggestLoser
};

