
import { ArrowLeft, Home, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface RoommateProfile {
  id: string;
  name: string;
  age: number;
  program: string;
  gender: "Male" | "Female";
  dietaryPreference: string;
  lookingFor: string;
  location: string;
  image: string;
}

const roommateProfiles: RoommateProfile[] = [
  {
    id: "1",
    name: "Riddhi",
    age: 26,
    program: "MSIS",
    gender: "Female",
    dietaryPreference: "Non-Vegetarian",
    lookingFor: "Looking for a house",
    location: "Within 1 mile from NU",
    image: "/lovable-uploads/f81bf7c9-0788-4f46-ae4a-464c4257ceb4.png",
  },
  {
    id: "2",
    name: "Ronak",
    age: 24,
    program: "MSEM",
    gender: "Male",
    dietaryPreference: "Non-Vegetarian",
    lookingFor: "Looking for a house",
    location: "Within 1 mile from NU",
    image: "/lovable-uploads/f81bf7c9-0788-4f46-ae4a-464c4257ceb4.png",
  },
  {
    id: "3",
    name: "Sania",
    age: 25,
    program: "MSIS",
    gender: "Female",
    dietaryPreference: "Non-Vegetarian",
    lookingFor: "Looking for a house",
    location: "Within 1 mile from NU",
    image: "/lovable-uploads/f81bf7c9-0788-4f46-ae4a-464c4257ceb4.png",
  },
];

const FindPeople = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/looking-for")}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-full" onClick={() => navigate("/find-home")}>
              Find House
            </Button>
            <Button variant="default" className="bg-black text-white rounded-full">
              Find People
            </Button>
          </div>
        </div>
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-gray-200" />
        </Avatar>
      </div>

      {/* Roommate Listings */}
      <div className="p-4 space-y-4">
        {roommateProfiles.map((profile) => (
          <div
            key={profile.id}
            className="p-4 rounded-xl border border-gray-200 space-y-4"
          >
            <div className="flex items-start gap-4">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">
                  {profile.name}, {profile.age}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <Users size={16} className="text-gray-600" />
                  <span className="text-gray-600">{profile.program}</span>
                  <Home size={16} className="text-gray-600 ml-2" />
                  <span className="text-gray-600">{profile.lookingFor}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-600">{profile.dietaryPreference}</span>
                  <span className="text-gray-600 mx-2">•</span>
                  <span className="text-gray-600">{profile.gender}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-600">{profile.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-white flex justify-around p-4">
        <button className="text-red-500">
          <Home size={24} />
        </button>
        <button className="text-gray-500">
          <Users size={24} />
        </button>
      </div>
    </div>
  );
};

export default FindPeople;
