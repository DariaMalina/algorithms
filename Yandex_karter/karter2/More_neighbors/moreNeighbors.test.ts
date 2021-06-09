import {moreNeighbors} from "./moreNeighbors";

describe('elements that are more than two of their neighbors', () => {
    test('elements: 0', () => {
        expect(moreNeighbors([1, 2, 3, 4, 5])).toBe(0)
    })
    test('elements: 0', () => {
        expect(moreNeighbors([5, 4, 3, 2, 1])).toBe(0)
    })
    test('elements: 3', () => {
        expect(moreNeighbors([1, 5, 1, 5, 1, 5, 1])).toBe(3)
    })
    test('elements: 2', () => {
        expect(moreNeighbors([1, 3, 2, 5, 4])).toBe(2)
    })
    test('elements: -2', () => {
        expect(moreNeighbors([1, -3, 2, -5, 4])).toBe(1)
    })
    test('elements: -2', () => {
        expect(moreNeighbors([1, -3, 2, -5, 4])).toBe(1)
    })
    test('elements: -2', () => {
        expect(moreNeighbors([-1, -3, -2, -5, -4])).toBe(1)
    })

})
