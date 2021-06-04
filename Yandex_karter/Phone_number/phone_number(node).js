const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let count = 0;
let nM = '';
let n1 = '';
let n2 = '';
let n3 = ''
const callback = (line) => {
    count += 1;
    let strWithArgs = line.toString();
    if (count === 1) {
        nM = strWithArgs
    }
    if (count === 2) {
        n1 = strWithArgs
        console.log(phoneNumber(nM, n1))
    }
    if (count === 3) {
        n2 = strWithArgs
        console.log(phoneNumber(nM, n2))
    }
    if (count === 4) {
        n3 = strWithArgs
        console.log(phoneNumber(nM, n3))
        process.exit()
    }
};
rl.on('line', callback)


function phoneNumber(numberMain, numberCompare) {
    let yesStr = 'YES';
    let noStr = "NO";
    let nM = numberMain.replace(/[^0-9]/g, '');
    let n1 = numberCompare.replace(/[^0-9]/g, '');
    switch (nM.length | n1.length) {
        case 11 | 11:
            if (nM.slice(-10) === n1.slice(-10)) {
                return yesStr
            }
            ;
        case 7 | 7:
            if (nM.slice(-10) === n1.slice(-10)) {
                return yesStr
            }
            ;
        case 11 | 7:
            n1 = '495' + n1
            if (nM.slice(-10) === n1) {
                return yesStr
            }
            ;
        case 7 | 11:
            nM = '495' + nM
            if (nM === n1.slice(-10)) {
                return yesStr
            }
        default:
            return noStr
    }

}