import { ArrowLeft, Home, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LookingFor = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white px-6 py-12">
      <div className="max-w-lg mx-auto">
        <button 
          onClick={() => navigate("/user-profile")} 
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors mb-8"
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>

        <h1 className="text-4xl font-bold mb-12">What are you looking for?</h1>

        <div className="space-y-4">
          <button 
            onClick={() => navigate("/find-people")}
            className="w-full p-6 flex items-center gap-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <Users size={48} />
            </div>
            <span className="text-2xl font-medium">Find Roommates</span>
          </button>

          <button 
            onClick={() => navigate("/find-home")}
            className="w-full p-6 flex items-center gap-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <Home size={48} />
            </div>
            <span className="text-2xl font-medium">Find Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LookingFor;
