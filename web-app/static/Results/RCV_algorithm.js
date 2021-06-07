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
        "purple": 1,
        "yellow": 2
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
    const input_data = raw_data;
    let first_vote = {...input_data[0]};
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
        Object.values(single_voter_obj).forEach(function (value) {
            if (value === 1) {
                storage_obj[getKeyByValue(single_voter_obj, value)] += 1;
            }
        });
    });
    return storage_obj;
};

// takes raw data
// returns obj containing percentage each candidate received that round
const percentage_from_round = function (raw_data) {
    // get obj of first choice votes
    const first_choice_votes = add_first_choices(raw_data);

    // create obj to store percentages in
    let storage_obj = empty_candidate_obj(raw_data);

    // get total num votes
    const total_num_votes = raw_data.length;

    // do percentages
    Object.keys(storage_obj).forEach(function (key) {
        storage_obj[key] = (first_choice_votes[key] / total_num_votes) * 100;
    });
    return storage_obj;
};

// returns name of candidate in case of majority
// returns "DRAW" in case of draw
// else returns null
const who_has_majority = function (raw_data) {
    const percentage_obj = percentage_from_round(raw_data);

    let result_type = "";
    let fifty_percent_results = 0;

    Object.keys(percentage_obj).forEach(function (key) {
        // return candidate name in they have a majority
        if (percentage_obj[key] > 50) {
            result_type = "MAJORITY";
            return String(key);
        }
        // handle draws
        if (percentage_obj[key] === 50) {
            fifty_percent_results += 1;
        }
    });
    // identify draws
    if (fifty_percent_results === 2) {
        result_type = "DRAW";
    }
    // return "DRAW" in case of draw
    if (result_type === "DRAW") {
        return "DRAW";
    }
    // else return null
    if (result_type === "") {
        return null;
    }
};

// returns candidate name with plurality
// returns "DRAW" in case of draw
const most_votes = function (raw_data) {

    if (who_has_majority(raw_data) === "DRAW") {
        return "DRAW";
    }
    const added_votes = add_first_choices(raw_data);

    const max_value = Math.max(...Object.values(added_votes));

    return getKeyByValue(added_votes, max_value);
};

// input voting data
// returns name of candidate with fewest votes
// returns "DRAW" in case of draw
const fewest_votes = function (raw_data) {

    if (who_has_majority(raw_data) === "DRAW") {
        return "DRAW";
    }
    const added_votes = add_first_choices(raw_data);

    const min_value = Math.min(...Object.values(added_votes));

    return getKeyByValue(added_votes, min_value);
};

// eliminates last candidate
// distributes their ballots to second choice
// return voter data with the above adjusted
const eliminate_last_candidate = function (raw_data) {
    const eliminated_candidate_name = fewest_votes(raw_data);
    const voting_data = [...raw_data];

    // loop over single array containing voting objects
    voting_data.forEach(function (single_voter_obj) {
        // loop over object keys
        Object.keys(single_voter_obj).forEach(function (key) {
            // if voter had eliminated canidate as their first choice
            // shift preferences by 1
            if (single_voter_obj[eliminated_candidate_name] === 1) {
                single_voter_obj[key] = single_voter_obj[key] - 1;
            }

            // delete entry for eliminated voter
            delete single_voter_obj[eliminated_candidate_name];
        });
    });
    return voting_data;
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
        results.push(percentage_from_round(current_round_data));

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
// export default Object.freeze(Algorithm);

debugger;