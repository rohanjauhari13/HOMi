
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronRight, Home as HomeIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">HOMi</div>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <HomeIcon className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 max-w-md mx-auto w-full">
        <div className="space-y-6">
          {/* Banner */}
          <Card className="bg-blue-50 border-0 overflow-hidden rounded-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">Welcome Home</h2>
              <p className="text-gray-600 mb-4">
                Control your home environment with just a few taps.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Rooms */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Rooms</h2>
              <Button variant="ghost" className="text-blue-600 p-0 h-auto flex items-center">
                See All <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Link to="/room/living-room">
                <Card className="border-0 shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 rounded-full p-3 w-fit mb-4">
                      <HomeIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium">Living Room</h3>
                    <p className="text-sm text-gray-500">4 devices</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/room/bedroom">
                <Card className="border-0 shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 rounded-full p-3 w-fit mb-4">
                      <HomeIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium">Bedroom</h3>
                    <p className="text-sm text-gray-500">2 devices</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/room/kitchen">
                <Card className="border-0 shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 rounded-full p-3 w-fit mb-4">
                      <HomeIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium">Kitchen</h3>
                    <p className="text-sm text-gray-500">3 devices</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/room/bathroom">
                <Card className="border-0 shadow-sm hover:shadow transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-gray-100 rounded-full p-3 w-fit mb-4">
                      <HomeIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium">Bathroom</h3>
                    <p className="text-sm text-gray-500">1 device</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Devices */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Devices</h2>
              <Button variant="ghost" className="text-blue-600 p-0 h-auto flex items-center">
                See All <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <div className="space-y-3">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 rounded-full p-3">
                      <HomeIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Living Room Light</h3>
                      <p className="text-sm text-gray-500">On</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Control
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 rounded-full p-3">
                      <HomeIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Thermostat</h3>
                      <p className="text-sm text-gray-500">72°F</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Control
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 rounded-full p-3">
                      <HomeIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Security Camera</h3>
                      <p className="text-sm text-gray-500">Active</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t p-4">
        <div className="flex justify-around max-w-md mx-auto">
          <Button variant="ghost" className="flex flex-col items-center">
            <HomeIcon className="h-5 w-5 text-blue-600" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <HomeIcon className="h-5 w-5" />
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

export default Index;
