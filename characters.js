characters = {  
    sol: {
        moral_system: "grey",
        gender: "male",
        favourite: ["pressure"],
        score: 0
    },
    ky: {
        moral_system: "good",
        gender: "male",
        favourite: ["neutral", "pressure"],
        score: 0
    },
    May: {
        moral_system: "good",
        gender: "female",
        favourite: ["neutral", "combos"],
        score: 0
    },
    faust: {
        moral_system: "neutral",
        gender: "male",
        favourite: ["neutral"],
        score: 0
    },
    millia: {
        moral_system: "grey",
        gender: "female",
        favourite: ["mindgames", "neutral"],
        score: 0
    },
    chipp: {
        moral_system: "good",
        gender: "male",
        favourite: ["pressure", "neutral"],
        score: 0
    },
    ino: {
        moral_system: "villian",
        gender: "female",
        favourite: ["mindgames"],
        score: 0
    },
    axl: {
        moral_system: "neutral",
        gender: "male",
        favourite: ["neutral", "pressure"],
        score: 0
    },
    zato: {
        moral_system: "neutral",
        gender: "male",
        favourite: ["combos", "mindgames"],
        score: 0
    },
    pot: {
        moral_system: "neutral",
        gender: "male",
        favourite: ["pressure"],
        score: 0
    },
    ramlethal: {
        moral_system: "neutral",
        gender: "female",
        favourite: ["combos", "pressure"],
        score: 0
    },
    leo: {
        moral_system: "good",
        gender: "male",
        favourite: ["pressure", "mindgames"],
        score: 0
    },
    anji: {
        moral_system: "neutral",
        gender: "male",
        favourite: ["pressure", "neutral"],
        score: 0
    },
    nago: {
        moral_system: "villian",
        gender: "male",
        favourite: ["pressure", "combos"],
        score: 0
    },
    giovanna: {
        moral_system: "neutral",
        gender: "female",
        favourite: ["pressure"],
        score: 0
    }



}
function reset_characters() {
    for (var char in characters) {
        characters[char].score = 0;
    }
}
function check_characters(result) {
    for (var char in characters) {
        if (characters[char][result.key].includes(result.id) || result.id === "none") {
            characters[char].score += result.amount;
        }
    }
}