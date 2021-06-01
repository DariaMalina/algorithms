import {bubbleSort} from './bubblesort'


test('should sort correctly', () => {
    let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
    expect(bubbleSort(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('should return empty',()=>{

    expect(bubbleSort([])).toHaveLength(0)
})