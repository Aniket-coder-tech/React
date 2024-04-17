const jwt = require('jsonwebtoken');

const JWT_KEY="Aniketcan"

const fetchUser=(req,res,next)=>{
    const token=req.header('authtoken');
    try{
       
        const data = jwt.verify(token, JWT_KEY);
       
        req.user=data.user;
        next();
    }
    catch(error){
        res.send({error:"Please send a valid token"})
    }
}
module.exports=fetchUser;