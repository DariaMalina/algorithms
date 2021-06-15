function cubes(arr:[number[],number[]]):number{
    let arrGuysNumber=arr[0]
    let obj = new Set()
    let numberAnja=arrGuysNumber[0]
    arr[1].filter((el, i) => {
        if (i<=numberAnja){
            obj.add(el)
        }});

}