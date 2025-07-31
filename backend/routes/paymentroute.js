import express from 'express'
import { instance } from "../server.js"
import crypto from 'crypto'
import { Payment } from '../models/paymentmodels.js'
import { DonationPayment } from '../models/donationpayment.js'

const router = express.Router()

router.post('/checkout',async(req,res)=>{
    const {name,amount,email,phone} = req.body 
    const options = {
        amount:Number(req.body.amount * 100),
        currency:"INR"
    };
    const order = await instance.orders.create(options)
    res.status(200).json({
        success:true,
        order
    })
    const payment = new DonationPayment({name,email,amount,phone})
    await payment.save()
})


router.post('/paymentVerification',async(req,res)=>{

    const {razorpay_order_id,razorpay_payment_id,razorpay_signature,} = req.body;
    
    const body = razorpay_order_id +"|"+ razorpay_payment_id;

    const expectedSignature = crypto.createHmac('sha256',process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest('hex')
    const isAuthenticate = expectedSignature === razorpay_signature

    if(isAuthenticate){
        // Database comes here

        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        })

        res.redirect(`http://localhost:5173`)
    }else{
    res.status(400).json({
        success:false,
    }) 

    }
})


export default router