export function moreNeighbors(mass: number[]): number {
    let counter = 0;
    for (let i = 1; i < mass.length - 1; i++) {
        if (mass[i] > mass[i - 1] && mass[i] > mass[i + 1]) {
            counter += 1
        }
    }
    return counter
}