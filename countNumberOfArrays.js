/**
 * Counts the number of arrays nested in the first level of an array
 * @param {Array} arr An array 
 * @returns A count of arrays (integer)
 */
const countNumberOfArrays = function(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Must pass an array")
    }
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            count++;
        }
    }
    return count
}

module.exports = countNumberOfArrays;