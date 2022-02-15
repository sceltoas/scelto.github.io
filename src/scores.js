import _ from 'lodash';

const PARTICIPATED = -1;
const NOT_PARTICIPATED = -2;

const participants = [
    {
        name: 'Andreas',
        results: [
            1
        ],
    },
    {
        name: 'Ann Katrin',
        results: [
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Bård',
        results: [
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Eirik B',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Erik E',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Erik S',
        results: [
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Erlend',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Frederik',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Fredrik B',
        results: [
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Fredrik S',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Gustav',
        results: [
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Hallvard',
        results: [
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Herman',
        results: [
            2
        ],
    },
    {
        name: 'Håken',
        results: [
            3
        ],
    },
    {
        name: 'Håkon',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Ismar',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Ivar',
        results: [
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Jan Erik',
        results: [
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Jørgen',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Ken',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Lars Olav',
        results: [
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Marius',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Ole-André',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Ole Tommy',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Richard',
        results: [
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Seán',
        results: [
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Terje',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Tom Erik',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Tor Eric',
        results: [
            PARTICIPATED
        ],
    },
    {
        name: 'Vetle',
        results: [
            4
        ],
    },
];

export const rounds = [
    {
        head: 'Racing (2022)',
        points: [500, 400, 300, 200],
        participationScore: 100,
    },
];

function calcScore(participant) {
    // participation = -1, non-participation = -2
    let totalScore = 0;
    let scores = [];
    let scoreValues = [];
    _.each(participant.results, function (result, i) {
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
