const findNaNIndex = require('./findNaNIndex.js');
const isArrayFactorChain = require('./isArrayFactorChain.js');
const countNumberOfArrays = require('./countNumberOfArrays.js');
const participants = require('./participants.js');
const winnersObject = require('./winnersObject.js');
const biggestLoser = require('./biggestLoser.js');
const assert = require('assert');
const { count } = require('console');

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
assert.deepEqual(findNaNIndex([NaN,'1',3,NaN]), [0,3])

assert(isArrayFactorChain([2, 4, 8, 16, 32]));
assert(!isArrayFactorChain([2, 4, 8, 16, 32, 68]));
assert(isArrayFactorChain([3, 9, 81, 324, 1620]))
assert(!isArrayFactorChain([3, 9, 81, 324, 243, 1620]))

assert(countNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]]) == 2);
assert(countNumberOfArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) == 3);
assert(countNumberOfArrays([[1],2,3,[2]]) == 2);
assert(countNumberOfArrays([1]) == 0);
assert(countNumberOfArrays([[1]]) == 1);
assert(countNumberOfArrays([[[1]]]) == 1);


assert.deepEqual(participants(matches), ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']);

assert.deepEqual(winnersObject(matches), {
  Alice: [ 'Bob', 'Carol' ],
  Bob: [],
  Carol: [ 'Dean', 'Dean' ],
  Dean: [ 'Elise' ],
  Elise: [ 'Bob', 'Carol' ]
});

assert(biggestLoser(matches) == 'Bob');

console.log("All tests passed")