export enum Answer {
    NO = "NO SOLUTION",
    MANY = 'MANY SOLUTIONS'
}

export function equation(a: number, b: number, c: number): number|Answer {
    if (a === 0 && b !== Math.pow(c, 2) || c < 0) {
        return Answer.NO
    }
    if (a === 0 && b === Math.pow(c, 2)) {
        return Answer.MANY
    }
    let x = (Math.pow(c, 2) - b) / a
    if (Number.isInteger(x)) {
        return x
    }
    return Answer.NO


}