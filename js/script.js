const legendes = ["Bloodhound", "Gibraltar", "Lifeline", "Pathfinder", "Wraith",
                "Bangalore", "Caustic", "Mirage", "Octane", "Wattson", "Crypto",
                "Revenant", "Loba", "Rampart", "Horizon", "Fuse",
                "Valkyrie", "Seer", "Ash", "Mad Maggie", "Newcastle"];

const modeDeJeu = document.querySelector('select');
const button = document.getElementsByClassName('submit');
const legende1 = document.getElementById('legende1');
const legende2 = document.getElementById('legende2');
const legende3 = document.getElementById('legende3');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);;
  }

let choix1, choix2, choix3;
button[0].addEventListener('click', e => {

switch (modeDeJeu.value) {

    case '1':
        choix1 = getRandomInt(legendes.length)
        legende1.innerText= legendes[choix1];
        break;

    case '2':
        choix1 = getRandomInt(legendes.length)
        do{
            choix2 = getRandomInt(legendes.length)}
            while (choix2 == choix1)
        legende1.innerText= legendes[choix1];
        legende2.innerText= legendes[choix2];console.log(legendes[choix1], legendes[choix2]);
        break;


    case '3':
        choix1 = getRandomInt(legendes.length)
        do{
            choix2 = getRandomInt(legendes.length)}
            while (choix2 == choix1)
        do{
            choix3 = getRandomInt(legendes.length)}
            while (choix3 == choix1 || choix3 == choix2)
        legende1.innerText= legendes[choix1];
        legende2.innerText= legendes[choix2];
        legende3.innerText= legendes[choix3];
            break;

    default:
        console.log('erreur');
        break;
}
} );
