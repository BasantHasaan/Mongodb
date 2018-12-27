const assert = require('assert');
const User = require('../src/user');

describe('Reading user out of the database', ()=>{
    let basant;
    beforeEach((done)=>{
        basant = new User({name:'basant'});
        basant.save()
            .then(()=>done())

    })
    it('find all user with name of basant', (done) => {
        User.find({name:'basant'})
            .then((users)=>{
                assert(users[0]._id.toString() === basant._id.toString())
                done();
            });
    })
    it('find a user with practicular id', (done) => {
        User.findOne({_id: basant._id})
            .then((user)=>{
                assert(user.name === 'basant')
                done();
            });
    })
})