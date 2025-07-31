import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  phone: { type: Number, required: true },
});

export const DonationPayment = mongoose.model("DonationPayment", PaymentSchema);
