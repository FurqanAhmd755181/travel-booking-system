export default function Footer() {
  return (
    <footer className="bg-[#1f2b3a] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>Customer Service</li>
              <li>FAQs</li>
              <li>Cancellation Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>Destinations</li>
              <li>Travel Guides</li>
              <li>Special Offers</li>
              <li>Affiliate Program</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3 text-xl">
              <span>📘</span>
              <span>🐦</span>
              <span>📸</span>
              <span>▶️</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          
          <div className="flex gap-4 items-center">
            <span>🌐 English (US)</span>
            <span>💵 USD - U.S. Dollar</span>
          </div>

          <div className="flex gap-3">
            <span className="bg-white text-black px-2 py-1 rounded text-xs">VISA</span>
            <span className="bg-white text-black px-2 py-1 rounded text-xs">MasterCard</span>
            <span className="bg-white text-black px-2 py-1 rounded text-xs">PayPal</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 mt-6">
          © 2024 TravelBook. All rights reserved.
          <div className="mt-2 space-x-4 underline">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
