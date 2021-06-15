import {wordCount} from "./wordCount";
let arr=
    ('She sells sea shells on the sea shore;\n' +
        'The shells that she sells are sea shells I\'m sure.\n' +
        'So if she sells sea shells on the sea shore,\n' +
        'I\'m sure that the shells are sea shore shells.').split(' ')

describe('Number of words in the text',()=>{
    test('word count(1)',()=>{
        expect(wordCount('She sells sea shells on the sea shore'.split(' '))).toBe(7)
    })
    test('word count(2)',()=>{
        expect(wordCount('The shells that she sells are sea shells I\'m'.split(' '))).toBe(8)
    })
    test('word count(3)',()=>{
        expect(wordCount(arr)).toBe(18)
    })
})