"use client";

const RouteSelect = ({ value, onChange }) => {
  return (
    <div>
      <label className="block mb-1 font-semibold">Route</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded px-3 py-2"
      >
        <option value="">Select Route</option>
        <option>Swat → Lahore</option>
        <option>Lahore → Swat</option>
        <option>Swat → Karachi</option>
        <option>Karachi → Swat</option>
      </select>
    </div>
  );
};

export default RouteSelect;
