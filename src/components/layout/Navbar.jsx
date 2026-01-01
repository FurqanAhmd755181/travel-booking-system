import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-orange-500 text-2xl">📍</span>
            <span className="text-xl font-bold text-gray-800">
              TravelBook
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link href="#" className="border-b-2 border-blue-600 pb-1">
              Stays
            </Link>
            <Link href="#">Flights</Link>
            <Link href="#">Car Rentals</Link>
            <Link href="#">Deals</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Help</Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1 text-sm">
              🌐 <span>USD</span>
            </div>

            <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-semibold text-sm">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
