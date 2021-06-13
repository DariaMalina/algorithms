export function quickSort(arr: number[]): number[] {
    if (arr.length === 0||arr.length===1) {
        return arr;
    }
    let pivot = arr[Math.floor(Math.random() * arr.length)];
    let leftArr = quickSort(arr.filter((el) => el < pivot));
    let rightArr = quickSort(arr.filter((el) => el > pivot));
    return leftArr.concat(pivot).concat(rightArr);
}
