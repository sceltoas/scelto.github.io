import _ from 'lodash';

const PARTICIPATED = -1;
const NOT_PARTICIPATED = -2;

const participants = [
    {
        name: 'Ole Tommy',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            4,
            PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Jørgen',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            4,
        ],
    },
    {
        name: 'Ivar',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Jan Erik',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            2,
            3,
            PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Herman',
        results: [
            4,
            PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Ole-André',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            4,
            2,
            PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Tor Eric',
        results: [
            3,
            PARTICIPATED,
            3,
            PARTICIPATED,
            3,
            PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Tom Erik',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            4,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Håken',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            3,
            PARTICIPATED,
            3,
        ],
    },
    {
        name: 'Gustav',
        results: [
            NOT_PARTICIPATED,
            2,
            PARTICIPATED,
            PARTICIPATED,
            2,
            PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Erlend',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            3,
            1,
            PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Marius',
        results: [
            PARTICIPATED,
            4,
            NOT_PARTICIPATED,
            PARTICIPATED,
            2,
            1,
            PARTICIPATED,
        ],
    },
    {
        name: 'Erik S',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Eirik B',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            1,
            1,
        ],
    },
    {
        name: 'Erik E',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Richard',
        results: [
            PARTICIPATED,
            1,
            PARTICIPATED,
            1,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Fredrik B',
        results: [
            PARTICIPATED,
            3,
            PARTICIPATED,
            PARTICIPATED,
            4,
            1,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Fredrik S',
        results: [
            2,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Vetle',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            1,
            1,
            1,
        ],
    },
    {
        name: 'Ken',
        results: [
            1,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Seán',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            1,
            PARTICIPATED,
        ],
    },
    {
        name: 'Lars Olav',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED,
            3,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Terje',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
            3,
            PARTICIPATED,
            3,
        ],
    },
    {
        name: 'Ann Katrin',
        results: [
            PARTICIPATED,
            NOT_PARTICIPATED,
            2,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Bård',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            4,
            PARTICIPATED,
            PARTICIPATED,
        ],
    },
    {
        name: 'Håkon',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            1,
            1,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Ismar',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            4,
        ],
    },
    {
        name: 'Andreas',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            2,
            PARTICIPATED,
            1,
        ],
    },
    {
        name: 'Hallvard',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
            1,
            NOT_PARTICIPATED,
        ],
    },
    {
        name: 'Frederik',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED,
        ],
    },
];

export const rounds = [
    {
        head: 'Bowling (2020)',
        points: [500, 400, 300, 200],
        participationScore: 100,
    },
    {
        head: 'Online poker (2020)',
        points: [500, 400, 300, 200],
        participationScore: 100,
    },
    {
        head: 'Stein, saks og papir (2020)',
        points: [500, 400, 250, 250],
        participationScore: 100,
    },
    {
        head: 'Quiz (2020)',
        points: [500, 400, 300, 200],
        participationScore: 100,
    },
    {
        head: 'Pegasus Project (2021)',
        points: [300, 200, 150, 100],
        participationScore: 100,
    },
    {
        head: 'Lofotfisking (2021)',
        points: [300],
        participationScore: 100,
    },
    {
        head: 'Frisbeegolf (2021)',
        points: [400, 300, 200, 150],
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
