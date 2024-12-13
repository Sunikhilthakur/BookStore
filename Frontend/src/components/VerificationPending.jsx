import React from 'react';
import { Link } from 'react-router-dom';

function VerificationPending() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Verify Your Email</h2>
        <div className="mb-6">
          <svg
            className="w-16 h-16 mx-auto text-pink-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
            />
          </svg>
        </div>
        <p className="text-gray-600 mb-6">
          We've sent a verification link to your email address. Please check your inbox and click the link to verify your account.
        </p>
        <div className="text-sm text-gray-500">
          <p className="mb-4">
            Didn't receive the email? Check your spam folder or
          </p>
          <Link
            to="/"
            className="text-pink-500 hover:text-pink-600 font-medium"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VerificationPending;