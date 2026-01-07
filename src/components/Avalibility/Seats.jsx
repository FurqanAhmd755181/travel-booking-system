"use client";

export const Seat = ({ seatNo, isBooked }) => {
  return (
    <div
      className={`text-xs text-center py-1 rounded
        ${isBooked ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}
    >
      {seatNo}
    </div>
  );
};

