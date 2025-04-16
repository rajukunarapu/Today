const { User } = require("../models/userModel")

exports.getuserDataController = async(req, res)=>{
    try{
        const users = await User.find().select('emailId')
        res.json({message : "Fetched the data successfull", data : users})
    }catch(error){
        res.status(400).json({message : "ERROR : "+error.message})
    }
}