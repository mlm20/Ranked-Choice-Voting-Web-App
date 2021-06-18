import Algorithm from "../RCV_algorithm.js";
import Data from "./data.js";

describe("function - Algorithm.results", function () {

    it((
        "Test whether the results function outputs the correct results array " +
        "test cases for no victory, victory and draw." +
        "Results were calculated by hand and compared to function output"
    ), function () {

        const examples = [
            // regular vote ending in draw
            [Data.nowinner, Data.nowinner_results],
            // person has majority in first round
            [Data.first_round_maj, Data.first_round_maj_results],
            // regular vote ending in victory
            [Data.victory, Data.victory_results]
        ];

        examples.forEach(function ([input_data, expected_output]) {

            const output = Algorithm.results(input_data);

            // in order to compare two Objects they had to be stringified
            if (JSON.stringify(expected_output) !== JSON.stringify(output)) {
                throw (
                    `Expected "${input_data}" to output as ` +
                    `"${expected_output}" instead we got "${output}"`
                );
            }
        });
    });

    it((
        "In the last instant runoff round, there exists a candidate " +
        "with greater than or equal to 50% of the vote."
    ), function () {

        const examples = [
            Data.nowinner,
            Data.first_round_maj,
            Data.victory
        ];

        examples.forEach(function (input_data) {

            let fifty_plus_counter = 0;

            const final_round_obj = Algorithm.results(input_data)[
                Algorithm.results(input_data).length - 1
            ];

            Object.values(final_round_obj).forEach(function (value) {
                if (value >= 50) {
                    fifty_plus_counter += 1;
                }
            });

            if (fifty_plus_counter === 0) {
                throw (
                    "There is no candidate in the final round with >= 50 %"
                );
            }
        });
    });
});

describe("function - percentage_of_winner", function () {

    it((
        "If there is a winner in the election, the function should " +
        "return their name."
    ), function () {

        const examples = [
            [Data.first_round_maj, 54.54545454545454],
            [Data.victory, 54.54545454545454]
        ];

        examples.forEach(function ([input_data, percentage]) {

            const output = Algorithm.percentage_of_winner(input_data);

            if (output !== percentage) {
                throw (
                    `Expected percentage of winner to be ${percentage}` +
                    `instead we got ${output}`
                );
            }
        });
    });

    it((
        "If the election ends in a draw, the function should return DRAW"
    ), function () {

        const example = Data.nowinner;

        if (Algorithm.percentage_of_winner(example) !== "DRAW") {
            throw (
                "Expected function to return DRAW, since simulated election " +
                "ended in a draw."
            );
        }
    });
});