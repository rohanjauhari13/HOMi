
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    if (!email.includes("@northeastern.edu")) {
      setEmailError("Email must be a northeastern.edu email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast("Invalid Email", {
        description: "Please use a northeastern.edu email address",
      });
      return;
    }
    
    // This would be replaced with actual authentication logic
    console.log("Signing in with:", email, password);
    toast("Sign in successful", {
      description: "Welcome back!",
    });
    navigate("/home");
  };

  return (
    <div className="min-h-screen w-full bg-white px-6 py-12 flex flex-col items-center">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-medium mb-8">Sign In</h1>
        
        <form onSubmit={handleSignIn} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-normal">Email</Label>
            <Input 
              id="email"
              type="email" 
              placeholder="XXX@northeastern.edu" 
              className="h-12 text-base rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
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
          
          <Button 
            type="submit" 
            className="w-full h-12 mt-6 bg-black text-white hover:bg-gray-800 rounded-md text-base"
          >
            Login
          </Button>
        </form>
        
        <div className="mt-6 text-center bg-gray-50 py-3 rounded-full">
          <span className="text-base text-gray-700">Don't have an account? </span>
          <button 
            className="text-base text-black font-normal"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
