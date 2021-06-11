const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let mass;
const callback = (line) => {
    mass = line.split(' ')
    console.log(greatestWork2(mass.map(Number)))
    process.exit()
};
rl.on('line', callback)

function greatestWork2(mass) {
    var one = 0;
    var two = 0;
    var minusOne = 0;
    var minusTwo = 0;
    for (var i = 0; i < mass.length; i++) {
        if (one < mass[i] && mass[i] > 0) {
            one = two;
            two = mass[i];
        }
        else if (mass[i] > two && mass[i] > 0) {
            if (one > two)
                two = mass[i];
        }
        if (minusOne > mass[i] && mass[i] < 0 && mass[i] < 0) {
            minusOne = minusTwo;
            minusTwo = mass[i];
        }
        else if (minusTwo > mass[i]) {
            if (minusOne < minusTwo) {
                minusTwo = mass[i];
            }
        }
    }
    if ((one * two) > (minusOne * minusTwo)) {
        return one + " " + two;
    }
    return minusTwo + " " + minusOne;
}

