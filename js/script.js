const legendes = ["Bloodhound", "Gibraltar", "Lifeline", "Pathfinder", "Wraith",
                "Bangalore", "Caustic", "Mirage", "Octane", "Wattson", "Crypto",
                "Revenant", "Loba", "Rampart", "Horizon", "Fuse",
                "Valkyrie", "Seer", "Ash", "Mad Maggie", "Newcastle"];

const modeDeJeu = document.querySelector('select');
const button = document.getElementsByClassName('submit');

button[0].addEventListener('click', e => {

switch (modeDeJeu.value) {
    case '1':
        console.log(modeDeJeu[modeDeJeu.value-1].innerText)
        break;
    case '2':
        console.log(modeDeJeu[modeDeJeu.value-1].innerText)
        break;
    case '3':
        console.log(modeDeJeu[modeDeJeu.value-1].innerText)
        break;

    default:
        console.log('erreur');
        break;
}
} );
