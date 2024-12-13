import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-md w-full">
        <CheckCircle className="mx-auto mb-6 text-green-500" size={64} />
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">Your order has been processed successfully.</p>
        <Link 
          to="/course" 
          className="inline-flex items-center justify-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default PaymentSuccess;