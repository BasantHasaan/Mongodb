const assert = require('assert');
const User = require('../src/user');

describe('updateing records', ()=>{
    let basant;
    beforeEach((done)=>{
        basant = new User({name:'basant', postCount:0})
        basant.save()
            .then(()=>done());
    });
    function assertName(operation,done){
        operation
            .then(()=> User.find())
            .then((users)=>{
                // console.log(users)
                assert(users.length === 1);
                assert(users[0].name ==='Basant')
                done();
            })

    }
    it('it instance type using  set n save',(done)=>{
        // console.log(basant);
        basant.set('name','Basant');
        assertName(basant.save(),done)
            
    });
    it('A model Instance canbe update',(done)=>{
        assertName(basant.update({name:'Basant'},done)) 
    })
    // it('A model class can update',(done) =>{

    // })
    it('A model class can update one record',(done) => {
        assertName(
            User.findOneAndUpdate({name:'basant'},{name:'Basant'}),
            done
        )

    })
    it('A model class can find arecord with an Id and update',(done) => {
        assertName(
            User.findByIdAndUpdate(basant._id,{name:'Basant'}),
            done
        )
        

    })
    it('A user can have their postCount increment by 1',(done)=> {
       User.update({name:'basant'},{$inc:{postCount:1}})
        .then(()=>User.findOne({name:'basant'}))
        .then((user)=>{
            console.log(user.postCount)
            assert(user.postCount === 1)
            done();

        }) 
    })
})