const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let count = 0;
let arr = []
const callback = (line) => {
    count += 1;
    arr.push(Number(line))
    if (count === 4) {
        console.log(equation(arr))
        process.exit()
    }
};
rl.on('line', callback)
const ANSWER={
    Inf:'INF',
    No:'NO'
}

function equation(arr) {
    const [a, b, c, d] = arr
    const x1 = (-b / a)
    const x2 = (-d / c)
    if (a === 0 && b === 0) {
        return ANSWER.Inf
    }
    if (x1 === x2) {
        return ANSWER.No
    }
    if (x1 % 1) {
        return ANSWER.No
    } else {
        return x1
    }
}