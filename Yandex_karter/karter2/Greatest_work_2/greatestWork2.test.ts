import {greatestWork2} from "./greatestWork2";

    test('elements: 0', () => {
        expect(greatestWork2([1, 2, 5, 3, 4])).toBe('5 4')
    })
    test('elements: -3', () => {
        expect(greatestWork2([-4,3,2,5,-5])).toBe('-5 -4')
    })
    test('elements: -0', () => {
        expect(greatestWork2([12288, -10075, 29710, 15686, -18900, 29793, -17715, 15992, 24431])).toBe('29710 29793')
    })
