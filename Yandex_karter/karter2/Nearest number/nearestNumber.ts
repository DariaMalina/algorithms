export function nearestNumber(mass:number[], x:number):any {
    if (mass.includes(x)){
        return x
    } else {
        for (let i = x-1; i < x; i--) {
            if (mass.includes(i)) {
                return i
            }
        }}
}