const express = require('express')

const router = express.Router()
const verify = require('../verify')
router.get('/new', verify, (req, res)=>{
  res.send(req.token)
  // res.send(req.user)
  
})

module.exports = router;