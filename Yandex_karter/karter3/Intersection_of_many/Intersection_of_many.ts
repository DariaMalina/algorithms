export function intersectionOfMany(arr1: number[], arr2: number[]): string {
    let obj = new Set()
    let arrDone: number[] = []
    arr1.forEach(el => obj.add(el))
    arrDone = arr2.filter(el => obj.has(el))
    arrDone.sort((a, b) => a - b);
    return arrDone.join()
}