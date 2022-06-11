const PARTICIPATED = -1;
const NOT_PARTICIPATED = -2;

const participants = [
    {
        name: 'Andreas',
        results: [
            1,
            PARTICIPATED,
            1
        ],
    },
    {
        name: 'Ann Katrin',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Bård',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED,
            2
        ],
    },
    {
        name: 'Eirik B',
        results: [
            PARTICIPATED,
            NOT_PARTICIPATED,
            3
        ],
    },
    {
        name: 'Erik E',
        results: [
            PARTICIPATED,
            NOT_PARTICIPATED,
            1
        ],
    },
    {
        name: 'Erik S',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Erlend',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            3
        ],
    },
    {
        name: 'Frederik',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Fredrik B',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Fredrik S',
        results: [
            PARTICIPATED,
            1,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Gustav',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Hallvard',
        results: [
            NOT_PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Herman',
        results: [
            2,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Håken',
        results: [
            3,
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Håkon',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            1
        ],
    },
    {
        name: 'Ismar',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            2
        ],
    },
    {
        name: 'Ivar',
        results: [
            NOT_PARTICIPATED,
            3,
            3
        ],
    },
    {
        name: 'Jan Erik',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Jørgen',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Ken',
        results: [
            PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Lars Olav',
        results: [
            NOT_PARTICIPATED,
            PARTICIPATED,
            1
        ],
    },
    {
        name: 'Marius',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Ole-André',
        results: [
            PARTICIPATED,
            NOT_PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Ole Tommy',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Richard',
        results: [
            NOT_PARTICIPATED,
            2,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Seán',
        results: [
            NOT_PARTICIPATED,
            4,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Terje',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Tom Erik',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            NOT_PARTICIPATED
        ],
    },
    {
        name: 'Tor Eric',
        results: [
            PARTICIPATED,
            PARTICIPATED,
            2
        ],
    },
    {
        name: 'Vetle',
        results: [
            4,
            PARTICIPATED,
            NOT_PARTICIPATED
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
    {
        head: 'Fangene på fortet (2022)',
        points: [500, 400, 300, 200],
        participationScore: 100,
    },
];

const getRoundScore = (result, index) => {
    const round = rounds[index];
    const numberOfScoredPlaces = round.points.length
    if (result === PARTICIPATED || result > numberOfScoredPlaces) {
        return ({
            score: round.participationScore,
            scoreText: 'D (' + round.participationScore + ')',
        });
    }
    if (result === NOT_PARTICIPATED) {
        return ({
            score: 0,
            scoreText: 'F (0)',
        });
    }
    return ({
        score: round.points[result - 1],
        scoreText: result + ' (' + round.points[result - 1] + ')',
    });
}

const getParticipantScores = ({name, results }) => {
    const roundScores = results.map(getRoundScore);
    const resultList = roundScores.map(x => x.scoreText).join(', ');
    const totalScore = roundScores.reduce((acc, roundScore) => acc + roundScore.score, 0);
    return {
        name,
        resultList,
        totalScore
    };
}

export const getScores = () => participants.map(getParticipantScores).sort((a, b) => b.totalScore - a.totalScore);
