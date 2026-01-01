"use client";

const DateSelect = ({ value, onChange }) => {
  return (
    <div>
      <label className="block mb-1 font-semibold">Travel Date</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="date"
        className="w-full border rounded px-3 py-2"
      />
    </div>
  );
};

export default DateSelect;
