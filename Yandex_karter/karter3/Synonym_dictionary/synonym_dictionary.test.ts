import {synonym} from "./synonym_dictionary";
import {obj} from "./synonym_dictionary";
import {numberObj} from "./synonym_dictionary";
import {creatingADictionary} from "./synonym_dictionary";
import {synonymSearchAndDerivation} from "./synonym_dictionary";
describe('Synonym dictionary',()=>{
    test('vocabulary1',()=>{
        expect(creatingADictionary(['Hello', 'Hi']))
    })
})