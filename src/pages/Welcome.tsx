
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img 
        src="/lovable-uploads/d7cc3613-524e-42be-bbc4-a369231c7c5b.png" 
        alt="Apartment building" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content Container - White card with rounded corners */}
      <div className="absolute bottom-0 left-0 right-0 bg-white pt-16 pb-12 px-8 rounded-t-[40px]">
        {/* Red Corner Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-400 rounded-bl-[100px] -z-10" />
        
        {/* Logo and Tagline */}
        <div className="mb-16 relative">
          <h1 className="text-6xl font-bold mb-1">HOMi</h1>
          <p className="text-sm text-gray-600 italic">powered by APMC Alpha</p>
          
          <div className="mt-12 space-y-2">
            <p className="text-2xl font-medium">Discover a place to call <span className="font-bold">home</span> and</p>
            <p className="text-2xl font-bold mb-4">homies <span className="font-normal">who feel like family!</span></p>
          </div>
        </div>
        
        {/* Get Started Button */}
        <Button 
          className="w-full py-6 rounded-md bg-black text-white hover:bg-gray-800 text-lg"
          onClick={() => navigate("/")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
