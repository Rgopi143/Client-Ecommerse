interface FilterSidebarProps {
  brands: string[];
  selectedBrands: string[];
  onBrandToggle: (brand: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
}

export function FilterSidebar({
  brands,
  selectedBrands,
  onBrandToggle,
  minRating,
  onMinRatingChange,
}: FilterSidebarProps) {
  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6 sticky top-[176px] shadow-lg">
      <h2 className="font-bold text-xl mb-6 text-gray-900 flex items-center gap-2">
        <svg className="w-6 h-6 text-[#2874f0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filters
      </h2>

      <div className="mb-6">
        <h3 className="font-bold text-sm mb-3 text-gray-900 uppercase tracking-wider">Brand</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent p-2 rounded-lg transition-all group">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => onBrandToggle(brand)}
                className="w-5 h-5 text-[#2874f0] border-gray-300 rounded focus:ring-[#2874f0] focus:ring-2 group-hover:border-[#2874f0] transition-all"
              />
              <span className="text-sm text-gray-700 font-medium group-hover:text-[#2874f0] transition-colors">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6 border-t-2 border-gray-200 pt-6">
        <h3 className="font-bold text-sm mb-3 text-gray-900 uppercase tracking-wider">
          Customer Rating
        </h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-3 cursor-pointer hover:bg-gradient-to-r hover:from-yellow-50 hover:to-transparent p-2 rounded-lg transition-all group"
            >
              <input
                type="radio"
                name="rating"
                checked={minRating === rating}
                onChange={() => onMinRatingChange(rating)}
                className="w-5 h-5 text-[#2874f0] border-gray-300 focus:ring-[#2874f0] focus:ring-2 group-hover:border-[#2874f0] transition-all"
              />
              <span className="text-sm text-gray-700 font-medium group-hover:text-[#2874f0] transition-colors">
                <span className="text-yellow-500">{'★'.repeat(rating)}</span>
                <span className="text-gray-400">{'★'.repeat(5 - rating)}</span> & above
              </span>
            </label>
          ))}
          <label className="flex items-center gap-3 cursor-pointer hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent p-2 rounded-lg transition-all group">
            <input
              type="radio"
              name="rating"
              checked={minRating === 0}
              onChange={() => onMinRatingChange(0)}
              className="w-5 h-5 text-[#2874f0] border-gray-300 focus:ring-[#2874f0] focus:ring-2 group-hover:border-[#2874f0] transition-all"
            />
            <span className="text-sm text-gray-700 font-medium group-hover:text-[#2874f0] transition-colors">All Ratings</span>
          </label>
        </div>
      </div>
    </div>
  );
}
