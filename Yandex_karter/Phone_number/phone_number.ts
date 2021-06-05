export function phoneNumber(numberMain: string, numberCompare: string): string {
    let nM = numberMain.replace(/[^0-9]/g, '');
    let n1 = numberCompare.replace(/[^0-9]/g, '');

    enum Answer {
        YES = 'YES',
        NO = 'NO'
    }

    switch (nM.length | n1.length) {
        case 11 | 11:
            if (nM.slice(-10) === n1.slice(-10)) {
                return Answer.YES
            }

        case 7 | 7:
            if (nM.slice(-10) === n1.slice(-10)) {
                return Answer.YES
            }

        case 11 | 7:
            n1 = '495' + n1
            if (nM.slice(-10) === n1) {
                return Answer.YES
            }

        case 7 | 11:
            nM = '495' + nM
            if (nM === n1.slice(-10)) {
                return Answer.YES
            }
        default:
            return Answer.NO
    }

}
