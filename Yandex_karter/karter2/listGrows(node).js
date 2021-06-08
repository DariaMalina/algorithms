const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let mass;
const callback = (line) => {
    mass = line.split(' ')
    console.log(listGrows(mass))
    process.exit()

};
rl.on('line', callback)
"use strict";
exports.__esModule = true;
exports.listGrows = void 0;
var Answer;
(function (Answer) {
    Answer["YES"] = "YES";
    Answer["NO"] = "NO";
})(Answer || (Answer = {}));

function listGrows(list) {
    if (list.length >= 1) {
        var ans = list.every(function (el, i, list) {
            return i === 0 || el > list[i - 1];
        });
        if (ans === true) {
            return Answer.YES;
        }
        return Answer.NO;
    }
    return Answer.NO;
}

