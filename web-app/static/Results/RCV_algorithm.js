////
// Header
////

const Algorithm = Object.create(null);

// example data to debug with
// DELETEME // before commit
const example_raw_data = [
    {
        "blue": 1,
        "red": 3,
        "purple": 2,
        "yellow": 4
    },
    {
        "blue": 2,
        "red": 3,
        "purple": 4,
        "yellow": 1
    },
    {
        "blue": 1,
        "red": 2,
        "purple": 4,
        "yellow": 3
    },
    {
        "blue": 3,
        "red": 4,
        "purple": 2,
        "yellow": 1
    }
];

////
// Helper Functions
////

// adds up the first choice results from raw data
// return object of candidate percentages
const add_first_choices = function (raw_data) {

};

// returns name of candidate in case of majority
// else returns null
const who_has_majority = function (raw_data) {

};

// eliminates last candidate
// distributes their ballots
const eliminate_last_candidate = function (raw_data) {

};









////
// Public Interface
////


// return an array of objects for results in each runoff round
Algorithm.results = function (raw_data) {

    // assign input data to variable
    let current_round_data = raw_data;

    // array to store results objects
    const results = [];

    // while no candidate has a majority
    while (who_has_majority(current_round_data) === null) {

        // add results round to array
        results.push(add_first_choices(current_round_data));

        // eliminate last place candidate and distribute their ballots
        current_round_data = eliminate_last_candidate(current_round_data);
    }

    return results;
};

// return string of the name of election winner
Algorithm.name_of_winner = function (raw_data) {

    // get object of final round results
    const final_round_obj = Algorithm.results(raw_data)[Algorithm.results(
        raw_data).length - 1];

    // loop

    
};

Algorithm.percentage_of_winner = function (raw_data) {

};

Algorithm.how_many_rounds = function (raw_data) {

};

// export module
export default Object.freeze(Algorithm);

// results = [
//     {
//         "blue": 48.2,
//         "red": 45.1,
//         "yellow": 5.6,
//         "green": 1.1
//     },
//     {
//         "blue": 49.9,
//         "red": 47.2,
//         "yellow": 5.7
//     },
//     {
//         "blue": 52,
//         "red": 48
//     }
// ];