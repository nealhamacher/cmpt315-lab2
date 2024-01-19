const findNaNIndex = require('./findNaNIndex.js');
const isArrayFactorChain = require('./isArrayFactorChain.js');
const countNumberOfArrays = require('./countNumberOfArrays.js');

module.exports = {
    findNaNIndex,
    isArrayFactorChain,
    countNumberOfArrays
};

console.log(findNaNIndex([1,NaN,2,NaN]))

console.log(isArrayFactorChain([2, 4, 8, 16, 32])) // => true
console.log(isArrayFactorChain([2, 4, 8, 16, 32, 68]))

console.log(countNumberOfArrays([2,8,[6],3,3,5,3,4,[5,4]])) // => 2
console.log(countNumberOfArrays([2,8,[6,3,3],[4],5,[3,4,[5,4]]])) 