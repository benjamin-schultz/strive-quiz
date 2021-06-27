characters = {  
    sol: {
        name: "Sol Badguy",
        playstyle: "prepared",
        moral_system: "grey",
        gender: "male",
        favourite: ["pressure"],
        important: ["all_rounder", "damage"],
        zoning: 0.0,
        rushdown: 1.0,
        oneplayer: "sometimes",
        score: 0
    },
    ky: {
        name: "Ky Kiske",
        playstyle: "prepared",
        moral_system: "good",
        gender: "male",
        favourite: ["neutral", "pressure"],
        important: ["all_rounder"],
        zoning: 0.5,
        rushdown: 0.5,
        oneplayer: "no",
        score: 0
    },
    May: {
        name: "May",
        playstyle: "rewarding",
        moral_system: "good",
        gender: "female",
        favourite: ["neutral", "combos"],
        important: ["mobility", "damage"],
        zoning: 0.25,
        rushdown: 0.75,
        oneplayer: "no",
        score: 0
    },
    faust: {
        name: "Faust",
        playstyle: "specialist",
        moral_system: "neutral",
        gender: "male",
        favourite: ["neutral"],
        important: ["utility"],
        zoning: 1.0,
        rushdown: 0.0,
        oneplayer: "no",
        score: 0
    },
    millia: {
        name: "Millia Rage",
        playstyle: "specialist",
        moral_system: "grey",
        gender: "female",
        favourite: ["mindgames", "neutral"],
        important: ["mobility", "utility"],
        zoning: 0.0,
        rushdown: 1.0,
        oneplayer: "yes",
        score: 0
    },
    chipp: {
        name: "Chipp Zanuff",
        playstyle: "prepared",
        moral_system: "good",
        gender: "male",
        favourite: ["pressure", "neutral"],
        important: ["mobility", "utility"],
        zoning: 0.0,
        rushdown: 1.0,
        oneplayer: "sometimes",
        score: 0
    },
    ino: {
        name: "I-No",
        playstyle: "rewarding",
        moral_system: "evil",
        gender: "female",
        favourite: ["mindgames"],
        important: ["mobility"],
        zoning: 0.0,
        rushdown: 1.0,
        oneplayer: "yes",
        score: 0
    },
    axl: {
        name: "Axl Low",
        playstyle: "specialist",
        moral_system: "neutral",
        gender: "male",
        favourite: ["neutral", "pressure"],
        important: ["all_rounder"],
        zoning: 1.0,
        rushdown: 0.0,
        oneplayer: "no",
        score: 0
    },
    zato: {
        name: "Zato-1",
        playstyle: "rewarding",
        moral_system: "neutral",
        gender: "male",
        favourite: ["combos", "mindgames"],
        important: ["utility", "damage"],
        zoning: 0.25,
        rushdown: 0.75,
        oneplayer: "yes",
        score: 0
    },
    pot: {
        name: "Potemkin",
        playstyle: "rewarding",
        moral_system: "neutral",
        gender: "male",
        favourite: ["pressure"],
        important: ["health", "damage"],
        zoning: 0.5,
        rushdown: 0.5,
        oneplayer: "no",
        score: 0
    },
    ramlethal: {
        name: "Ramlethal Valentine",
        playstyle: "rewarding",
        moral_system: "neutral",
        gender: "female",
        favourite: ["combos", "pressure"],
        important: ["all_rounder"],
        zoning: 0.75,
        rushdown: 0.25,
        oneplayer: "no",
        score: 0
    },
    leo: {
        name: "Leo Whitefang",
        playstyle: "rewarding",
        moral_system: "good",
        gender: "male",
        favourite: ["pressure", "mindgames"],
        important: ["damage", "health"],
        zoning: 0.0,
        rushdown: 1.0,
        oneplayer: "sometimes",
        score: 0
    },
    anji: {
        name: "Anji Mito",
        playstyle: "specialist",
        moral_system: "neutral",
        gender: "male",
        favourite: ["pressure", "neutral"],
        important: ["all_rounder"],
        zoning: 0.25,
        rushdown: 0.75,
        oneplayer: "no",
        score: 0
    },
    nago: {
        name: "Nagoriyuki",
        playstyle: "specialist",
        moral_system: "evil",
        gender: "male",
        favourite: ["pressure", "combos"],
        important: ["damage", "health"],
        zoning: 0.75,
        rushdown: 0.25,
        oneplayer: "no",
        score: 0
    },
    giovanna: {
        name: "Giovanna",
        playstyle: "prepared",
        moral_system: "neutral",
        gender: "female",
        favourite: ["pressure"],
        important: ["mobility", "all_rounder"],
        zoning: 0.0,
        rushdown: 1.0,
        oneplayer: "sometimes",
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
        if (typeof(characters[char][result.key]) === "number") {
            check_numbers(char, result);
        } else {
            check_strings(char, result);
        }
    }
}

function check_strings(char, result) {
    if (characters[char][result.key].includes(result.id) || result.id === "none") {
        characters[char].score += result.amount;
    }
}

function check_numbers(char, result) {
    characters[char].score += result.amount * characters[char][result.key];
}