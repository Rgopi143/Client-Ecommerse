export function Banner() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white border-b-2 border-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="relative h-72 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700 shadow-2xl">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-between px-12">
            <div className="text-white max-w-lg z-10">
              <h2 className="text-5xl font-bold mb-4 animate-fade-in">
                The Big Billion Days
              </h2>
              <p className="text-xl mb-8 text-blue-100 font-medium">
                Incredible deals on your favorite brands
              </p>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold px-10 py-4 rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
                Shop Now →
              </button>
            </div>
            <div className="text-white text-right z-10">
              <p className="text-7xl font-black mb-2 drop-shadow-2xl animate-bounce">50%</p>
              <p className="text-2xl text-yellow-300 font-bold">OFF</p>
              <p className="text-lg text-blue-100 mt-2">On selected items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
