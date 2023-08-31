const express=require('express');


const router=express.Router();


router.use('/confrence',require('./confrence'));
router.use('/user',require('./user'));

module.exports=router;