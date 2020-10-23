const jwt=require('jsonwebtoken')


const verify=(req,res,next)=>{
       const token=req.header('auth-token')
       if(!token) return res.status(401).send('aceess denied')

       try{
           const token_verify=jwt.verify(token,process.env.TOKEN_SECRET)
           console.log(token_verify)
           req.token=token_verify
           next()
       }catch(err){
           res.status(403).send("error happend")
       }
}

module.exports=verify;