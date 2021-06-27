

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
        switch(questions[i].name) {
            case "moral_system":
                calc_morals(result);
                break;
            case "gender":
                calc_gender(result);
                break;
            case "favourite":
                calc_favourite(result);
                break;

        }
    }

    document.getElementById("results_label").innerHTML = characters.chipp.score + " " + characters.faust.score;
};

function calc_morals(result) {
    if (result.id == "any_good" || result.id == "chaotic_good" || result.id == "pure_good") {
        result.id = "good";
    }
    check_characters(result); 
}

function calc_gender(result) {
    result.check_strength();
    
    check_characters(result);
}

function calc_favourite(result) {
    check_characters(result);
}

function calc_important(result) {
    check_characters(result);
}



