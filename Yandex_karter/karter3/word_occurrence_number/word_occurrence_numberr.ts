export interface NumbObj {
    [index: string]: number
}

export function wordOccurrenceNumber(str: string): string {
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