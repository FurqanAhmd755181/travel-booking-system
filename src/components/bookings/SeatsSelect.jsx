"use client";

const SeatsSelect = ({ value, onChange, maxSeats = 45 }) => {
  return (
    <div>
      <label className="block mb-1 font-semibold">Seats</label>
      <input
        type="number"
        value={value}
        onChange = {(e)=>onChange(e.target.value)}
        min={1}
        max={maxSeats}
        placeholder="Enter number of seats"
        className="w-full border rounded px-3 py-2"
      />
    </div>
  );
};

export default SeatsSelect;
