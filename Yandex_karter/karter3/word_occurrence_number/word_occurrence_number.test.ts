import {wordOccurrenceNumber} from "./word_occurrence_numberr";

describe('word_Occurrence_Number',()=>{

test('words1',()=>{
    const string='one two one tho three'
    expect(wordOccurrenceNumber(string)).toBe('0 0 1 0 0')
})
    test('words2',()=>{
        const string='She sells sea shells on the sea shore;\n' +
            'The shells that she sells are sea shells I\'m sure.\n' +
            'So if she sells sea shells on the sea shore,\n' +
            'I\'m sure that the shells are sea shore shells.\n' +
            '\n'
        expect(wordOccurrenceNumber(string)).toBe('0 0 0 0 0 0 1 0 0 1 0 0 1 0 2 2 0 0 0 0 1 2 3 3 1 1 4 0 1 0 1 2 4 1 5 0 0')
    })
    test('words3',()=>{
        const string='aba aba; aba @?"'
        expect(wordOccurrenceNumber(string)).toBe('0 0 1 0')
    })

})