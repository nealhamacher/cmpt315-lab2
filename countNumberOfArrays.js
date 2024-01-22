const countNumberOfArrays = function(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Must pass an array")
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