const findNaNIndex = require('./findNaNIndex.js');
const isArrayFactorChain = require('./isArrayFactorChain.js');
const countNumberOfArrays = require('./countNumberOfArrays.js');
const participants = require('./participants.js');
const winnersObject = require('./winnersObject.js');
const biggestLoser = require('./biggestLoser.js');
const assert = require('assert');

const matches = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
  ];

assert.deepEqual(findNaNIndex([1,NaN,2,NaN]), [1,3]);
assert(findNaNIndex([1,2,3,4]).length == 0);

assert(isArrayFactorChain([2, 4, 8, 16, 32]));
assert(!isArrayFactorChain([2, 4, 8, 16, 32, 68]));

assert(countNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]]) == 2);
assert(countNumberOfArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) == 3);

console.log(participants(matches));

console.log(winnersObject(matches));

console.log(biggestLoser(matches));