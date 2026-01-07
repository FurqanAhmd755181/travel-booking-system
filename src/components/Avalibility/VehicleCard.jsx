// components/availability/VehicleCard.jsx
"use client";

import VehicleSeats from "./VehicleSeats";

const VehicleCard = ({ vehicle, serviceType, onSelect }) => {
  const availableSeats = vehicle.totalSeats - vehicle.bookedSeats.length;

  return (
    <div className="border rounded-lg shadow p-5 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold">{vehicle.type}</h2>

          {serviceType === "bus" && (
            <span className="px-2 py-0.5 text-xs bg-indigo-100 text-indigo-700 rounded-full">
              {vehicle.busClass}
            </span>
          )}
        </div>

        <span className="text-sm text-gray-500">
          Vehicle No: {vehicle.vehicleNo} | {vehicle.departureTime}
        </span>
      </div>

      {/* Seat Info */}
      <div className="text-sm text-gray-700 mb-3">
        <p>Total Seats: {vehicle.totalSeats}</p>
        <p className="text-red-600">
          Booked Seats: {vehicle.bookedSeats.length}
        </p>
        <p className="text-green-600 font-semibold">
          Available Seats: {availableSeats}
        </p>
      </div>

      {/* Seats Grid */}
      <VehicleSeats
        totalSeats={vehicle.totalSeats}
        bookedSeats={vehicle.bookedSeats}
      />

      {/* Select Button */}
      <button
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        onClick={() => onSelect(vehicle)}
      >
        Select Vehicle
      </button>
    </div>
  );
};

export default VehicleCard;
