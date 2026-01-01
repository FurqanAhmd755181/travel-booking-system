// components/CancelSection.jsx
const Cancel = () => {
  return (
    <section className="max-w-2xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Cancel Booking</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block font-semibold mb-1">Booking ID</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Phone Number</label>
          <input type="text" className="w-full border rounded px-3 py-2" />
        </div>
        <button className="w-full bg-red-500 text-white rounded-lg py-3 font-semibold hover:bg-red-600 transition">
          Cancel Booking
        </button>
      </div>
    </section>
  );
}

export default Cancel;
