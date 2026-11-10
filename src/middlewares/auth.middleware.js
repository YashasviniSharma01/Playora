const jwt = require('jsonwebtoken');

async function authArtist(req,res,next){
    const token = req.cookies.token;
    if(!token){return res.status(401).json({message:"Token not recieved"})};
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)//agr token verify hota hai toh wo jis data ke sath create hua tha wo return krta hai
        if(decoded.role !== "artist"){//403 means forbidden
        return res.status(403).json({message:"You don't have an artist account"})
        }
        req.user = decoded;
        next()
    
    }catch(err){
        console.log(err);
        return res.status(401).json({message:"Unauthorized"})
    }
    
}

async function authUser(req,res,next){
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: "unauthorized-token not found"
        })
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.role !== "user" && decoded.role !== "artist"){
            return res.status(403).json({message:"Register an account first"})
        }
        req.user = decoded;

    }catch(error){}
    next()
}

module.exports= {authArtist,authUser};
