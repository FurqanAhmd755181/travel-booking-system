"use client"

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
// import { getAvailability } from "@/services/booking.api";
import { checkAvailability } from "@/services/booking.api";
import AvailabilityList from "@/components/Avalibility/VehicleList";

const Avaliablity = () => {

  const searchParams = useSearchParams();

  const route = searchParams.get("route");
  const date = searchParams.get("date");
  const servicType = searchParams.get("servicType");
  const busClass = searchParams.get("busClass")
  const seats = Number(searchParams.get("seats"));

  const [vehicles, setVehicle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  
 

  const fetchAvaliablity = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await checkAvailability({route, date, servicType, seats, busClass});

      if (!data.available) {
        setError(data.message || "No vehicles available");
        setVehicle([]);
        return;
      }

      setVehicle(data.vehicles || [] );
    } catch (error) {
      setError(error.message || "failed to fetch the Avaliablity");
    } finally {
      setLoading(false);
    }
  }, [route, date, servicType, seats, busClass]);

  useEffect(() => {
    fetchAvaliablity();
  }, [fetchAvaliablity]);

  const handleSelectVehicle = (vehicle) => {
    console.log("Vehicle selected:", vehicle);
    // Navigate to seat booking or confirm page
  };

  if (loading) return <p>Loading Available Vehicles.....</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Available Vehicles</h1>
      <AvailabilityList
        vehicles={vehicles}
        servicType={vehicles.servicType}
        onSelectVehicle={handleSelectVehicle}
      />
    </section>
  );
};

export default Avaliablity;


// "use client";

// import { useState, useEffect } from "react";
// import AvailabilityList from "@/components/Avalibility/VehicleList";

// const Availability = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Mock vehicle data
//   const mockVehicles = [
//     {
//       vehicleNo: "BUS-101",
//       type: "Bus",
//       totalSeats: 40,
//       bookedSeats: [1, 2, 5, 10],
//       departureTime: "08:00 AM",
//     },
//     {
//       vehicleNo: "BUS-102",
//       type: "Bus",
//       totalSeats: 30,
//       bookedSeats: [3, 4, 8],
//       departureTime: "11:00 AM",
//     },
//     {
//       vehicleNo: "BUS-103",
//       type: "Mini Bus",
//       totalSeats: 20,
//       bookedSeats: [1, 2],
//       departureTime: "02:00 PM",
//     },
//   ];

//   useEffect(() => {
//     // simulate API call
//     setTimeout(() => {
//       setVehicles(mockVehicles);
//       setLoading(false);
//     }, 800);
//   }, []);

//   const handleSelectVehicle = (vehicle) => {
//     console.log("Vehicle selected:", vehicle);
//   };

//   if (loading) return <p className="p-6">Loading Available Vehicles...</p>;
//   if (error) return <p className="p-6 text-red-600">{error}</p>;

//   return (
//     <section className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Available Vehicles</h1>
//       <AvailabilityList vehicles={vehicles} onSelectVehicle={handleSelectVehicle} />
//     </section>
//   );
// };

// export default Availability;
