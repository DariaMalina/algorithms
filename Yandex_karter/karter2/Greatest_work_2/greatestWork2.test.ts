import {greatestWork2} from "./greatestWork2";

    test('elements: 0', () => {
        expect(greatestWork2([1, 2, 5, 3, 4])).toBe('4 5')
    })
    test('elements: -3', () => {
        expect(greatestWork2([-4,3,2,5,-5])).toBe('-5 -4')
    })
    test('elements: -0', () => {
        expect(greatestWork2([12288, -10075, 29710, 15686, -18900, 29793, -17715, 15992, 24431])).toBe('29710 29793')
    })
test('elements: -10', () => {
    expect(greatestWork2([27602, -26692, -17026, -29859, 21057, -29484, -15462, -15013 ,17385, 17512 ,622, 22509 ,28429, -20558, -8431, -175000, 28504, -10343 ,-1955 ,-17159, -15202, -2005, 23699, -20932 ,6436, -27673, 4135, -4529, 11249 ,28670  ])).toBe("-175000 -29859")
})
test('elements: 20', () => {
    expect(greatestWork2([1,0])).toBe('0 1')
})
test('elements: 200', () => {
    expect(greatestWork2([0,-1])).toBe('-1 0')
})


