import {nearestNumber} from "./nearestNumber";
describe('name',()=>{
    test('closest in size to 8',()=>{
        expect(nearestNumber([2,3,4,5,6,7,8],8)).toBe(8)
    })
    test('closest in size to 2',()=>{
        expect(nearestNumber([1,2,3,4,5],2)).toBe(2)
    })
    test('closest in size to -6',()=>{
        expect(nearestNumber([-1,-2,-3,-4,-5],-6)).toBe(-5)
    })
    test('closest in size to 6',()=>{
        expect(nearestNumber([1,2,3,4,5],6)).toBe(5)
    })
    test('closest in size to 3',()=>{
        expect(nearestNumber([5 ,4 ,3 ,2 ,1],3)).toBe(3)
    })
    test('closest in size to (3)',()=>{
        expect(nearestNumber([-5 ,-4 ,-3 ,-2 ,-1],3)).toBe(-1)
    })
    test('closest in size to 300',()=>{
        expect(nearestNumber([1,2,3,4,5],300)).toBe(5)
    })
    test('closest in size to 0',()=>{
        expect(nearestNumber([5 ,4, 3 ,2 ,1],0)).toBe(1)
    })
    test('closest in size to -0',()=>{
        expect(nearestNumber([-5 ,-4, -3 ,-2 ,-1],0)).toBe(-1)
    })
})
