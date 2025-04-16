const validator = require('validator')

exports.emailIdValidation = (value)=>{
    if(!validator.isEmail(value)){
        throw new Error("Enter a valid emailId")
    }
}

exports.passWordValidation = (value)=>{
    if(!validator.isStrongPassword(value)){
        throw new Error("Enter a strong password")
    }
}