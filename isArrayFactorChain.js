const isArrayFactorChain = function(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i+1] % arr[i] != 0) {
            return false;
        }
    }
    return true;
}

module.exports = isArrayFactorChain;