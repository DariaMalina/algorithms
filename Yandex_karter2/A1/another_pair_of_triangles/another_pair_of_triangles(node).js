const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let count = 0;
let arr = []
const callback = (line) => {
    count += 1;

    if (count !==1 ) {
        arr.push(Number(line))
        console.log(triangles(arr))
        process.exit()
    }
};
rl.on('line', callback)
const ANSWER = {
    Inf: 'INF',
    No: 'NO'
}

function triangles(arr) {
    const x1=arr[0][1];
    const x2=arr[2][3];
    const x3=arr[4][5];
    const x4=arr[6][7];
    return 'l'
}