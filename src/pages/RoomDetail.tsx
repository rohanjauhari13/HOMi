
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Home as HomeIcon, Thermometer, Droplets } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const RoomDetail = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  
  // Convert roomId format (e.g., "living-room" to "Living Room")
  const roomName = roomId
    ? roomId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : '';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold ml-4">{roomName}</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 max-w-md mx-auto w-full">
        <div className="space-y-6">
          {/* Room Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <Thermometer className="h-6 w-6 text-blue-600 mb-2" />
                <p className="text-sm text-gray-500">Temperature</p>
                <p className="text-xl font-semibold">72°F</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <Droplets className="h-6 w-6 text-blue-600 mb-2" />
                <p className="text-sm text-gray-500">Humidity</p>
                <p className="text-xl font-semibold">45%</p>
              </CardContent>
            </Card>
          </div>

          {/* Devices */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Devices</h2>
            
            <div className="space-y-3">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 rounded-full p-3">
                      <HomeIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Main Light</h3>
                      <p className="text-sm text-gray-500">On</p>
                    </div>
                  </div>
                  <Toggle aria-label="Toggle light" pressed={true} />
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 rounded-full p-3">
                      <HomeIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Smart TV</h3>
                      <p className="text-sm text-gray-500">Off</p>
                    </div>
                  </div>
                  <Toggle aria-label="Toggle TV" />
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 rounded-full p-3">
                      <HomeIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Smart Blinds</h3>
                      <p className="text-sm text-gray-500">Closed</p>
                    </div>
                  </div>
                  <Toggle aria-label="Toggle blinds" />
                </CardContent>
              </Card>
              
              {roomName === "Living Room" && (
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-100 rounded-full p-3">
                        <HomeIcon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Air Purifier</h3>
                        <p className="text-sm text-gray-500">On</p>
                      </div>
                    </div>
                    <Toggle aria-label="Toggle air purifier" pressed={true} />
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Scenes */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Scenes</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-sm hover:shadow transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full p-3 w-fit mb-4">
                    <HomeIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-medium">Morning</h3>
                  <p className="text-sm text-gray-500">3 devices</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm hover:shadow transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-indigo-100 rounded-full p-3 w-fit mb-4">
                    <HomeIcon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="font-medium">Evening</h3>
                  <p className="text-sm text-gray-500">4 devices</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm hover:shadow transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-purple-100 rounded-full p-3 w-fit mb-4">
                    <HomeIcon className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="font-medium">Movie</h3>
                  <p className="text-sm text-gray-500">2 devices</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm hover:shadow transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-gray-100 rounded-full p-3 w-fit mb-4">
                    <HomeIcon className="h-5 w-5 text-gray-600" />
                  </div>
                  <h3 className="font-medium">Away</h3>
                  <p className="text-sm text-gray-500">All devices</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t p-4">
        <div className="flex justify-around max-w-md mx-auto">
          <Button variant="ghost" className="flex flex-col items-center" onClick={() => navigate('/')}>
            <HomeIcon className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <HomeIcon className="h-5 w-5 text-blue-600" />
            <span className="text-xs mt-1">Rooms</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <HomeIcon className="h-5 w-5" />
            <span className="text-xs mt-1">Devices</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <HomeIcon className="h-5 w-5" />
            <span className="text-xs mt-1">Settings</span>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default RoomDetail;
