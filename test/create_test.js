const assert = require('assert');
const User = require('../src/user')
describe('Creating records', () => {
    it('Save a User', (done)=>{
        const basant  = new User({name:"basant"});
        basant.save()
            .then(()=>{
                assert(!basant.isNew);
                done();
            })
    })

})