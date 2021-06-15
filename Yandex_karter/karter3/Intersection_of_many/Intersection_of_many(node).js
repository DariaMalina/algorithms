    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    let arr1 = [];
    let arr2 = []
    let counter=0
    const callback = (line) => {
        counter+=1
        if (counter===1){
            arr1=line.split(' ').map(el=>Number(el))
        }
        if (counter===2) {
            arr2=line.split(' ').map(el=>Number(el))
            console.log(intersectionOfMany(arr1,arr2))
            process.exit()
        }
    };
    rl.on('line', callback)
    "use strict";
    function intersectionOfMany(arr1, arr2) {
        var obj = new Set();
        var arrDone = [];
        arr1.forEach(function (el) { return obj.add(el); });
        arrDone = arr2.filter(function (el) { return obj.has(el); });
        arrDone.sort(function (a, b) { return a - b; });
        return arrDone.join();
    }
