
let Bombo = document.getElementById('Bombo');
let Hithat = document.getElementById('Hithat');
let Ride = document.getElementById('Ride');
let Tarola = document.getElementById('Tarola');
let Toms = document.getElementById('Toms');
let Toms1 = document.getElementById('Toms1');

function reproducir(element) {
    element.play();
    element.currentTime = 0;
}

document.addEventListener('keydown', function(event) {
    
    if (event.key === 'h' || event.key === 'H') {
       reproducir(Bombo);
    }
    if (event.key === 'i' || event.key === 'I') {
        reproducir(Hithat);
    }
    if (event.key === 'o' || event.key === 'O') {
        reproducir(Ride);
    }
    if (event.key === 'u' || event.key === 'U') {
        reproducir(Tarola);
    }
    if (event.key === 'j' || event.key === 'J') {
        reproducir(Toms);
    }
    if (event.key === 'k' || event.key === 'K') {
        reproducir(Toms1);
    }
});



