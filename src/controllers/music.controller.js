const musicModel = require("../models/music.model")
const jwt = require("jsonwebtoken");
const {uploadFile} = require('../services/storage.service')


async function createMusic(req,res){
    const token = req.cookies.token;
    if(!token){return res.status(401).json({message:"Token not recieved"})};
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)//agr token verify hota hai toh wo jis data ke sath create hua tha wo return krta hai
    

    if(decoded.role !== "artist"){//403 means forbidden
        return res.status(403).json({message:"You don't have an artist account"})
    }
    
    const {title} = req.body;
    const file = req.file;
    const result = await uploadFile(file.buffer.toString('base64'));
    console.log(result);
    
    const music = await musicModel.create({
        url: result.url,
        title,
        artist:decoded.id,
    })
    res.status(201).json({
        message: "Music created successfully",
        music:{
            id: music._id,
            url: music.url,
            title: music.title,
            artist: music.artist,
        }
    })

    }catch(error){
        return res.status(401).json({message:"Unauthorized",error})
    }

}

module.exports = createMusic;