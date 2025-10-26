import { Star, Heart, Edit, Trash2 } from 'lucide-react';
import { Product } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { userRole } = useAuth();
  const discountedPrice = product.price;
  const savings = product.original_price - product.price;

  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:shadow-2xl hover:border-[#2874f0] transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=Product';
          }}
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100 transform hover:scale-110">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        {product.discount_percentage > 0 && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
            {product.discount_percentage}% OFF
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm mb-1 group-hover:text-[#2874f0] transition-colors">
            {product.name}
          </h3>
          {product.brand && (
            <p className="text-xs text-gray-500 font-medium">{product.brand}</p>
          )}
        </div>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-2.5 py-1 rounded-lg text-xs font-bold shadow-md">
            <span>{product.rating}</span>
            <Star className="w-3 h-3 fill-current" />
          </div>
          <span className="text-xs text-gray-500 font-medium">
            ({product.reviews_count.toLocaleString()})
          </span>
        </div>

        <div className="mb-4">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-bold text-gray-900">
              ₹{discountedPrice.toLocaleString()}
            </span>
            {product.original_price > product.price && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.original_price.toLocaleString()}
              </span>
            )}
          </div>
          {savings > 0 && (
            <p className="text-xs text-green-600 font-bold">
              Save ₹{savings.toLocaleString()}
            </p>
          )}
        </div>

        {userRole === 'buyer' ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-full bg-gradient-to-r from-[#ff9f00] to-[#fb641b] hover:from-[#e68f00] hover:to-[#e5581a] text-white font-bold py-3 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-[1.02] text-sm"
          >
            ADD TO CART
          </button>
        ) : userRole === 'seller' ? (
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Handle edit product
                alert(`Edit product: ${product.name}`);
              }}
              className="flex-1 bg-gradient-to-r from-[#2874f0] to-[#1c5ec7] hover:from-[#1c5ec7] hover:to-[#1458b7] text-white font-bold py-3 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-[1.02] text-sm flex items-center justify-center gap-2"
            >
              <Edit className="w-4 h-4" />
              EDIT
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Handle delete product
                if (confirm(`Are you sure you want to delete ${product.name}?`)) {
                  alert(`Product deleted: ${product.name}`);
                }
              }}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-[1.02] text-sm"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert('Please login to add items to cart');
            }}
            className="w-full bg-gradient-to-r from-[#ff9f00] to-[#fb641b] hover:from-[#e68f00] hover:to-[#e5581a] text-white font-bold py-3 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:scale-[1.02] text-sm"
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
}
