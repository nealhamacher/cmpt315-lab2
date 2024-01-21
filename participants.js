const participants = function(matches) {
    let list = new Set;
    for(let i=0; i<matches.length; i++) {
        list.add(matches[i]['winner']);
        list.add(matches[i]['loser']);
    }
    return Array.from(list);
}

module.exports = participants;