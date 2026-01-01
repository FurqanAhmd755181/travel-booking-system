// app/availability/page.jsx
"use client";

const vehicles = [
  {
    id: 1,
    type: "Bus",
    vehicleNo: "SW-101",
    totalSeats: 40,
    bookedSeats: [1, 2, 5, 6, 10, 11],
  },
  {
    id: 2,
    type: "Bus",
    vehicleNo: "SW-202",
    totalSeats: 40,
    bookedSeats: [3, 4, 7, 8, 12, 15, 18],
  },
  {
    id: 3,
    type: "Van",
    vehicleNo: "VN-12",
    totalSeats: 15,
    bookedSeats: [1, 2, 3],
  },
  {
    id: 4,
    type: "Full Car",
    vehicleNo: "CAR-88",
    totalSeats: 4,
    bookedSeats: [],
  },
];

export default function Availability() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Available Vehicles
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {vehicles.map((vehicle) => {
          const availableSeats =
            vehicle.totalSeats - vehicle.bookedSeats.length;

          return (
            <div
              key={vehicle.id}
              className="border rounded-lg shadow p-5 bg-white"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold">
                  {vehicle.type}
                </h2>
                <span className="text-sm text-gray-500">
                  Vehicle No: {vehicle.vehicleNo}
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

              {/* Seat Layout */}
              <div className="grid grid-cols-8 gap-2 mb-4">
                {Array.from({ length: vehicle.totalSeats }).map((_, i) => {
                  const seatNo = i + 1;
                  const isBooked = vehicle.bookedSeats.includes(seatNo);

                  return (
                    <div
                      key={seatNo}
                      className={`text-xs text-center py-1 rounded
                        ${
                          isBooked
                            ? "bg-red-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                    >
                      {seatNo}
                    </div>
                  );
                })}
              </div>

              {/* Action */}
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                Select Vehicle
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
