// components/booking/ServiceSelect.jsx
"use client";

const ServiceSelect = ({
  serviceType,
  busClass,
  onServiceChange,
  onBusClassChange,
}) => {
  return (
    <div className="relative group">
      <label className="block mb-1 font-semibold">Service Type</label>

      {/* Fake Select */}
      <button className="w-full border rounded px-3 py-2 bg-white text-left">
        {serviceType === "Bus" && busClass
          ? `Bus - ${busClass}`
          : serviceType || "Select Service"}
      </button>

      {/* Dropdown */}
      <div className="absolute z-20 mt-1 w-full bg-white border rounded shadow-lg hidden group-hover:block">
        {/* Bus */}
        <div className="relative group/bus">
          <div
            onClick={() => onServiceChange("Bus")}
            className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex justify-between items-center"
          >
            <span>Bus</span>
            <span className="text-sm text-gray-400">›</span>
          </div>

          {/* Bus Submenu */}
          <div className="absolute left-full top-0 ml-1 hidden group-hover/bus:block bg-white border rounded shadow-lg min-w-[180px]">
            <div
              onClick={() => onBusClassChange("Business")}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
            >
              Business Class
            </div>
            <div
              onClick={() => onBusClassChange("Normal")}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
            >
              Normal Class
            </div>
          </div>
        </div>

        {/* Van */}
        <div
          onClick={() => {
            onServiceChange("Van"), onBusClassChange(" ");
          }}
          className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
        >
          Van
        </div>

        {/* Full Car */}
        <div
          onClick={() => {
            onServiceChange("FullCar"), onBusClassChange("");
          }}
          className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
        >
          Full Car
        </div>
      </div>
    </div>
  );
};

export default ServiceSelect;
