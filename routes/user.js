const express = require ('express');
const usercontrollers = require('../controllers/usercontrollers')
const router = express.Router();

router.get('/users',(req,res)=>{
    usercontrollers.getALLUsers(req,res);
    

})
router.get('/user/:id',(req,res)=>{
    usercontrollers.getUser(req,res);
})

module.exports = router