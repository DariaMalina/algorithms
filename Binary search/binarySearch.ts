const binarySearch = (n: number, arr: number[], start: number = 0, end: number = arr.length - 1): number => {
    let indexMiddle = Math.floor((start + end) / 2)
    let middleNumber = arr[indexMiddle];
    if (start > end) {
        return -1
    }
    if (n > middleNumber) {
        return binarySearch(n, arr, indexMiddle + 1, end)
    }
    if (n < middleNumber) {
        return binarySearch(n, arr, start, indexMiddle - 1)
    }
    return indexMiddle
}