export function nearestNumber(mass: number[], x: number): any {
    let minDiff=Math.abs(x - mass[0]);
    let requiredNum=0
    for (let i = 0; i < mass.length; i++) {
        if (minDiff>Math.abs(x-mass[i])){
            minDiff=Math.abs(x-mass[i])
            requiredNum= mass[i]
        }
    }
    return requiredNum
}