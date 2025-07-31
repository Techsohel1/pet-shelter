import express from 'express'
import { Contact } from '../models/contact.js'
const router = express.Router();

router.post('/review',async(req,res)=>{
    const {name,email,message} = req.body;
    const newContact = new Contact({
        name,
        email,
        message,
    });
    await newContact.save();
    res.status(200).json({success:true,message:"Review received"})
})

export default router