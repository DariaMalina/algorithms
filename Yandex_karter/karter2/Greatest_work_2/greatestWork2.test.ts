import {greatestWork2} from "./greatestWork2";

describe('Find two numbers in this list whose product is maximum.', () => {
    test('elements: 0', () => {
        expect(greatestWork2([1, 2, 3, 4, 5])).toBe('5 4')
    })
    test('elements: -3', () => {
        expect(greatestWork2([-4,3,-5,2,5])).toBe('-5 -4')
    })
    test('elements: 0', () => {
        expect(greatestWork2([12288, -10075, 29710, 15686, -18900, 29793, -17715, 15992, 24431
        ])).toBe('29710 29793')
    })



})