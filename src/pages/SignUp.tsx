
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

const SignUp = () => {
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

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast("Invalid Email", {
        description: "Please use a northeastern.edu email address",
      });
      return;
    }
    
    // This would be replaced with actual registration logic
    console.log("Signing up with:", email, password);
    toast("Account created", {
      description: "Welcome to HOMi!",
    });
    navigate("/home");
  };

  return (
    <div className="min-h-screen w-full bg-white px-6 py-12 flex flex-col">
      <h1 className="text-4xl font-bold mb-10">Sign Up</h1>
      
      <form onSubmit={handleSignUp} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-lg">Email</Label>
          <Input 
            id="email"
            type="email" 
            placeholder="Email" 
            className="h-14 text-lg rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password" className="text-lg">Password</Label>
          <Input 
            id="password"
            type="password" 
            placeholder="Password" 
            className="h-14 text-lg rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full h-14 mt-6 bg-black text-white hover:bg-gray-800 rounded-md text-lg"
        >
          Create Account
        </Button>
      </form>
      
      <div className="mt-10 text-center">
        <button 
          className="text-lg"
          onClick={() => navigate("/signin")}
        >
          Already have an account? <span className="underline font-medium">Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
