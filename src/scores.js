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
