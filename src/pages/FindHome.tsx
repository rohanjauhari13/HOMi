
import { ArrowLeft, Bath, Bed, Users, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ApartmentListing {
  id: string;
  image: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  isSharedSpot: boolean;
  isRedEyeAccessible?: boolean;
  rent: number;
}

const apartmentListings: ApartmentListing[] = [
  {
    id: "1",
    image: "/lovable-uploads/88aa6c0d-3d05-4120-b808-9edd05ef3f12.png",
    title: "16, Delle Ave.",
    location: "Mission Main",
    beds: 3,
    baths: 1.5,
    isSharedSpot: true,
    isRedEyeAccessible: true,
    rent: 660,
  },
  {
    id: "2",
    image: "/lovable-uploads/88aa6c0d-3d05-4120-b808-9edd05ef3f12.png",
    title: "1330 Boylston St., #1415",
    location: "Fenway",
    beds: 2,
    baths: 1,
    isSharedSpot: true,
    rent: 890,
  },
];

const FindHome = () => {
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
            <Button variant="default" className="bg-black text-white rounded-full">
              Find House
            </Button>
            <Button variant="outline" className="rounded-full" onClick={() => navigate("/home")}>
              Find People
            </Button>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-200" />
      </div>

      {/* Filters */}
      <div className="p-4">
        <Button variant="outline" className="rounded-full gap-2">
          <Filter size={16} />
          Add Filters
        </Button>
      </div>

      {/* Title */}
      <div className="px-4 mb-4">
        <h1 className="text-2xl font-semibold">
          All apartments near Northeastern University
        </h1>
      </div>

      {/* Listings */}
      <div className="px-4 space-y-4 pb-20">
        {apartmentListings.map((listing) => (
          <div
            key={listing.id}
            className="rounded-xl border border-gray-200 overflow-hidden"
          >
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {listing.title} - {listing.location}
              </h2>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <Bed size={20} />
                  <span>{listing.beds} Bed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath size={20} />
                  <span>{listing.baths} Bath</span>
                </div>
                {listing.isSharedSpot && (
                  <div className="flex items-center gap-2">
                    <Users size={20} />
                    <span>Shared Spot</span>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center mt-3">
                {listing.isRedEyeAccessible && (
                  <span className="text-sm text-gray-600">Red-eye Accessible</span>
                )}
                <span className="text-xl font-semibold">
                  Rent ${listing.rent}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-white flex justify-around p-4">
        <button className="text-red-500">
          <div className="flex flex-col items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
        <button className="text-gray-500">
          <div className="flex flex-col items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FindHome;

