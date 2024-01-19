const findNaNIndex = function(arr) {
    let results = [];
    for(let i = 0; i < arr.length; i++) {
        if(isNaN(arr[i])) {
            console.log(arr[i])
            results.push(i);
        }
    }
    return results;
}

module.exports = findNaNIndex;