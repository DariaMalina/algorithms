import {intersectionOfMany} from "./Intersection_of_many";

describe('intersection of many', () => {
    test('intersectionOfMany1',()=>{
        expect(intersectionOfMany([1, 3, 2],[4, 3, 2])).toBe('2,3')
    })
    test('intersectionOfMany2',()=>{
        expect(intersectionOfMany([1, 2, 6 ,4, 5, 7  ],[10, 2 ,3, 4, 8])).toBe('2,4')
    })
    test('intersectionOfMany3',()=>{
        expect(intersectionOfMany([],[])).toBe('')
    })
    test('intersectionOfMany4',()=>{
        expect(intersectionOfMany([1, 2, 6 ,4, 5, 7  ],[10, 9 ,3, 11, 8])).toBe('')
    })
    test('intersectionOfMany5',()=>{
        expect(intersectionOfMany([1, 2, 2 ,4, 5, 7  ],[10, 2,2,9 ,3, 11, 8])).toBe('2,2')
    })
})