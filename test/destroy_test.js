const assert = require('assert');
const User = require('../src/user');

describe('remove', ()=>{
    let basant;
    beforeEach((done)=>{
        basant = new User({name:'basant'})
        basant.save()
            .then(()=>done());
    });
    it('model instance remove',(done)=>{
        basant.remove()
            .then(()=> User.findOne({name: 'basant'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    });
    it('class method remove',(done)=>{
        //Remove a bunch of records with some given criteria
        User.remove({name:'basant'})
            .then(()=> User.findOne({name: 'basant'}))
            .then((user) => {
                assert(user === null);
                done();
            });

    });
    it('class method findAndRemove',(done)=>{
        User.findOneAndRemove({name: 'basant'})
            .then(()=> User.findOne({name: 'basant'}))
            .then((user) => {
                assert(user === null);
                done();
            });

    })
    it('class method findByIdAndRemove',(done)=>{
        User.findByIdAndRemove(basant._id)
            .then(()=> User.findOne({name: 'basant'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    })
})