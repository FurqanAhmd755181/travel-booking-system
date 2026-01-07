// components/availability/AvailabilityList.jsx
"use client";

import VehicleCard from "./VehicleCard";

const AvailabilityList = ({ vehicles, serviceType, onSelectVehicle }) => {
  if (!vehicles || vehicles.length === 0) {
    return (
      <p className="text-red-600">
        Sorry, no vehicles available for this selection.
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.vehicleNo}
          vehicle={vehicle}
          serviceType={serviceType}
          onSelect={onSelectVehicle}
        />
      ))}
    </div>
  );
};

export default AvailabilityList;
