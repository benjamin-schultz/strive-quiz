

class Result {
    constructor(key, id, amount) {
        this.key = key;
        this.id = id;
        this.amount = 1;
    }

    check_strength() {
        if (this.id.includes("strong_")) {
            this.amount = 2;
            this.id = this.id.replace("strong_", "");
        }
    }
}

function get_results() {
    reset_characters();
    var questions = document.querySelectorAll('input[type="radio"]:checked');
    for (i = 0; i < questions.length; i++) {
        result = new Result(questions[i].name, questions[i].id);
        result.check_strength();
        check_characters(result);
    }

    document.getElementById("results_label").innerHTML = characters.chipp.score + " " + characters.faust.score;
};


