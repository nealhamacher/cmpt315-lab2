const participants = require("./participants");

/**
 * Finds the biggest loser (player with most loser points) in a series of matches
 * @param {Array} matches - array of matches (each item is a dictionary 
 *          containing a winner, loser, and loser points) 
 * @returns {Array} the name of the biggest loser
 */
const biggestLoser = function(matches) {
    let loserPoints = {}
    
    let participantList = participants(matches)
    for(let i = 0; i < participantList.length; i++) {
        loserPoints[participantList[i]] = 0;
    }
    for(let i = 0; i < matches.length; i++) {
        loserPoints[matches[i]['winner']] -= matches[i]['loser_points']
        loserPoints[matches[i]['loser']] += matches[i]['loser_points'];
    }
    let maxPoints = Number.NEGATIVE_INFINITY
    let loser = "No-one"
    for(const [player, points] of Object.entries(loserPoints)) {
        if (points > maxPoints) {
            maxPoints = points;
            loser = player;
        }
    }
    return loser;
}

module.exports = biggestLoser;