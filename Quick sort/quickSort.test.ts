import {quickSort} from "./quickSort";
describe('Quick sort',()=>{
test('sorting an array',()=>{
    expect(quickSort([15, 17, 25, 36, 24, 5,6, 78, 56, 36, 24])).toStrictEqual([5, 6, 15, 17, 24, 25, 36, 56, 78])
})
})