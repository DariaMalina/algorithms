interface numberObj {
    [index: string]: number
}
interface bigCount {
    name:string;
    count:number
}

function lessInLexicographicOrder(a: string, b: string): string {
    if (a > b) {
        return b
    }
    return a
}

export function most_frequent_word(str: string): string {
    let obj: numberObj = {}
    let objBigCont:bigCount={
        name:'',
        count:0
    };
    let arr = str.split(' ')
    arr.forEach((el: string) =>{
        if (obj.hasOwnProperty(el)) {
            obj[el] += 1
        }
        if (!obj.hasOwnProperty(el)) {
            obj[el] = 1
        }
        if (obj[el] > objBigCont.count) {
            objBigCont.name = el
            objBigCont.count = obj[el]
        }
        if (obj[el] === objBigCont.count) {
            objBigCont.name = lessInLexicographicOrder(el, objBigCont.name)
        }

    })

    return objBigCont.name
}