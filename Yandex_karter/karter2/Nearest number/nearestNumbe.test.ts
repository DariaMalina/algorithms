import {nearestNumber} from "./nearestNumber";
test('closest in size to 8',()=>{
    expect(nearestNumber([2,2,2,2,2,3,4,5,6,7,8],8)).toBe(8)
})
test('closest in size to 2',()=>{
    expect(nearestNumber([1,2,3,4,5],2)).toBe(2)
})
test('closest in size to 6',()=>{
    expect(nearestNumber([1,2,2,3,3,4,5],6)).toBe(5)
})