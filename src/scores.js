import _ from 'lodash';

const PARTICIPATED = -1;
const NOT_PARTICIPATED = -2;

const participants = [
    {
        name: 'Andreas',
        results: [
            1,
            PARTICIPATED
        ],
    },
    {
        name: 'Ann Katrin',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Bård',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Eirik B',
        results: [
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Erik E',
        results: [
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Erik S',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Erlend',
        results: [
            PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Frederik',
        results: [
            PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Fredrik B',
        results: [
            PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Fredrik S',
        results: [
            PARTICIPATED,
            1
        ],
    },
    {
        name: 'Gustav',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Hallvard',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Herman',
        results: [
            2,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Håken',
        results: [
            3,
            PARTICIPATED
        ],
    },
    {
        name: 'Håkon',
        results: [
            PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Ismar',
        results: [
            PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Ivar',
        results: [
            NOT_PARTICIPATED,
            3
        ],
    },
    {
        name: 'Jan Erik',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Jørgen',
        results: [
            PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Ken',
        results: [
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Lars Olav',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Marius',
        results: [
            PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Ole-André',
        results: [
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Ole Tommy',
        results: [
            PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Richard',
        results: [
            NOT_PARTICIPATED,
            2
        ],
    },
    {
        name: 'Seán',
        results: [
            NOT_PARTICIPATED,
            4
        ],
    },
    {
        name: 'Terje',
        results: [
            PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Tom Erik',
        results: [
            PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Tor Eric',
        results: [
            PARTICIPATED,
            PARTICIPATED
        ],
    },
    {
        name: 'Vetle',
        results: [
            4,
            PARTICIPATED
        ],
    },
];

export const rounds = [
    {
        head: 'Racing (2022)',
        points: [500, 400, 300, 200],
        participationScore: 100,
    },
    {
        head: 'Poker (2022)',
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
