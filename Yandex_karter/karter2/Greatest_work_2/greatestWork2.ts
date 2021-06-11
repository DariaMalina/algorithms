export function greatestWork2(mass: number[]): any {
    let one = 0;
    let two = 0;
    let minusOne = 0;
    let minusTwo = 0;
    for (let i = 0; i < mass.length; i++) {
        if (one < mass[i] && mass[i] > 0) {
            one= mass[i];

        } else if (mass[i] > two && mass[i] > 0) {

            two = mass[i];
        }two=one
        if (minusOne > mass[i] && mass[i] < 0 && mass[i] < 0) {
            minusOne = minusTwo;
            minusTwo = mass[i];
        } else if (minusTwo > mass[i]) {
            if (minusOne < minusTwo) {
                minusTwo = mass[i]
            }
        }
    }
    if ((one * two) > (minusOne * minusTwo)) {
        return `${one} ${two}`
    }
    return `${minusTwo} ${minusOne}`
}