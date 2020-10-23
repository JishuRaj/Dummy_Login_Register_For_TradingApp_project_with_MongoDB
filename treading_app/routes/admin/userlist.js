const express = require("express")

const router=express.Router()
const members=require('../../models/post')
router.get('/userlist',async(req,res)=>{
    try{
        const user=await members.find()
        res.json(user)
    }catch(err){
        res.send(err)
    }

})
router.delete('/userlist/:id', async (req, res)=>{
    try{
        const deleteuser =await members.deleteOne({_id:req.params.id})
        res.json(deleteuser)
    }catch(err){
        res.send(err)
    }
})

module.exports=router