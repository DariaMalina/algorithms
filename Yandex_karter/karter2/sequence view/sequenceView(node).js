const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let mass=[]
const callback = (line) => {
    if (line=== '-2000000000'){
        console.log(sequenceViewNode(mass))
        process.exit()
    }
    mass.push(Number(line))
};
rl.on('line', callback)
"use strict";
exports.__esModule = true;
exports.sequenceView = void 0;
var Answer;
(function (Answer) {
    Answer["CONSTANT"] = "CONSTANT";
    Answer["ASCENDING"] = "ASCENDING ";
    Answer["WEAKLYASCENDING"] = "WEAKLY ASCENDING ";
    Answer["DESCENDING"] = "DESCENDING ";
    Answer["WEAKLYDESCENDING"] = "WEAKLY DESCENDING";
    Answer["RANDOM"] = "RANDOM ";
})(Answer || (Answer = {}));
function sequenceViewNode(mass) {
    var asc = mass.every(function (el, i, list) {
        return i === 0 || el > list[i - 1];
    });
    var ascw = mass.every(function (el, i, list) {
        return i === 0 || el >= list[i - 1];
    });
    var cnst = mass.every(function (el, i, list) {
        return el === list[0];
    });
    var des = mass.every(function (el, i, list) {
        return i === 0 || el < list[i - 1];
    });
    var wdes = mass.every(function (el, i, list) {
        return i === 0 || el <= list[i - 1];
    });
    if (cnst) {
        return Answer.CONSTANT;
    }
    if (asc) {
        return Answer.ASCENDING;
    }
    if (ascw) {
        return Answer.WEAKLYASCENDING;
    }
    if (des) {
        return Answer.DESCENDING;
    }
    if (wdes) {
        return Answer.WEAKLYDESCENDING;
    }
    return Answer.RANDOM;
}

