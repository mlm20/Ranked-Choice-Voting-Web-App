import fc from "fast-check";
import Algorithm from "../RCV_algorithm.js";
import Data from "./data";

describe("function - who_has_majority", function () {

    it((
        "Test that given some data the function resturns the correct name of " +
        "winner if someone has a majority."
    ), function () {

        const voting_data = Data.array;
        const expected_result = 

        const function_output = Algorithm.who_has_majority(voting_data);

        if (function_output !== expected_result)

    });
});