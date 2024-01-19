const countNumberOfArrays = function(arr) {
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            count++;
        }
    }
    return count
}

module.exports = countNumberOfArrays;