const assert = require('assert');
const User = require('../src/user');

describe('Reading user out of the database', ()=>{
    let basant;
    beforeEach((done)=>{
        basant = new User({name:'basant'});
        basant.save()
            .then(()=>{
                done();
            })

    })
    it('find all user with name of basant', (done) => {
        User.find({name:'basant'})
            .then((users)=>{
                console.log(typeof(users[0]._id),"object");
                assert(users[0]._id.toString() === basant._id.toString())
                done();
            });
    })
})