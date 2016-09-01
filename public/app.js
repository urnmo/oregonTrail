(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
   huntBuffalo: huntBuffalos,
}  
  
  function huntBuffalos(name){
    return name.food = name.food + 100
  }

},{}],2:[function(require,module,exports){

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
},{"./events":1,"./travelers":3}],3:[function(require,module,exports){

module.exports = {
    create: createAdventurer,
};


function createAdventurer(name){
   let content = {
       name: name,
       food: 25,
   }
   return content;
}
},{}]},{},[2])