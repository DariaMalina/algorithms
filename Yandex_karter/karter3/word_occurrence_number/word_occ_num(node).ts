const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const callback = (line:string) => {
        console.log(wordOccurrenceNumber(line))
        process.exit()
};
rl.on('line', callback)
interface NumbObj {
    [index: string]: number
}
function wordOccurrenceNumber(str: string): string {
    let obj: NumbObj = {}
    let arrString = str.split(' ')
    let array = arrString.map(el => {

        if (obj.hasOwnProperty(el)) {
            obj[el] += 1
        }
        if (!obj.hasOwnProperty(el)) {
            obj[el] = 0
        }
        return obj[el]
    })
    return array.join(' ')
}