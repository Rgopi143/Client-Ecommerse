export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#172337] to-[#0f172a] text-gray-300 mt-16">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">ABOUT</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Contact Us
              </a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                About Us
              </a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Careers
              </a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Stories
              </a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Corporate Information
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">HELP</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Payments
              </a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Shipping
              </a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Cancellation & Returns
              </a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                FAQ
              </a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Report Infringement
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">POLICY</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Return Policy
              </a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Terms Of Use
              </a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Security
              </a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Privacy
              </a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Sitemap
              </a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">SOCIAL</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Facebook
              </a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                Twitter
              </a></li>
              <li><a href="#" className="hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-white transition-all"></span>
                YouTube
              </a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-gray-800">
        <div className="max-w-screen-xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="font-medium">© 2025 RANBRIDGE SERVICES PRIVATE LIMITED. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
