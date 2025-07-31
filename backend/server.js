import express from 'express'
import {config} from 'dotenv'
import Razorpay from 'razorpay'
import paymentroute from './routes/paymentroute.js'
import contactroutes from './routes/contactroutes.js'
import cors from 'cors'
import { connectDB } from './config/database.js'
config({path:'./config/config.env'})
connectDB()
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',paymentroute)
app.use('/api',contactroutes)


export const instance = new Razorpay({
    key_id:process.env.RAZORPAY_API_KEY,
    key_secret:process.env.RAZORPAY_API_SECRET
})

app.get('/getpay',(req,res)=>
    res.status(200).json({key:process.env.RAZORPAY_API_KEY})
);


app.listen(process.env.PORT,()=>{
    console.log(`Server running on port:${process.env.PORT}`)
})

