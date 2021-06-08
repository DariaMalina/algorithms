import {equation} from "./equationWithRoot";
import {createInterface} from 'readline'
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
let count = 0;
let a1 = 0;
let b2 = 0;
let c3 = 0
const callback = (line:string) => {
    count += 1;
    let strWithArgs = line;
    if (count === 1) {
        a1 = Number(strWithArgs)
    }
    if (count === 2) {
        b2 = Number(strWithArgs)
    }
    if (count === 3) {
        c3 = Number(strWithArgs)
        console.log(equation(a1, b2, c3))
        process.exit()
    }

};
rl.on('line', callback)



