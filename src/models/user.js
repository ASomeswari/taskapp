const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema


const userSchema = new Schema({
    name:{
        type:String,
        required :true,
        trim:true
    },
    branch:{
        type:String,
        required:true,
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
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },

    phonenumber: {
        type:Number,
        required:true,
        minlength:10,
        trim:true,
        validate(value){
            const valueLen = value.toString().length
            if(valueLen!==10){
                throw new Error('phone length is 10')
                
            }
        }
        
    },
    dateofyear:{
        type:String,
        strictMode:Boolean,
        default:false,
        default:"YYYY/MM/DD",
        validate(value){
            if(!validator.isDate(value)){
                throw new Error('date of error')
            }
        }
    },rollno:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            
            if(!(value.length==10)) {
                throw new Error('rollno must be in given range')

            }
        }
    }
})


module.exports = mongoose.model('users',userSchema)