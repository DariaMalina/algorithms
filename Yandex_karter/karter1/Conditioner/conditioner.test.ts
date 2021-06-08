import {getDesiredTemp} from "./conditioner";
test('temperature increase up to 20',()=>{
   expect(getDesiredTemp(10,20,'heat')).toBe(20)
})
test('lowering the temperature to 10',()=>{
   expect(getDesiredTemp(20,10,'freeze')).toBe(10)
})
test('automatic heating up to 20',()=>{
   expect(getDesiredTemp(10,20,'auto')).toBe(20)
})
test('fan function (does not change temperature)',()=>{
   expect(getDesiredTemp(10,20,'fan')).toBe(10)
})
test('default value, with incorrect data',()=>{
   expect(getDesiredTemp(20,10,'heat')).toBe(20)
})