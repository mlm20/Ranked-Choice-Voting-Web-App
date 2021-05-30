const add_candidate_button = document.getElementById("add-candidate-button");
const start_election = document.getElementById("start-election-button");
const candidate_input_text = document.getElementById("candidate-input-field");
const candidate_list_area = document.getElementById("Candidate-list");

const cloneTemplate = function (id) {
    return document.importNode(document.getElementById(id).content, true);
};

const push_to_session_storage = function (input) {
    let JSON_String = JSON.stringify(input);
    sessionStorage.setItem("candidate_list", JSON_String);
};

const reset_text_field = function (text_field_id) {
    document.getElementById(text_field_id).value = "";
}; // clears the text for input field

const Candidate_List = []; // declaration of candidate list

add_candidate_button.onclick = function () {
    console.log(candidate_input_text.value);
    // log for debugging
    Candidate_List.push(candidate_input_text.value);
    // add candidate name to array
    push_to_session_storage(Candidate_List);
    // push array to session storage
    reset_text_field("candidate-input-field");
    // clear candidate input field
};

start_election.onclick = function () {
    console.log("Election started");
    location.href = "../Voting/Voting.html";
};