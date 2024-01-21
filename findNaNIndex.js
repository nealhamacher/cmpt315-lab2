const findNaNIndex = function(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Must pass an array")
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