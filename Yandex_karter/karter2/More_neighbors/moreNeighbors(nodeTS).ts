const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let mass;
const callback = (line:string) => {
    mass=line.split(' ')
    console.log(moreNeighbors(mass.map(Number)))
    process.exit()
};
rl.on('line', callback)
function moreNeighbors(mass: number[]): number {
    let counter = 0;
    for (let i = 1; i < mass.length - 1; i++) {
        if (mass[i] > mass[i - 1] && mass[i] > mass[i + 1]) {
            counter += 1
        }
    }
    return counter
}