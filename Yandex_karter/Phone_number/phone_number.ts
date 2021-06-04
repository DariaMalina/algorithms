export function phoneNumber(numberMain:string, numberCompare:string):string {
    let nM = numberMain.replace(/[^0-9]/g, '');
    let n1 = numberCompare.replace(/[^0-9]/g, '');
    if (nM.length === 11 && n1.length === 11) {
        if (nM.slice(-10) === n1.slice(-10)) {
            return 'YES'
        }
    }
    if (nM.length === 7 && n1.length === 7) {
        if (nM === n1) {
            return 'YES'
        }
    }
    if (nM.length === 11 && n1.length === 7) {
        n1='495'+n1
        if (nM.slice(-10) === n1) {
            return 'YES'
        }
    }
    if (nM.length===7&&n1.length===11){
        nM='495'+nM
        if(nM===n1.slice(-10)){
            return 'YES'
        }
    }
    return "NO"
}
