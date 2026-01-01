"use client";

import RouteSelect from "./RouteSelect";
import DateSelect from "./DateSelect";
import ServiceSelect from "./ServiceSelect";
import SeatsSelect from "./SeatsSelect";
import { isSeatCountValid } from "@/utils/seatHelpers";
import { checkAvailability } from "@/services/booking.api";
import { useState } from "react";
// import { useRouter } from "next/navigation";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    route: "",
    date: "",
    serviceType: "",
    busClass: "",
    seats: 1,
  });

  const [error, setError] = useState("");

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setError("");

    if (!formData.route || !formData.date || !formData.serviceType) {
      setError("Please Fill All required fields");
      return;
    }

    const isValidSeats = isSeatCountValid(
      formData.seats,
      formData.serviceType,
      formData.busClass
    );

    if (!isValidSeats) {
      setError("invalid number of seats selected");
    }

    try {
      const result = await checkAvailability(formData);

      if (!result.available) {

        setError(result.message || "No availability found")
      }

      // route.push("/availability")

    } catch (error) {
      setError(error.message || "something went wrong ");
    }
  };

  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 md:p-8 grid gap-4 md:grid-cols-2">
      <RouteSelect
        value={formData.route}
        onChange={(value) => updateField("route", value)}
      />
      <DateSelect
        value={formData.date}
        onChange={(value) => updateField("date", value)}
      />

      <ServiceSelect
        serviceType={formData.serviceType}
        busClass={formData.busClass}
        onServiceChange={(value) => updateField("serviceType", value)}
        onBusClassChange={(value) => updateField("busClass", value)}
      />

      <SeatsSelect
        value={formData.seats}
        onChange={(value) => updateField("seats", Number(value))}
      />

      {/* Error Message */}
      {error && <div className="col-span-2 text-red-600 text-sm">{error}</div>}

      {/* Button */}
      <div className="col-span-2">
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
