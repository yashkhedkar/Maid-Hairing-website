import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Login.css";

const Login = ({ onLogin }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const [currentStep, setCurrentStep] = useState('login'); // 'login' or 'signup'
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  const validateMobileNumber = () => {
    if (!mobileNumber) {
      setError('Please enter a mobile number');
      return false;
    }
    if (mobileNumber.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return false;
    }
    setError('');
    return true;
  };

  const handleSendOTP = (viaWhatsApp = false) => {
    if (!validateMobileNumber()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      setResendTimer(30); // 30 seconds countdown
      setError('');
      alert(`${viaWhatsApp ? 'WhatsApp' : 'SMS'} OTP sent to ${countryCode}${mobileNumber}`);
    }, 1500);
  };

  const handleResendOTP = () => {
    if (resendTimer > 0) return;
    handleSendOTP();
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (!otp) {
      setError('Please enter OTP');
      return;
    }
    if (otp.length !== 6) {
      setError('OTP must be 6 digits');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        mobile: `${countryCode}${mobileNumber}`,
        verified: true
      };
      localStorage.setItem('user', JSON.stringify(userData));
      onLogin(userData);
      navigate('/', { replace: true }); // Navigate to home page
    } catch (err) {
      setError('OTP verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      setError('Please fill all fields');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        name,
        email,
        mobile: `${countryCode}${mobileNumber}`,
        verified: true
      };
      localStorage.setItem('user', JSON.stringify(userData));
      onLogin(userData);
      navigate('/', { replace: true }); // Navigate to home page
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {error && <div className="error-message">{error}</div>}
        
        {!otpSent ? (
          <>
            <h2 className="login-title">{currentStep === 'login' ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSendOTP(); }}>
              <div className="input-group">
                <select 
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="country-code"
                >
                  <option value="+91">+91 (India)</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                </select>
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 10) setMobileNumber(value);
                  }}
                  placeholder="Mobile No."
                  className="mobile-input"
                  maxLength="10"
                />
              </div>
              
              {currentStep === 'signup' && (
                <>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="form-input"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="form-input"
                  />
                </>
              )}
              
              <button 
                type="submit" 
                className="otp-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span> Sending...
                  </>
                ) : (
                  'Send OTP'
                )}
              </button>
            </form>
            
            <div className="divider">OR</div>
            
            <button 
              className="whatsapp-button"
              onClick={() => handleSendOTP(true)}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner"></span> Sending...
                </>
              ) : (
                'Send WhatsApp OTP'
              )}
            </button>
            
            <div className="auth-switch">
              <span>
                {currentStep === 'login' 
                  ? "Don't have an account? " 
                  : "Already have an account? "}
              </span>
              <button 
                className="link-button"
                onClick={() => setCurrentStep(currentStep === 'login' ? 'signup' : 'login')}
              >
                {currentStep === 'login' ? 'Sign up' : 'Login'}
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="login-title">Verify OTP</h2>
            <p className="mobile-number-display">
              {countryCode}{mobileNumber}
            </p>
            
            <form onSubmit={handleVerifyOTP}>
              <input
                type="text"
                value={otp}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  if (value.length <= 6) setOtp(value);
                }}
                placeholder="Enter 6-digit OTP"
                className="otp-input"
                maxLength="6"
              />
              
              <div className="resend-otp">
                {resendTimer > 0 ? (
                  <span>Resend OTP in {resendTimer} seconds</span>
                ) : (
                  <button 
                    type="button" 
                    className="resend-button"
                    onClick={handleResendOTP}
                  >
                    Resend OTP
                  </button>
                )}
              </div>
              
              <button 
                type="submit" 
                className="verify-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span> Verifying...
                  </>
                ) : (
                  'Verify'
                )}
              </button>
            </form>
            
            <div className="auth-switch">
              <button 
                className="link-button"
                onClick={() => {
                  setOtpSent(false);
                  setOtp('');
                  setError('');
                }}
              >
                Change Number
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;