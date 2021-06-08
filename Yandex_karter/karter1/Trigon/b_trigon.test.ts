enum Answer {
    YES = 'YES',
    NO = 'NO'
}

import {triangle} from "./b_trigon";

test('triangle test', () => {
    expect(triangle(3, 2, 2)).toBe(Answer.YES)
})
test('naturalness check', () => {
    expect(triangle(8, 7, 0)).toBe(Answer.NO)
})
test('sum of parties', () => {
    expect(triangle(1, 1, 1)).toBe(Answer.YES)
})