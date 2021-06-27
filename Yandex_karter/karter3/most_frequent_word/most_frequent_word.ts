interface numberObj {
    [index: string]: number
}

export function most_frequent_word(str: string): string {
    let obj: numberObj = {}
    let doneNumber=0;
    let doneString='';
    let arrayCounter:string[]=[];
    let arr = str.split(' ')
    arr.forEach(function (el: string) {
        if (obj.hasOwnProperty(el)) {
            obj[el] += 1
        }
        if (!obj.hasOwnProperty(el)) {
            obj[el] = 1
        }

        if (obj[el]>doneNumber){
            doneString=el
        }
        if (obj[el]===doneNumber){
            arrayCounter.push(doneString+el)
        }

    })
    if (arrayCounter.length>1){
       let answer = arrayCounter.sort()
        return answer[0]
    }
    return doneString
}