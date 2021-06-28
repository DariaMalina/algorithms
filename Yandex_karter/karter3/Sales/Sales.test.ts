import {sales} from "./Sales";


describe('Create a list of all customers, and for each customer, count the number of each product they have purchased',()=>{

    test('buyer #1',()=>{
        const string='Ivanov paper 10'
        expect(sales(string)).toBe('Ivanov:')
    })
    test('buyer #2',()=>{
        const string=''
        expect(sales(string)).toBe('')
    })})