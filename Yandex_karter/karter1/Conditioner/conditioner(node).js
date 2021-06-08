const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let count = 0;
let tR = 0;
let tD = 0;
const callback = (line) => {
    count += 1;
    let strWithArgs = line.toString();
    if (count === 1) {
        tR = Number(strWithArgs.split(" ")[0]);
        tD = Number(strWithArgs.split(" ")[1]);
    }
    const conf = strWithArgs
    if (count === 2) {
        console.log(getDesiredTemp(tR, tD, conf))
        process.exit()
    }
};
rl.on('line', callback)

function getDesiredTemp(tRoom, tDesired, config) {
    let Mode;
    (function (Mode) {
        Mode["Heat"] = "heat";
        Mode["Freeze"] = "freeze";
        Mode["Auto"] = "auto";
        Mode["Fan"] = "fan";
    })(Mode || (Mode = {}));

    export function getDesiredTemp(tRoom, tDesired, config) {
        switch (config) {
            case Mode.Heat: {
                if (tRoom < tDesired) {
                    return tDesired;
                }
                return tRoom;
            }
            case Mode.Freeze: {
                if (tRoom > tDesired) {
                    return tDesired;
                }
                return tRoom;
            }
            case Mode.Auto: {
                return tDesired;
            }
            case Mode.Fan: {
                return tRoom;
            }
            default: {
                return tRoom;
            }
        }
    }
}