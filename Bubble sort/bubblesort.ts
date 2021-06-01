export function bubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let a = 0; a < arr.length; a++) {
            let number = 0;
            if (arr[a] > arr[a + 1]) {
                number = arr[a];
                arr[a] = arr[a + 1];
                arr[a + 1] = number
            }
        }
    }
    return arr
}
