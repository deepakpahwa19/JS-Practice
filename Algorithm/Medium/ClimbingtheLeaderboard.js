
function climbingLeaderboard(scores, alice) {
    const leaderBoard = {};
    let rank = 0;
    const aliceRank = [];
    for (const score of scores) {
        leaderBoard[score] = leaderBoard[score] || ++rank;
    }
    let j = scores.length - 1;
    ++rank;
    for (const score of alice) {
        if (score > scores[0]) {
            aliceRank.push(1);
        } else if (score < scores[scores.length - 1]) {
            aliceRank.push(rank);
        } else {
            for (let i = j; i >= 0; i--) {
                if (score < scores[i]) {
                    aliceRank.push(leaderBoard[scores[i + 1]]);
                    j = i;
                    break;
                } else if (score === scores[i]) {
                    aliceRank.push(leaderBoard[scores[i]]);
                    j = i;
                    break;
                }
            }
        }
    }
    console.log(aliceRank);
}

scores = [100, 100, 50, 40, 40, 20, 10];
alice = [5, 25, 50, 120];
climbingLeaderboard(scores, alice);