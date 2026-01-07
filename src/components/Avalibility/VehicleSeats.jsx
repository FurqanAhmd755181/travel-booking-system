// components/availability/VehicleSeats.jsx
"use client";

import { Seat } from "./Seats";

const VehicleSeats = ({ totalSeats, bookedSeats }) => {
  return (
    <div className="grid grid-cols-8 gap-2 mb-4">
      {Array.from({ length: totalSeats }).map((_, i) => {
        const seatNo = i + 1;
        const isBooked = bookedSeats.includes(seatNo);

        return <Seat key={seatNo} seatNo={seatNo} isBooked={isBooked} />;
      })}
    </div>
  );
};

export default VehicleSeats;
