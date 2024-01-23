/**
 * Finds the indices of all NaN values in an array
 * @param {Array} arr An array 
 * @returns Array which contains a list of all inidices in arr containing NaN
 */
const findNaNIndex = function(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Must pass an array")
    }
    let results = [];
    for(let i = 0; i < arr.length; i++) {
        if(isNaN(arr[i])) {
            results.push(i);
        }
    }
    return results;
}

module.exports = findNaNIndex;