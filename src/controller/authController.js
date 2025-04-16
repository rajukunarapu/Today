const bcrypt = require('bcrypt')

const { User } = require('../models/userModel');
const { emailIdValidation, passWordValidation } = require('../validations/authValidations');

exports.singUpController = async(req,res)=>{
    try{
        const {emailId, password} = req.body;
        emailIdValidation(emailId);
        passWordValidation(password)
        
        const hashedPassWord = await bcrypt.hash(password,10)
        const user = new User({emailId, 'password':hashedPassWord});
        await user.save();

        const token = await user.generateToken()
        res.cookie('token',token, {expires : new Date(Date.now() + 8 * 3600000)}).json({message : "signUp successfull"})
    }catch(error){
        res.status(400).json({message : "ERROR : "+ error.message})
    }
}

exports.signInController = async(req, res)=>{
    try{
        const {emailId, password} = req.body;
        emailIdValidation(emailId);
        passWordValidation(password);

        const user = await User.findOne({emailId})
        if(!user){
            return res.status(404).json({message:"user not found!"})
        }
        if(! (await bcrypt.compare(password, user.password)) ){
            return res.status(404).json({message:"user not found!"})
        }

        const token = await user.generateToken();
        res.cookie('token',token, {expires : new Date(Date.now() + 8 * 3600000)}).json({message : 'signIn successfull'})


    }catch(error){
        res.status(400).json({message : "ERROR : "+ error.message})
    }
}

exports.logOutController = async ()=>{
    try{
        res.cookie('token', null, {expires : new Date(Date.now())})

    }catch(error){
        res.status(400).json({message : "ERROR :"+ error.message})
    }
}