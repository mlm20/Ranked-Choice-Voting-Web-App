const candidate_list = JSON.parse(sessionStorage.candidate_list);
const num_candidates = candidate_list.length;

const see_results_button = document.getElementById("SeeResultsButton");

see_results_button.onclick = function () {
    console.log("Moved to results page");
    location.href = "../Results/Results.html";
};