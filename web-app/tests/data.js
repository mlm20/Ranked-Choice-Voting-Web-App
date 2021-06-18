const Data = Object.create(null);

Data.nowinner = [
    {
        "blue": 4,
        "red": 1,
        "yellow": 3,
        "pink": 2
    },
    {
        "blue": 1,
        "red": 2,
        "yellow": 3,
        "pink": 4
    },
    {
        "blue": 2,
        "red": 3,
        "yellow": 1,
        "pink": 4
    },
    {
        "blue": 4,
        "red": 2,
        "yellow": 1,
        "pink": 3
    },
    {
        "blue": 4,
        "red": 3,
        "yellow": 2,
        "pink": 1
    },
    {
        "blue": 2,
        "red": 1,
        "yellow": 3,
        "pink": 4
    },
    {
        "blue": 3,
        "red": 2,
        "yellow": 4,
        "pink": 1
    },
    {
        "blue": 4,
        "red": 2,
        "yellow": 1,
        "pink": 3
    },
    {
        "blue": 1,
        "red": 3,
        "yellow": 2,
        "pink": 4
    },
    {
        "blue": 2,
        "red": 3,
        "yellow": 4,
        "pink": 1
    },
    {
        "blue": 3,
        "red": 4,
        "yellow": 1,
        "pink": 2
    },
    {
        "blue": 4,
        "red": 1,
        "yellow": 2,
        "pink": 3
    }
];

Data.victory = [
    {
        "red": 1,
        "blue": 3,
        "yellow": 2,
        "purple": 5,
        "pink": 4
    },
    {
        "red": 1,
        "blue": 3,
        "yellow": 4,
        "purple": 2,
        "pink": 5
    },
    {
        "red": 5,
        "blue": 4,
        "yellow": 3,
        "purple": 2,
        "pink": 1
    },
    {
        "red": 1,
        "blue": 2,
        "yellow": 3,
        "purple": 4,
        "pink": 5
    },
    {
        "red": 2,
        "blue": 1,
        "yellow": 4,
        "purple": 5,
        "pink": 3
    },
    {
        "red": 2,
        "blue": 3,
        "yellow": 1,
        "purple": 5,
        "pink": 4
    },
    {
        "red": 3,
        "blue": 4,
        "yellow": 5,
        "purple": 2,
        "pink": 1
    },
    {
        "red": 4,
        "blue": 3,
        "yellow": 1,
        "purple": 2,
        "pink": 5
    },
    {
        "red": 4,
        "blue": 3,
        "yellow": 2,
        "purple": 1,
        "pink": 5
    },
    {
        "red": 4,
        "blue": 1,
        "yellow": 3,
        "purple": 2,
        "pink": 5
    },
    {
        "red": 5,
        "blue": 3,
        "yellow": 2,
        "purple": 1,
        "pink": 4
    }
];

Data.first_round_maj = [
    {red: 1, yellow: 2},
    {red: 1, yellow: 2},
    {red: 2, yellow: 1},
    {red: 2, yellow: 1},
    {red: 2, yellow: 1},
    {red: 1, yellow: 2},
    {red: 1, yellow: 2},
    {red: 2, yellow: 1},
    {red: 2, yellow: 1},
    {red: 1, yellow: 2},
    {red: 2, yellow: 1}
];

////
// Expected Results Outputs
////

Data.nowinner_results = [
    {
        "blue": 50 / 3,
        "red": 25,
        "yellow": 100 / 3,
        "pink": 25
    },
    {
        "red": 100 / 3,
        "yellow": 125 / 3,
        "pink": 25
    },
    {
        "red": 50,
        "yellow": 50
    }
];

Data.first_round_maj_results = [
    {
        "red": 500 / 11,
        "yellow": 600 / 11
    }
];

Data.victory_results = [
    {
        "red": 300 / 11,
        "blue": 200 / 11,
        "yellow": 200 / 11,
        "purple": 200 / 11,
        "pink": 200 / 11
    },
    {
        "red": 400 / 11,
        "yellow": 200 / 11,
        "purple": 300 / 11,
        "pink": 200 / 11
    },
    {
        "red": 500 / 11,
        "purple": 400 / 11,
        "pink": 200 / 11
    },
    {
        "red": 500 / 11,
        "purple": 600 / 11
    }
];

export default Object.freeze(Data);