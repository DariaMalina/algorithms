
type typeObject = Record<string, Record<string, number>>
let buyerList: typeObject = {};

 function responseOutput(obj: typeObject) {
    for (let lastName in obj) {
        let object=obj[lastName]
        for (let propertyKey in object){
            return `${lastName}:(${propertyKey}:${object[propertyKey]})`
        }
    }
}
export function sales(str: string): any {
    let workItems = str.split(' ');
    let surname = workItems[0];
    if (buyerList.hasOwnProperty(surname)) {
        if (buyerList[surname].hasOwnProperty(workItems[1])) {
            for (let key in buyerList[surname]){
                key=[key]+workItems[2]
            }
        }
        buyerList[surname] = {
            [workItems[1]]: Number([workItems[1]])
        }
    }
    if (!buyerList.hasOwnProperty(surname)) {
        buyerList[surname] = {
            [workItems[1]]: Number(workItems[2])
        }
    }
    return responseOutput(buyerList)
}