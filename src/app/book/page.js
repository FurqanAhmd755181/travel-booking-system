// components/Book.jsx
"use client";

import BookingForm from "@/components/bookings/BookingForm";

const Book = () => {
  return (
    <section className="relative bg-blue-600 text-white rounded-lg overflow-hidden mb-10">
      {/* Background Image */}
      {/* <div className="absolute inset-0 opacity-20 bg-[url('/bus-hero.jpg')] bg-cover bg-center"></div> */}

      <div className="relative z-10 max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Book Your Intercity Ride Online
        </h1>

        <p className="mb-6 text-lg">
          Book your ride online in seconds – no login required!
        </p>

        <BookingForm />
      </div>
    </section>
  );
};

export default Book;
