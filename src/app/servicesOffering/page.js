// components/ServicesSection.jsx
const Services = () => {
  return (
    <section className="max-w-6xl mx-auto mb-10">
      {/* Available Routes */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Available Routes</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2">Swat → Lahore</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-sm">Business Class</span>
            <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-sm">Normal Class</span>
            <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-sm">Bus</span>
            <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-sm">Full Car</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="font-bold text-xl mb-2">Swat → Karachi</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-sm">Business Class</span>
            <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-sm">Normal Class</span>
            <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-sm">Bus</span>
            <span className="bg-yellow-400 text-gray-800 px-2 py-1 rounded-full text-sm">Full Car</span>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">How It Works</h2>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-blue-600 text-3xl mb-4">🛣️</div>
          <h3 className="font-semibold mb-2">Select Route & Date</h3>
          <p className="text-gray-600 text-sm">Choose your route and travel date easily.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-blue-600 text-3xl mb-4">💺</div>
          <h3 className="font-semibold mb-2">Pick Seat / Full Car</h3>
          <p className="text-gray-600 text-sm">Select seats or book full car if needed.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-blue-600 text-3xl mb-4">👤</div>
          <h3 className="font-semibold mb-2">Enter Details</h3>
          <p className="text-gray-600 text-sm">Provide your name and phone number.</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="text-blue-600 text-3xl mb-4">🎫</div>
          <h3 className="font-semibold mb-2">Get Booking ID</h3>
          <p className="text-gray-600 text-sm">Receive booking ID and confirmation instantly.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;