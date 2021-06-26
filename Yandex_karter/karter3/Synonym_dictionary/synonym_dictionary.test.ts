import {vocabulary} from "./synonym_dictionary";
import {ArrayType} from "./synonym_dictionary";
describe('Synonym dictionary', () => {
    test('vocabulary1', () => {
        let arr: ArrayType[] = [['Hello', 'Hi'], ['Bye', 'Goodbye'], ['List', 'Array']]
        expect(vocabulary(arr, 'Hi')).toBe('Hello')
    })
    test('vocabulary2',()=>{
        let arr: ArrayType[] = [['beep', 'Car']]
        expect(vocabulary(arr,'Car')).toBe('beep')
    })
    test('vocabulary3',()=>{
        let arr: ArrayType[] = [['Ololo', 'Ololo'],['Numbers', '1234567890']]
        expect(vocabulary(arr,'Numbers')).toBe('1234567890')
    })
})

