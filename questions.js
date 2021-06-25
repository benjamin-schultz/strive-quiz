

function get_results() {
    reset_characters();
    var questions = document.querySelectorAll('input[type="radio"]:checked');
    for (i = 0; i < questions.length; i++) {
        switch(questions[i].name) {
            case "moral_system":
                calc_morals(questions[i].id);
            case "gender":
                calc_gender(questions[i].id);

        }
    }

    document.getElementById("results_label").innerHTML = characters.chipp.score + " " + characters.faust.score;
};

function calc_morals(id) {
    if (id == "any_good" || id == "chaotic_good" || id == "pure_good") {
        check_characters("moral_system", "good", 1);
    } else if (id == "no_opinion") {
        return;
    } else {
        check_characters("moral_system", id, 1);
    }
}

function calc_gender(id) {
    var amount = 1;
    if (id.includes("strongly")) {
        amount = 2;
    }
    if (id == "none") {
        return;
    }
    if (id.includes("male")) {
        check_characters("gender", "male", amount);
    } else {
        check_characters("gender", "female", amount);
    }
}

function check_characters(key, value, amount) {
    for (var char in characters) {
        if (characters[char][key] == value) {
            characters[char].score += amount;
        }
    }
}

function reset_characters() {
    for (var char in characters) {
        characters[char].score = 0;
    }
}

characters = {
    chipp: {
        moral_system: "good",
        gender: "male",
        score: 0
    },
    faust: {
        moral_system: "neutral",
        gender: "male",
        score: 0
    }

}