
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home as HomeIcon, Thermometer, Power } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const DeviceControl = () => {
  const navigate = useNavigate();
  const [brightness, setBrightness] = useState(75);
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold ml-4">Living Room Light</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 max-w-md mx-auto w-full">
        <div className="space-y-8">
          {/* Device Status Card */}
          <Card className="border-0 shadow-sm bg-blue-50">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="bg-white rounded-full p-4 mb-6">
                <HomeIcon className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold">Living Room Light</h2>
              <p className="text-gray-600 mb-4">Connected</p>
              
              <div className="w-full mt-4 flex justify-center">
                <Button 
                  className={`rounded-full w-16 h-16 flex items-center justify-center ${isOn ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 hover:bg-gray-400'}`}
                  onClick={() => setIsOn(!isOn)}
                >
                  <Power className="h-8 w-8 text-white" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Controls */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Brightness</h3>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <HomeIcon className="h-5 w-5 text-gray-400" />
                    <span className="font-medium">{brightness}%</span>
                    <HomeIcon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <Slider
                    value={[brightness]}
                    min={0}
                    max={100}
                    step={1}
                    disabled={!isOn}
                    onValueChange={(value) => setBrightness(value[0])}
                    className="mt-2"
                  />
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Mode</h3>
              <div className="grid grid-cols-3 gap-3">
                <Card className="border-0 shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="bg-yellow-100 rounded-full p-2 mb-2">
                      <HomeIcon className="h-5 w-5 text-yellow-600" />
                    </div>
                    <p className="text-sm font-medium">Warm</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm bg-blue-50 hover:shadow transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="bg-white rounded-full p-2 mb-2">
                      <HomeIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-sm font-medium">Cool</p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center">
                    <div className="bg-indigo-100 rounded-full p-2 mb-2">
                      <HomeIcon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <p className="text-sm font-medium">Night</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Schedule</h3>
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Auto turn off</h4>
                    <p className="text-sm text-gray-500">After 30 minutes</p>
                  </div>
                  <Toggle aria-label="Auto turn off" />
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
            <HomeIcon className="h-5 w-5" />
            <span className="text-xs mt-1">Rooms</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <HomeIcon className="h-5 w-5 text-blue-600" />
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

export default DeviceControl;
