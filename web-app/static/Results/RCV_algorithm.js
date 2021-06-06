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

// returns key from object value
const getKeyByValue = function (object, value) {
    return Object.keys(object).find((key) => object[key] === value);
};

// returns object of candidate names, each with value of 0
const empty_candidate_obj = function (raw_data) {
    let first_vote = raw_data[0];
    const keys = Object.keys(first_vote);
    keys.forEach(function (key) {
        first_vote[key] = 0;
    });
    return first_vote;
};

// adds up the first choice results from raw data
// return object containing number of first choice votes each candidate received
const add_first_choices = function (raw_data) {
    // create object to store number of first choices
    const storage_obj = empty_candidate_obj(raw_data);

    // loop through results, adding first choices to storage_obj
    raw_data.forEach(function (single_voter_obj) {
        let first_vote_key = getKeyByValue(single_voter_obj, 1);
        storage_obj[first_vote_key] += 1;
    });

    return storage_obj;
};

const percentage_from_round = function (raw_data) {
    // get obj of first choice votes
    const num_of_votes = add_first_choices(raw_data);

    // create obj to store percentages in
    let storage_obj = empty_candidate_obj(raw_data);

    // get total num votes
    // const total_num_votes = 

};

// returns candidate name with plurality
const most_votes = function (results_obj) {
    const max_value = Math.max(...Object.values(results_obj));
    return getKeyByValue(results_obj, max_value);
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

    // apply helper function
    return most_votes(final_round_obj);
};

// return percentage won by in final round
Algorithm.percentage_of_winner = function (raw_data) {
    // get object of final round results
    const final_round_obj = Algorithm.results(raw_data)[Algorithm.results(
        raw_data).length - 1];

    return final_round_obj.most_votes(final_round_obj);
};

// returns number of rounds data
Algorithm.how_many_rounds = (raw_data) => Algorithm.results(raw_data).length;

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

debugger;