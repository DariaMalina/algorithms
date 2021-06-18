export interface numberObj {
    [index: string]: string
}
export let v1:  [number,string[],string] = [3,['d'],'d']

export function vocabulary():string{
    let obj: numberObj = {};
    let synonym = v1[3];
    function creatingADictionary(arr: string[]) {
        obj[arr[0]] = arr[1];
        obj[arr[1]] = arr[0]
    }
    function synonymSearchAndDerivation(str:string,object:numberObj):string {
        return object[str]
    }
}