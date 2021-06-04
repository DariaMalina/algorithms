import {phoneNumber} from "./phone_number";
   let str1='8(495)430-23-97';
    let str2='+7-4-9-5-43-023-97';
    let str3='43-023-97';
    let str4='4302397';
    let str5='+7-950-430-23-97'
test('correct number (same upper)', () => {
    expect(phoneNumber(str1,str2)).toBe("YES")
});
test('correct number (lower)', () => {
    expect(phoneNumber(str1,str3 )).toBe("YES")
});
test('correct number (low)',  () => {
    expect(phoneNumber(str3, str2)).toBe("YES")
});
test('correct number (same lower)', () => {
    expect(phoneNumber(str3,str4)).toBe("YES")
});
test('incorrect numbers', () => {
    expect(phoneNumber(str5, str4)).toBe("NO")
});
