
type typeObject = Record<string, Record<string, number>>
let objectsLastName: typeObject = {};

export function logger(obj: typeObject) {
    for (let key in obj) {
        let object=obj[key]
        for (let k in object){
            return `${key}:(${k}:${object[k]})`
        }
    }
}
export function sales(str: string): any {
    let objectElements = str.split(' ');
    let lastName = objectElements[0];
    if (objectsLastName.hasOwnProperty(lastName)) {
        if (objectsLastName[lastName].hasOwnProperty(objectElements[1])) {
            for (let key in objectsLastName[lastName]){
                key=[key]+objectElements[2]
            }
        }
        objectsLastName[lastName] = {
            [objectElements[1]]: Number([objectElements[1]])
        }
    }
    if (!objectsLastName.hasOwnProperty(lastName)) {
        objectsLastName[lastName] = {
            [objectElements[1]]: Number(objectElements[2])
        }
    }
    return logger(objectsLastName)
}