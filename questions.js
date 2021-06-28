

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

    var winner = check_winner();
    var name = winner[0].name;
    var img = document.createElement("img");
    img.src = winner[0].image; 
    var src = document.getElementById("header");
    src.appendChild(img);
    document.getElementById("results_label").innerHTML = "<a href=https://www.dustloop.com/wiki/index.php?title=GGST/" + name.replace(" ", "_") + ">" + name + "</a>";
    openModal();
};

function openModal() {
    document.getElementById('modal').style.display='block';
}

function closeModal() {
    document.getElementById('modal').style.display='none';
}
