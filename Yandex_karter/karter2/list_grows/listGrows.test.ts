enum Answer {
    YES = 'YES',
    NO = 'NO'
}
import {listGrows} from "./listGrows";
test('monotonically increasing',()=>{
    expect(listGrows([1, 2, 3, 4, 5])).toBe(Answer.YES)
})
test('not monotonically increasing',()=>{
    expect(listGrows([1, 4, 3, 10, 5])).toBe(Answer.NO)
})
test('empty array',()=>{
    expect(listGrows([])).toBe(Answer.NO)
})
test('empty array',()=>{
    expect(listGrows([2,2,2])).toBe(Answer.NO)
})
