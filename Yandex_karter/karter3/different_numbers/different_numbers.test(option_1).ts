import {differentNumbersO1} from "./differentn_umbers(option_1)";
describe('Number of distinct numbers',()=>{
    test('Number of distinct numbers:6', () => {
        expect(differentNumbersO1([1, 2, 3, 4, 5, 6, 2, 3, 4])).toBe(6)
    })
    test('Number of distinct numbers:4', () => {
        expect(differentNumbersO1([1, 2, 3, 4, 2, 3, 4])).toBe(4)
    })
    test('Number of distinct numbers:10', () => {
        expect(differentNumbersO1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10)
    })
    test('Number of distinct numbers:-3', () => {
        expect(differentNumbersO1([1, 2, 3, 4, 5, 1, 2, 1, 2, 7, 3])).toBe(3)
    })
    test('Number of distinct numbers:-3',()=>{
        expect(differentNumbersO1([1, 2, 3, 2, 1])).toBe(3)
    })
})

