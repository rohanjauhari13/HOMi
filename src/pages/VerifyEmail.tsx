
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "xxx@northeastern.edu";
  
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);
  
  // Generate a mock OTP for demonstration
  const mockOtp = "1234";
  
  // Countdown timer for resend button
  useEffect(() => {
    // Show the mock OTP for testing purposes
    console.log("Your verification code is:", mockOtp);
    toast("OTP Generated", {
      description: `For testing: Your verification code is ${mockOtp}`,
    });
    
    let timer: number | undefined;
    if (resendDisabled && countdown > 0) {
      timer = window.setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setResendDisabled(false);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [resendDisabled]);
  
  const handleVerify = () => {
    if (otp.length !== 4) {
      toast("Invalid Code", {
        description: "Please enter a valid 4-digit code",
      });
      return;
    }
    
    setIsVerifying(true);
    
    // For demonstration purposes, we'll accept the mock OTP or "1234"
    setTimeout(() => {
      if (otp === mockOtp || otp === "1234") {
        console.log("OTP verified successfully:", otp);
        toast("Email Verified", {
          description: "Your email has been verified successfully",
        });
        // Navigate to user profile page instead of home
        navigate("/user-profile", { state: { email } });
      } else {
        toast("Invalid Code", {
          description: "The code you entered is incorrect. Please try again.",
        });
        setOtp("");
      }
      setIsVerifying(false);
    }, 1000);
  };
  
  const handleResend = () => {
    if (resendDisabled) return;
    
    setOtp("");
    setCountdown(60);
    setResendDisabled(true);
    
    // Generate a new mock OTP
    console.log("New verification code is:", mockOtp);
    toast("Code Resent", {
      description: `For testing: Your new verification code is ${mockOtp}`,
    });
  };
  
  return (
    <div className="min-h-screen w-full bg-white px-6 py-12 flex flex-col">
      <div className="max-w-md w-full mx-auto">
        <button 
          onClick={() => navigate("/signup")} 
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors mb-8"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>
        
        <h1 className="text-4xl font-bold mb-3">Verify Email</h1>
        <p className="text-gray-500 mb-8">
          We have sent a verification code to your<br />
          {email} email
        </p>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-lg font-medium">Code</label>
            <InputOTP maxLength={4} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                <InputOTPSlot index={0} className="w-16 h-16 text-2xl" />
                <InputOTPSlot index={1} className="w-16 h-16 text-2xl" />
                <InputOTPSlot index={2} className="w-16 h-16 text-2xl" />
                <InputOTPSlot index={3} className="w-16 h-16 text-2xl" />
              </InputOTPGroup>
            </InputOTP>
          </div>
          
          <div className="text-center">
            <span className="text-gray-500">
              Didn't receive the code?{" "}
            </span>
            <button 
              className={`font-medium hover:underline ${resendDisabled ? 'text-gray-400' : 'text-black'}`}
              onClick={handleResend}
              disabled={resendDisabled}
            >
              {resendDisabled ? `Resend (${countdown}s)` : "Resend"}
            </button>
          </div>
          
          <Button 
            onClick={handleVerify}
            className="w-full h-14 mt-12 bg-black text-white hover:bg-gray-800 rounded-md text-base font-medium"
            disabled={isVerifying || otp.length !== 4}
          >
            {isVerifying ? "Verifying..." : "Continue"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
