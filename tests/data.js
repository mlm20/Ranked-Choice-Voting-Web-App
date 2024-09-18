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
        "blue": 16.666666666666664,
        "red": 25,
        "yellow": 33.33333333333333,
        "pink": 25
    },
    {
        "red": 33.33333333333333,
        "yellow": 41.66666666666667,
        "pink": 25
    },
    {
        "red": 50,
        "yellow": 50
    }
];

Data.first_round_maj_results = [
    {
        "red": 45.45454545454545,
        "yellow": 54.54545454545454
    }
];

Data.victory_results = [
    {
        "red": 27.27272727272727,
        "blue": 18.181818181818183,
        "yellow": 18.181818181818183,
        "purple": 18.181818181818183,
        "pink": 18.181818181818183
    },
    {
        "red": 36.36363636363637,
        "yellow": 18.181818181818183,
        "purple": 27.27272727272727,
        "pink": 18.181818181818183
    },
    {
        "red": 45.45454545454545,
        "purple": 36.36363636363637,
        "pink": 18.181818181818183
    },
    {
        "red": 45.45454545454545,
        "purple": 54.54545454545454
    }
];

export default Object.freeze(Data);