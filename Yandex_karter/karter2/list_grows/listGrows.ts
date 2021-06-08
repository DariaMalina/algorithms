enum Answer {
    YES = 'YES',
    NO = 'NO'
}

export function listGrows(list: number[]): string {
    if (list.length >= 1) {
        let ans = list.every(function (el, i, list) {
            return i === 0 || el > list[i - 1];
        })
        if (ans) {
            return Answer.YES
        }
        return Answer.NO
    }
    return Answer.NO
}
