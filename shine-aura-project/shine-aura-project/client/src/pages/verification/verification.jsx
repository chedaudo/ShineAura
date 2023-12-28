// Verification.js
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../assets/img/logo-black.png';
import './verification.scss';
import Button from '../../components/common/button/button';
import axios from 'axios';

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState(''); // State to store user email

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setUserEmail(location.state.email);
    }
  }, [location.state]);

  const inputsRef = useRef([]);

  const handleInputChange = (index, value) => {
    const nextIndex = index + 1;
    const prevIndex = index - 1;
  
    if (value.length === 1 && nextIndex < inputsRef.current.length) {
      inputsRef.current[nextIndex].focus();
    }
    if (value.length === 0 && index > 0) {
      inputsRef.current[index].focus();
      inputsRef.current[index].value = '';
    }
  
    // Update the verificationCode in the state
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = value;
    setVerificationCode(newVerificationCode.join(''));
  };
  
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      const prevIndex = index - 1;
      if (index > 0) {
        inputsRef.current[prevIndex].focus();
        inputsRef.current[prevIndex + 1].value = '';
      }
    }
  };

  const handleVerification = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post('http://localhost:3000/verification', {
        verificationCode,
        userEmail, // Pass userEmail in the request
      });

      if (response.data && response.data.message === 'Verification successful') {
        toast.success('Verification successful');
        navigate('/resetpassword', { state: { email: userEmail } });

      } else {
        toast.error('Invalid verification code');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while verifying the code');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="section-container flex-row verification-page">
      <div className="flex-row section gap-xl flex-wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="verify-form-container max-wdth flex-col align-left gap-sm">
          <div className="title flex-col align-left gap-xs">
            <h4 className="h4 uppercase">OTP VERIFICATION</h4>
            <p className="body">We have sent OTP on your email</p>
          </div>
          <form onSubmit={handleVerification} className="flex-col max-wdth align-left gap-sm">
            <div className="num-verify flex-row gap-sm">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  className="auth-input"
                  placeholder=""
                  ref={(el) => (inputsRef.current[index] = el)}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  maxLength={1}
                />
              ))}
            </div>
            <p className="body">
              Didn’t receive an OTP? <Link to="/resend-otp">Resend OTP</Link>
            </p>
            <Button
              text={loading ? 'Verifying...' : 'Verify'}
              btnStyle="auth-btn"
              customBtnStyle="max-wdth"
              frameStyle="max-wdth"
              type="submit"
              disabled={loading}
            ></Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verification;
