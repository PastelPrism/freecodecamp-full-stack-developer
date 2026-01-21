// More words to choose from
const adjectives = ["blue", "purple", "gigantic", "smelly", "tiny", "golden", "invisible"];
const nouns = ["monster", "robot", "wizard", "penguin", "unicorn", "dragon"];
const verbs = ["happy", "angry", "confused", "excited", "sleepy", "hungry"];
const places = ["cabin", "castle", "space station", "underwater cave", "treehouse"];
const adjectives2 = ["red", "neon green", "sparkly", "leopard-print", "metallic"];
const nouns2 = ["wood", "pizza", "old socks", "diamonds", "marshmallows"];

const pick = (list) => list[Math.floor(Math.random() * list.length)];

function generateStories() {

    let adjective = pick(adjectives);
    let noun = pick(nouns);
    let verb = pick(verbs);
    let place = pick(places);
    let adjective2 = pick(adjectives2);
    let noun2 = pick(nouns2);

    let firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

    adjective = pick(adjectives);
    noun = pick(nouns);
    verb = pick(verbs);
    place = pick(places);
    adjective2 = pick(adjectives2);
    noun2 = pick(nouns2);

    let secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

    document.getElementById("story1").innerText = firstStory;
    document.getElementById("story2").innerText = secondStory;
}

// Added event listeners
document.getElementById("refreshBtn").addEventListener("click", generateStories);
generateStories();