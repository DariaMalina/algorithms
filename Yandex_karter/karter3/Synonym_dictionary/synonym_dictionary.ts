export interface numberObj {
    [index: string]: string
}

export  type ArrayType = [string, string]

export function vocabulary(arr: ArrayType[], str: string): string {
    let obj: numberObj = {};
    arr.forEach(el => {
        obj[el[0]] = el[1]
        obj[el[1]] = el[0]
    })
    return obj[str]
}