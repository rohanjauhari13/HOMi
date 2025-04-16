
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Welcome = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img 
        src="/lovable-uploads/d7cc3613-524e-42be-bbc4-a369231c7c5b.png" 
        alt="Apartment building" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content Container - White card with rounded corners */}
      <div className="absolute bottom-0 left-0 right-0 bg-white pt-12 pb-8 px-6 rounded-t-[32px] md:pt-16 md:pb-12 md:px-8 md:rounded-t-[40px]">
        {/* Red Corner Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-400 rounded-bl-[70px] md:rounded-bl-[100px] -z-10" />
        
        {/* Logo and Tagline */}
        <div className="mb-10 md:mb-16 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-1">HOMi</h1>
          <p className="text-xs md:text-sm text-gray-600 italic">powered by APMC Alpha</p>
          
          <div className="mt-8 md:mt-12 space-y-1 md:space-y-2">
            <p className="text-xl md:text-2xl font-medium">Discover a place to call <span className="font-bold">home</span> and</p>
            <p className="text-xl md:text-2xl font-bold mb-2 md:mb-4">homies <span className="font-normal">who feel like family!</span></p>
          </div>
        </div>
        
        {/* Get Started Button */}
        <Button 
          className="w-full py-5 md:py-6 rounded-full md:rounded-md bg-black text-white hover:bg-gray-800 text-base md:text-lg"
          onClick={() => navigate("/signin")}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
