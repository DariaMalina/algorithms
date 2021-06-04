const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let count = 0;
let a = 0;
let b = 0;
let c = 0;
const callback = (line) => {
    count += 1;
    let strWithArgs = line.toString();
    if (count === 1) {
        a += Number(strWithArgs)
    }
    if (count === 2) {
        b += Number(strWithArgs)
    }
    if (count === 3) {
        c += Number(strWithArgs)
        console.log(triangle(a, b, c))
        process.exit()
    }

}
rl.on('line', callback)

function triangle(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
            if (a + b > c&& b + c > a&& a + c > b){
                return 'YES'
            }
    }
    return 'NO';
}