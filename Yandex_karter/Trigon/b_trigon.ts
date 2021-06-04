export function triangle(a: number, b: number, c:number): string {
    if (a > 0 && b > 0 && c > 0) {
        if (a + b > c&& b + c > a&& a + c > b){
            return 'YES'
        }
    }
    return 'NO';
}