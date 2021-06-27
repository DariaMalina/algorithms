import {most_frequent_word} from "./most_frequent_word";
describe('tetstssssssssss',()=>{
    test('number1',()=>{
        const string='apple orange banana banana orange'
        expect(most_frequent_word(string)).toBe('banana')
    })
    test('number2',()=>{
        const string='oh you touch my tralala mmm my ding ding dong'
        expect(most_frequent_word(string)).toBe('ding')
    })

    test('number3',()=>{
        const string='q w e r t y u i o p a s d f g h j k l z x c v b n m'
        expect(most_frequent_word(string)).toBe('a')
    })
})