export function wordCount(arr:string[]):number {
    let obj = new Set()
    arr.forEach(el => obj.add(el))
    return obj.size
}
