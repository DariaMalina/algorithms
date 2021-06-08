const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let count=0;
let mass;
let elemX=0
const callback = (line) => {
    count+=1
    if (count===2){
        mass=line.split(' ')
    }
    if (count===3){
        elemX=Number(line)
        console.log(nearestNumber(mass,elemX))
        process.exit()
    }
};
rl.on('line', callback)
"use strict";
function nearestNumber(mass, x) {
    if (mass.includes(x)) {
        return x;
    }
    else {
        for (let i = x - 1; i < x; i--) {
            if (mass.includes(i)) {
                return i;
            }
        }
    }
}