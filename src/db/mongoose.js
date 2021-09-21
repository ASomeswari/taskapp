const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-student-api',{
    //UseNewUrlParser:true,
    //UseCreateIndex:true

})

/*const User = mongoose.model('User',{
    name:{
        type:String,
        required :true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email is invalid')
            }
        }
    },
    age: {
        type:Number,
        default:0,
        Validate(value){
            if(value<0) {
                throw new Error('age must be positive number')
            }

        }
    }

})
const me = new User({
    name:"somu",
    email:"someswariavula7@gmail.com",
    age:45
})
me.save().then(() =>{
    console.log(me)
}).catch((error) => {
    console.log('error',error)
})*/