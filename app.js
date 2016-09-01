
let travelers = require('./travelers');
let events = require('./events');

window.addEventListener('load', function () {
    // PART 1: return an oregon trail traveler
    let solo = travelers.create('Jeb');
    // solo = { name: 'Jeb', food: 25 };
console.log (solo);
    // PART 2: things that happen
    let buffalo = events.huntBuffalo(solo);
    // // solo = { name: 'Jeb', food: 125 };
    console.log (solo)
    // solo = { name: 'Jeb', food: 225 };


});