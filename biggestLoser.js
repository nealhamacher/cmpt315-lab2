const participants = require("./participants");

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