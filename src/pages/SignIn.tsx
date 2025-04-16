
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be replaced with actual authentication logic
    console.log("Signing in with:", email, password);
    navigate("/home");
  };

  return (
    <div className="min-h-screen w-full bg-white px-6 py-12 flex flex-col">
      <h1 className="text-4xl font-bold mb-10">Sign In</h1>
      
      <form onSubmit={handleSignIn} className="space-y-6">
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
          Login
        </Button>
      </form>
      
      <div className="mt-10 text-center">
        <button 
          className="text-lg"
          onClick={() => navigate("/signup")}
        >
          Don't have an account? <span className="underline font-medium">Sign Up</span>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
