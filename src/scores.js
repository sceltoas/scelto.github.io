import _ from 'lodash';

const PARTICIPATED = -1;
const NOT_PARTICIPATED = -2;

const participants = [
    {
        name: 'Andreas',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Ann Katrin',
        results: [PARTICIPATED],
    },
    {
        name: 'Bård',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Eirik',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Endre',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Erik E',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Erik S',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Erlend',
        results: [2],
    },
    {
        name: 'Frederik',
        results: [PARTICIPATED],
    },
    {
        name: 'Fredrik B',
        results: [PARTICIPATED],
    },
    {
        name: 'Fredrik S',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Gustav',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Hallvard',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Herman',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Håken',
        results: [1],
    },
    {
        name: 'Håkon',
        results: [3],
    },
    {
        name: 'Ismar',
        results: [PARTICIPATED],
    },
    {
        name: 'Ivar',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Jan Erik',
        results: [PARTICIPATED],
    },
    {
        name: 'Jørgen',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Ken',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Kent',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Lars Olav',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Marius',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Ole Tommy',
        results: [PARTICIPATED],
    },
    {
        name: 'Peter',
        results: [1],
    },
    {
        name: 'Richard',
        results: [3],
    },
    {
        name: 'Seán',
        results: [PARTICIPATED],
    },
    {
        name: 'Terje',
        results: [4],
    },
    {
        name: 'Tom Erik',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Tor Atle',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Tor Eric',
        results: [NOT_PARTICIPATED],
    },
    {
        name: 'Vetle',
        results: [2],
    },
];

export const rounds = [
    {
        head: 'Street curling (Januar)',
        points: [500, 400, 300, 200],
        participationScore: 100,
    },
];

function calcScore(participant) {
    // participation = -1, non-participation = -2
    let totalScore = 0;
    let scores = [];
    let scoreValues = [];
    _.each(participant.results, function(result, i) {
        let event = rounds[i];
        let numberOfScoredPlaces = event.points.length;

        if (result === PARTICIPATED || result > numberOfScoredPlaces) {
            totalScore += event.participationScore;
            scoreValues.push(event.participationScore);
            scores.push('D (' + event.participationScore + ')');
        } else if (result === NOT_PARTICIPATED) {
            totalScore += 0;
            scoreValues.push(0);
            scores.push('F (0)');
        } else {
            totalScore += event.points[result - 1];
            scoreValues.push(event.points[result - 1]);
            scores.push(result + ' (' + event.points[result - 1] + ')');
        }
    });

    participant.resultList = scores.join(', ');
    participant.score = totalScore;
    participant.scoreValues = scoreValues;
}

function calcCountingScore(participant) {
    participant.countingScore = participant.scoreValues.reduce(
        (acc, curr) => acc + curr,
        0
    );
}

export function getScores() {
    return _.chain(participants)
        .each(calcScore)
        .each(calcCountingScore)
        .orderBy('countingScore', 'desc')
        .value();
}

function compareNumbers(a, b) {
    return a - b;
}
