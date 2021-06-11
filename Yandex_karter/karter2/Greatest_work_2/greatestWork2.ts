export function greatestWork2(mass:number[]):string {
    let one=0;
    let two=0;
    let done=mass.sort(function(a, b) {
        return b - a;
    });
    if ((done[0]*done[1])<(done[done.length-1]*done[done.length-2])){
        one=done[done.length-1];
        two=done[done.length-2]
    } else {
        one=done[0];
        two=done[1];
    }

    return `${one} ${two}`
}