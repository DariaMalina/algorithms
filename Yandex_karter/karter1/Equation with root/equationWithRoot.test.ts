import {equation} from "./equationWithRoot";
enum Answer {
    NO = "NO SOLUTION",
    MANY = 'MANY SOLUTIONS'
}
describe('test equation',function (){
    test('answer 0', () => {
        expect(equation(1,0,0)).toBe(0)
    })
    test('answer 7', () => {
        expect(equation(1,2,3)).toBe(7)
    })
    test('answer NO SOLUTIONS', () => {
        expect(equation(1,2,-1)).toBe(Answer.NO)
    })
    test('answer MANY SOLUTIONS', () => {
        expect(equation(0,4,2)).toBe(Answer.MANY)
    })
    test('answer MANY SOLUTIONS', () => {

        expect(equation(0,0,0)).toBe(Answer.MANY)
    })
})
