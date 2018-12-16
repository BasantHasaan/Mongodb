const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/users_test');

mongoose.connection
    .once('open',() => console.log('good'))
    .on('error',(error)=>{
        console.warn('Warrning',error)
    })

beforeEach((done) => {
    mongoose.connection.collections.users.drop(()=>{
        done();
    });
    
})