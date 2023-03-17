import { MyBigNumber } from './MyBigNumber.js';
const expect = chai.expect;
describe('Sum of number tests', ()=>{
    it('should be a function', () =>{
        expect(typeof MyBigNumber ).to.equal('function');
    });
});