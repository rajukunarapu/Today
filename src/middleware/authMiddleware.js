const jwt = require('jsonwebtoken')

const authMiddleware = async(req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        res.status(401).json({message : 'invalid token'})
    }
    try{
        const decode = await jwt.verify(token,`${process.env.JWT_SECRET_KEY}`)
        req._id = decode._id;
        next()
        
    }catch(error){
        console.log("ERROR :",error)
    }
}

module.exports = {authMiddleware}