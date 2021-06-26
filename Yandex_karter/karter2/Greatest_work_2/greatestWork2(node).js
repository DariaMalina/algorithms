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

function greatestWork2(arr) {
    var one = 0;
    var two = 0;
    var minusOne = 0;
    var minusTwo = 0;
    for (var i = 0; i < arr.length; i++) {
        if (one < arr[i] && arr[i] > 0) {
            two = one;
            one = arr[i];
        }
        else if (arr[i] > two && arr[i] > 0) {
            two = arr[i];
        }
        if (minusOne > arr[i] && arr[i] < 0) {
            minusTwo = minusOne;
            minusOne = arr[i];
        }
        else if (minusTwo > arr[i] && arr[i] < 0) {
            minusTwo = arr[i];
        }
    }
    if ((one * two) > (minusOne * minusTwo)) {
        return two + " " + one;
    }
    else if ((one * two) < (minusOne * minusTwo)) {
        return minusOne + " " + minusTwo;
    }
    else if (arr.length===2){
        if (arr[0]>arr[1]){
            return arr[1]+ " " + arr[0];
        }
        return arr[0]+ " " + arr[1];
    }
}
