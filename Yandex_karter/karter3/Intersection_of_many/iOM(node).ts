const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let arr1: number[] ;
let arr2: number[];
let counter=0
const callback = (line:string) => {
    counter+=1
    if (counter===1){
        arr1=line.split(' ').map(el=>Number(el))
    }
    if (counter===2) {
        arr2=line.split(' ').map(el=>Number(el))
        console.log(intersectionOfMany(arr1, arr2))
        process.exit()
    }

};
rl.on('line', callback)
function intersectionOfMany(arr1:  number[], arr2:number[]): string {
    let obj = new Set()
    let arrDone: number[] = []
    arr1.forEach(el => obj.add(el))
    arrDone = arr2.filter(el => obj.has(el))
    arrDone.sort((a, b) => a - b);
    return arrDone.join()
}