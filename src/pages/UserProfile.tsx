
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { ChevronRight } from "lucide-react";

const UserProfile = () => {
  const navigate = useNavigate();
  
  // User profile fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [origin, setOrigin] = useState("");
  
  // Preferences
  const [preferences, setPreferences] = useState<string[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);
  
  const preferenceOptions = [
    "Vegetarian", "Non-Vegetarian", "Immediately Available",
    "All Girls", "All Boys", "Mixed Gender",
    "Student", "Working", "I have a pet", "Non-Smoker", "Non-Drinker"
  ];
  
  const amenityOptions = [
    "Air conditioning", "Assisted living", "Disability Access",
    "Controlled access", "Non-Furnished", "In unit Laundry",
    "Elevator", "Extra Storage", "Closets", "Car Parking",
    "High speed internet", "Furnished", "Pet allowed"
  ];
  
  const togglePreference = (pref: string) => {
    setPreferences(prev => 
      prev.includes(pref) 
        ? prev.filter(p => p !== pref)
        : [...prev, pref]
    );
  };
  
  const toggleAmenity = (amenity: string) => {
    setAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save user profile data (would typically be sent to backend)
    const profileData = {
      name,
      email,
      phone,
      program,
      origin,
      preferences,
      amenities
    };
    
    console.log("Profile data:", profileData);
    
    toast("Profile Saved", {
      description: "Your profile information has been saved successfully.",
    });
    
    // Navigate to home page
    navigate("/home");
  };
  
  const handleSkip = () => {
    toast("Profile Skipped", {
      description: "You can complete your profile later in settings.",
    });
    navigate("/home");
  };
  
  return (
    <div className="min-h-screen w-full bg-white p-6 pb-20">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-end mb-4">
          <button 
            onClick={handleSkip}
            className="flex items-center text-md font-medium"
          >
            Skip <ChevronRight size={20} />
          </button>
        </div>
        
        <h1 className="text-4xl font-bold mb-10">Tell us about yourself</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-lg">Name</Label>
            <Input 
              id="name"
              type="text" 
              placeholder="Husky01" 
              className="h-14 text-md rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg">Northeastern email</Label>
            <Input 
              id="email"
              type="email" 
              placeholder="XXX@northeastern.edu" 
              className="h-14 text-md rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-lg">Phone Number</Label>
            <Input 
              id="phone"
              type="tel" 
              placeholder="+01 234 567 89" 
              className="h-14 text-md rounded-lg"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="program" className="text-lg">Program of Study</Label>
            <Input 
              id="program"
              type="text" 
              placeholder="Computer Science, Business, etc." 
              className="h-14 text-md rounded-lg"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="origin" className="text-lg">Where are you from?</Label>
            <Input 
              id="origin"
              type="text" 
              placeholder="City, Country" 
              className="h-14 text-md rounded-lg"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-3">
            <Label className="text-lg">Preferences</Label>
            <div className="flex flex-wrap gap-2">
              {preferenceOptions.map((pref) => (
                <button
                  key={pref}
                  type="button"
                  onClick={() => togglePreference(pref)}
                  className={`rounded-full px-4 py-2 text-sm ${
                    preferences.includes(pref) 
                      ? "bg-gray-800 text-white" 
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {pref}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <Label className="text-lg">Amenities</Label>
            <div className="flex flex-wrap gap-2">
              {amenityOptions.map((amenity) => (
                <button
                  key={amenity}
                  type="button"
                  onClick={() => toggleAmenity(amenity)}
                  className={`rounded-full px-4 py-2 text-sm ${
                    amenities.includes(amenity) 
                      ? "bg-gray-800 text-white" 
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {amenity}
                </button>
              ))}
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full h-14 mt-8 bg-black text-white hover:bg-gray-800 rounded-md text-base"
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
