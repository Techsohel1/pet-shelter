import React, { useState } from 'react';
import axios from 'axios';

const DonationForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    amount: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const fields = [
    { name: 'name', placeholder: 'Your Name', type: 'text' },
    { name: 'email', placeholder: 'Email', type: 'email' },
    { name: 'phone', placeholder: 'Phone', type: 'tel' },
    { name: 'amount', placeholder: 'Amount (₹)', type: 'number', min: 1 }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (!form.amount || parseFloat(form.amount) <= 0)
      newErrors.amount = 'Enter a valid amount';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await CheckoutHandler(); // Trigger Razorpay payment
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', amount: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Payment Error:', err);
      alert('Payment failed or was cancelled.');
    }
  };

  const CheckoutHandler = async () => {
    const { data: { key } } = await axios.get("http://localhost:3000/getpay");

    const { data: { order } } = await axios.post("http://localhost:3000/checkout", {
      name: form.name,
      email: form.email,
      phone: form.phone,
      amount: form.amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Pet Shelter",
      description: "Donation",
      image: "https://example.com/your_logo",
      order_id: order.id,
      callback_url: "http://localhost:3000/paymentVerification",
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#0c0d0e",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <div className="max-w-xl w-full p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Donate to Pet Shelter
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map(({ name, placeholder, type, min }) => (
            <div key={name}>
              <input
                name={name}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                type={type}
                min={min}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-300 focus:outline-none"
              />
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Donate 🙌
          </button>

          {submitted && (
            <p className="text-green-600 text-center font-medium mt-4">
              Thank you for your support! ❤️
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
