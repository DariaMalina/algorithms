import {triangle} from "./b_trigon";

test('triangle test', () => {

    expect(triangle(3, 2, 1)).toStrictEqual("YES")
})

test('naturalness check',()=>{
    expect(triangle(8, 7, 0)).toStrictEqual("NO")
})
test('sum of parties',()=>{
    expect(triangle(1, 1, 1)).toStrictEqual("NO")
})