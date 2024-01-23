const participants = require("./participants");

/**
 * Finds the biggest loser (player with most loser points) in a series of matches
 * @param {Array} matches - array of matches (each item is a dictionary 
 *          containing a winner, loser, and loser points) 
 * @returns {Array} a dictionary containing with name of winner as the key and
 *              array listing losers names as value
 */
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