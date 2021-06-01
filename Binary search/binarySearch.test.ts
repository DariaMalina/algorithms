import {binarySearch} from "./binarySearch";

test('search for an element in a sorted array, get the index of the element at the output', () => {
    let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(binarySearch(3,arr)).toStrictEqual(2)
})

test('if no item found',()=>{
    let arr =[1, 2, 3, 4, 5, 6, 8, 9]
    expect(binarySearch(7,arr)).toStrictEqual(-1)
})