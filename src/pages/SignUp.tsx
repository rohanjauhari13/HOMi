import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { AlertCircle } from "lucide-react";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [neuEmail, setNeuEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [neuEmailError, setNeuEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateNeuEmail = (email: string) => {
    if (!email.endsWith("@northeastern.edu")) {
      setNeuEmailError("Email must be a northeastern.edu email address");
      return false;
    }
    setNeuEmailError("");
    return true;
  };

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validEmail = validateNeuEmail(neuEmail);
    const validPasswords = validatePasswords();
    
    if (!validEmail) {
      toast("Invalid Email", {
        description: "Please use a northeastern.edu email address",
      });
      return;
    }

    if (!validPasswords) {
      toast("Password Error", {
        description: "Passwords do not match",
      });
      return;
    }
    
    // This would be replaced with actual registration logic
    console.log("Signing up with:", name, neuEmail, password);
    toast("Account created", {
      description: "An OTP has been sent to your email.",
    });
    
    // Navigate to the verification page, passing the email
    navigate("/verify-email", { state: { email: neuEmail } });
  };

  return (
    <div className="min-h-screen w-full bg-white px-6 py-12 flex flex-col items-center">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-medium mb-8">Create Account</h1>
        
        <form onSubmit={handleSignUp} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-normal">Name</Label>
            <Input 
              id="name"
              type="text" 
              placeholder="Name" 
              className="h-12 text-base rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="neuEmail" className="text-base font-normal">Northeastern email</Label>
            <Input 
              id="neuEmail"
              type="email" 
              placeholder="XXX@northeastern.edu" 
              className="h-12 text-base rounded-lg"
              value={neuEmail}
              onChange={(e) => {
                setNeuEmail(e.target.value);
                if (neuEmailError) validateNeuEmail(e.target.value);
              }}
              required
            />
            {neuEmailError && (
              <div className="flex items-center space-x-2 text-red-500 text-sm">
                <AlertCircle size={16} />
                <p>{neuEmailError}</p>
              </div>
            )}
            <p className="text-gray-500 text-sm">An OTP will be sent to your email.</p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-base font-normal">Password</Label>
            <Input 
              id="password"
              type="password" 
              placeholder="Password" 
              className="h-12 text-base rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-base font-normal">Confirm Password</Label>
            <Input 
              id="confirmPassword"
              type="password" 
              placeholder="Password" 
              className="h-12 text-base rounded-lg"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (passwordError && password) validatePasswords();
              }}
              required
            />
            {passwordError && (
              <div className="flex items-center space-x-2 text-red-500 text-sm">
                <AlertCircle size={16} />
                <p>{passwordError}</p>
              </div>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-12 mt-6 bg-black text-white hover:bg-gray-800 rounded-md text-base"
          >
            Create Account
          </Button>
        </form>
        
        <div className="mt-6 text-center bg-gray-50 py-3 rounded-full">
          <span className="text-base text-gray-700">Already have an account? </span>
          <button 
            className="text-base text-black font-normal"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
