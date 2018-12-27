const assert = require('assert');
const User = require('../src/user');

describe('Validating records',() =>{
    it('requires a userName',() =>{
        const user = new User({name: undefined});
        const validationResult = user.validateSync();
        console.log(validationResult.errors.name.message)
        const {message} = validationResult.errors.name;
        assert(message === 'Name is require')
        // done()
    })
    it('requires a userName longer than 2 characters',() =>{
        const user = new User({name: 'Ba'});
        const validationResult = user.validateSync();
        const {message} = validationResult.errors.name;
        assert(message === 'Name must be longer than 2 character')
    //     done()
    })
})