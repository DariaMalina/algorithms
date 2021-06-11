const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let mass;
const callback = (line) => {
    mass = line.split(' ')
    console.log(greatestWork2Node(mass.map(Number)))
    process.exit()
};
rl.on('line', callback)

function greatestWork2Node(mass) {
    let one = 0;
    let two = 0;
    let done = mass.sort(function (a, b) {
        return b - a;
    });
    if ((done[0] * done[1]) > (done[done.length - 1] * done[done.length - 2])) {
        one = done[0];
        two = done[1];
    } else {
        one = done[done.length - 1];
        two = done[done.length - 2]
    }
    return one + " " + two;
}
