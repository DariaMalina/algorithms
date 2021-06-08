enum Answer {
    YES = 'YES',
    NO = 'NO'
}

import {phoneNumber} from "./phone_number";

test('correct number (same upper)', () => {
    expect(phoneNumber('8(495)430-23-97', '+7-4-9-5-43-023-97')).toBe(Answer.YES)
});
test('correct number (lower)', () => {
    expect(phoneNumber('8(495)430-23-97', '43-023-97')).toBe(Answer.YES)
});
test('correct number (low)', () => {
    expect(phoneNumber('43-023-97', '+7-4-9-5-43-023-97')).toBe(Answer.YES)
});
test('correct number (same lower)', () => {
    expect(phoneNumber('43-023-97', '4302397')).toBe(Answer.YES)
});
test('incorrect numbers', () => {
    expect(phoneNumber('+7-950-430-23-97', '4302397')).toBe(Answer.NO)
});
