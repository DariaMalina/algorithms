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
        return i === list.length-1 || el <= list[i + 1];
    })
    if (asc === true) {
        return Answer.ASCENDING
    }
    if (ascw === true) {
        return Answer.WEAKLYASCENDING
    }
    if (cnst === true) {
        return Answer.CONSTANT
    }

    if (des === true) {
        return Answer.DESCENDING
    }
    if (wdes === true) {
        return Answer.WEAKLYDESCENDING
    }
    return Answer.RANDOM
}