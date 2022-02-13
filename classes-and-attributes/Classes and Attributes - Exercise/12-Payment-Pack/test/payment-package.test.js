let PaymentPackage = require('../payment-package');
let {assert} = require('chai');


describe('test Payment Packege class functionality', ()=>{
    it('Test constructor  input value is corect ',()=>{
        assert.equal(new PaymentPackage())
    })
})