import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function VerifyEmail() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [verifying, setVerifying] = useState(true);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await axios.get(`http://localhost:4001/user/verify-email/${token}`);
        toast.success('Email verified successfully. Please login.');
        navigate('/');
      } catch (error) {
        toast.error(error.response?.data?.message || 'Verification failed');
        navigate('/signup');
      } finally {
        setVerifying(false);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      {verifying ? (
        <div>Verifying your email...</div>
      ) : null}
    </div>
  );
}

export default VerifyEmail;