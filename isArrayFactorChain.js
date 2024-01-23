/**
 * Determines if an array contains a factor chain (each item is a factor of 
 *  the next)
 * @param {Array} arr An array of integers
 * @returns boolean, true if array is a factor chain, false if not
 */
const isArrayFactorChain = function(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Must pass an array")
    }
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i+1] % arr[i] != 0) {
            return false;
        }
    }
    return true;
}

module.exports = isArrayFactorChain;