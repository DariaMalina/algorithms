import {triangle} from "./b_trigon";

test('triangle test', () => {

    expect(triangle(3, 2, 2)).toBe("YES")
})

test('naturalness check',()=>{
    expect(triangle(8, 7, 0)).toBe("NO")
})
test('sum of parties',()=>{
    expect(triangle(1, 1, 1)).toBe("YES")
})