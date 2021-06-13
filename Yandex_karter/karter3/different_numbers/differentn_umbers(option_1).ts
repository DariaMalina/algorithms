interface numberObj {
    [index: number]: number
}

export function differentNumbersO1(arr: number[]): number {
    let obj: numberObj = {};
    let doneArr = []
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (obj.hasOwnProperty(num)) {
            obj[num] += 1
        } else {
            obj[num] = 1
        }
    }
    for (let key in obj) {
        doneArr.push(obj[key])
    }
    return doneArr.length
}
