const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let mass;
const callback = (line) => {
    mass = line.split(' ')
    console.log(moreNeighbors(mass.map(Number)))
    process.exit()
};
rl.on('line', callback)
"use strict";
exports.__esModule = true;
exports.moreNeighbors = void 0;

function moreNeighbors(mass) {
    var counter = 0;
    for (var i = 1; i < mass.length; i++) {
        if (mass[i] > mass[i - 1] && mass[i] > mass[i + 1]) {
            counter += 1;
        }
    }
    return counter;
}

