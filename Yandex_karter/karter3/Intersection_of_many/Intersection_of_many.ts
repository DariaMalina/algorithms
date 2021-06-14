interface numberObj {
    [index: number]: number
}
export function intersectionOfMany(arr1: number[], arr2: number[]): string{
    let obj: numberObj={}
    let arrDone:number[]=[]
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]]=arr1[i]
    }
    for (let j = 0; j < arr2.length; j++) {
        if (obj.hasOwnProperty(arr2[j])){
            arrDone.push(arr2[j])
        }
    }
    arrDone.sort(function(a, b) {
        return a - b;
    });
    return arrDone.join()
    }