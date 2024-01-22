const participants = function(matches) {
    if (!Array.isArray(matches)) {
        throw new Error("Must pass an array")
    }
    let list = new Set;
    for(let i=0; i<matches.length; i++) {
        if(Object.keys(matches[i]).length != 3) {
           throw new Error("Each item in matches must be 3 long");
        }
        if(!('winner' in matches[i] && 'loser' in matches[i] && 'loser_points' in matches[i])) {
            throw new Error("Each match must have a winner, loser, and points");
        }
        list.add(matches[i]['winner']);
        list.add(matches[i]['loser']);
    }
    return Array.from(list);
}

module.exports = participants;