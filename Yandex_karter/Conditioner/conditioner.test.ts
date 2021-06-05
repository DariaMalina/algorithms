import {getDesiredTemp} from "./conditioner";
test('',()=>{
   expect(getDesiredTemp(10,20,'heat')).toBe(20)
})
test('',()=>{
   expect(getDesiredTemp(20,10,'freeze')).toBe(10)
})
test('',()=>{
   expect(getDesiredTemp(10,20,'auto')).toBe(20)
})
test('',()=>{
   expect(getDesiredTemp(10,20,'fan')).toBe(10)
})
test('',()=>{
   expect(getDesiredTemp(20,10,'heat')).toBe(20)
})