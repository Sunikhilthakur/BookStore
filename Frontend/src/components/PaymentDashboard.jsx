import React, { useState } from 'react';
import { CreditCard, Lock, CheckCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from './Navbar';

function PaymentDashboard() {
  const navigate = useNavigate();
  const { getTotalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const paymentMethods = [
    { id: 'credit', name: 'Credit Card', icon: <CreditCard className="text-blue-500" size={24} /> },
    { id: 'paypal', name: 'PayPal', icon: <CreditCard className='text-blue-500'/> },
    { id: 'apple', name: 'Apple Pay', icon:<CreditCard className='text-blue-500'/>  },
  ];

  const handlePaymentMethodSelect = (method) => setPaymentMethod(method);

  const handleProcessPayment = () => {
    if (!paymentMethod) return;
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      clearCart();
      setTimeout(() => navigate('/payment-success'), 2000);
    }, 2000);
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
        <div className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-md w-full">
          <CheckCircle className="mx-auto mb-6 text-green-500" size={64} />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">Thank you for your purchase. Redirecting shortly...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
        <Navbar/>
      {/* Left Side - Full-Height Image */}
      <div className="hidden md:block md:w-1/2 h-screen">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-click-buy-gesture-pay-image_19038.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Payment Functionality */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <CreditCard className="text-pink-500" size={36} />
            Secure Checkout
          </h2>

          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">Payment Method</h3>
            <div className="flex items-center text-gray-500">
              <Lock size={16} className="mr-2" />
              Secure Payment
            </div>
          </div>

          {/* Payment Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => handlePaymentMethodSelect(method.id)}
                className={`flex items-center justify-center gap-3 p-4 rounded-lg border-2 transition duration-300 ${
                  paymentMethod === method.id
                    ? 'border-pink-500 bg-pink-50 text-pink-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {method.icon}
                <span className="font-medium text-black">{method.name}</span>
              </button>
            ))}
          </div>

          {/* Total Amount and Payment Button */}
          <div className="bg-gray-100 rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">Total Amount</span>
              <span className="text-2xl font-bold text-pink-600">${getTotalPrice().toFixed(2)}</span>
            </div>

            <button
              onClick={handleProcessPayment}
              disabled={!paymentMethod || isProcessing}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg transition duration-300 ${
                paymentMethod
                  ? 'bg-pink-500 text-white hover:bg-pink-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isProcessing ? 'Processing...' : 'Complete Payment'}
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDashboard;
