enum Answer {
    CONSTANT = 'CONSTANT',
    ASCENDING = 'ASCENDING ',
    WEAKLYASCENDING = 'WEAKLY ASCENDING ',
    DESCENDING = 'DESCENDING ',
    WEAKLYDESCENDING = 'WEAKLY DESCENDING',
    RANDOM = 'RANDOM '
}

import {sequenceView} from "./sequenceView";

describe('test equation', function () {
    test('the sequence consists of the same values', () => {
        expect(sequenceView([2, 2, 2, 2, 2])).toBe(Answer.CONSTANT)
    })
    test('the sequence is strictly ascending', () => {
        expect(sequenceView([1, 2, 3, 4, 5])).toBe(Answer.ASCENDING)
    })
    test('the sequence is not strictly increasing', () => {
        expect(sequenceView([1, 2, 2, 3, 3, 4, 5])).toBe(Answer.WEAKLYASCENDING)
    })
    test('the sequence is strictly decreasing', () => {
        expect(sequenceView([5, 4, 3, 2, 1])).toBe(Answer.DESCENDING)
    })
    test('the sequence is not strictly decreasing', () => {
        expect(sequenceView([5, 5, 4, 3, 3, 2, 1, 1])).toBe(Answer.WEAKLYDESCENDING)
    })
    test('no sequence, random', () => {
        expect(sequenceView([2, 4, 5, 3, 5, 7, 8, 1])).toBe(Answer.RANDOM)
    })
})