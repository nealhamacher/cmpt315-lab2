const participants = require("./participants");

const winnersObject = function(matches) {
    let winners = {};
    const participantList = participants(matches);
    //Add all participants as keys to dictionary, the values represent the players
    //they have beaten (initialized to empty lists
    //to signify players beaten by 
    for(let i = 0; i < participantList.length; i++) {
        winners[participantList[i]] = [];
    }
    //Iterate through matches, appending loser to values
    for(let i = 0; i < matches.length; i++) {
       winners[matches[i]['winner']].push(matches[i]['loser']);
    }
    return winners;
}

module.exports = winnersObject;