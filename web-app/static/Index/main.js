const add_candidate_button = document.getElementById("add-candidate-button");
const start_election = document.getElementById("start-election-button");
const candidate_input_text = document.getElementById("candidate-input-field");

const cloneTemplate = function (id) {
    return document.importNode(document.getElementById(id).content, true);
};

add_candidate_button.onclick = function () {
    console.log(candidate_input_text.value);
};

const randint = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};
