enum Answer {
    CONSTANT = 'CONSTANT',
    ASCENDING = 'ASCENDING ',
    WEAKLYASCENDING = 'WEAKLY ASCENDING ',
    DESCENDING = 'DESCENDING ',
    WEAKLYDESCENDING = 'WEAKLY DESCENDING',
    RANDOM = 'RANDOM '
}
export function sequenceView(mass: number[]): string {
    let asc = mass.every(function (el, i, list) {
        return i === 0 || el > list[i - 1];
    })
    let ascw = mass.every(function (el, i, list) {
        return i === 0 || el >= list[i - 1];
    })
    let cnst = mass.every(function (el, i, list) {
        return el === list[0];
    })
    let des = mass.every(function (el, i, list) {
        return i === 0 || el < list[i - 1];
    })
    let wdes = mass.every(function (el, i, list) {
        return i === 0 || el <= list[i - 1];
    })
    if (cnst) {
        return Answer.CONSTANT
    }
    if (asc) {
        return Answer.ASCENDING
    }
    if (ascw) {
        return Answer.WEAKLYASCENDING
    }
    if (des) {
        return Answer.DESCENDING
    }
    if (wdes) {
        return Answer.WEAKLYDESCENDING
    }
    return Answer.RANDOM
}