import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Product } from '../lib/supabase';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  totalPrice: number;
}

export function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemove,
  totalPrice,
}: CartDrawerProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b-2 border-gray-100 bg-gradient-to-r from-[#2874f0] to-[#1c5ec7]">
          <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all transform hover:rotate-90"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingBag className="w-16 h-16 mb-4 text-gray-300" />
              <p className="text-lg font-medium mb-2">Your cart is empty</p>
              <p className="text-sm">Add items to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-4 border-2 border-gray-200 rounded-xl hover:border-[#2874f0] transition-all bg-gradient-to-br from-white to-gray-50">
                  <img
                    src={item.product.image_url}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg shadow-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150x150?text=Product';
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-1 line-clamp-2 text-gray-900">
                      {item.product.name}
                    </h3>
                    <p className="text-xl font-bold text-gray-900 mb-3">
                      ₹{item.product.price.toLocaleString()}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-2 hover:bg-gray-100 transition-colors bg-white"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-bold bg-gray-50 py-2">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-gray-100 transition-colors bg-white"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemove(item.product.id)}
                        className="text-sm text-red-600 hover:text-red-700 font-bold hover:underline transition-all"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t-2 border-gray-200 p-6 space-y-4 bg-gradient-to-t from-gray-50 to-white">
            <div className="flex justify-between items-center text-xl font-bold">
              <span className="text-gray-700">Total:</span>
              <span className="text-3xl text-[#2874f0]">₹{totalPrice.toLocaleString()}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-[#fb641b] to-[#ff9f00] hover:from-[#e5581a] hover:to-[#e68f00] text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-lg">
              PLACE ORDER →
            </button>
          </div>
        )}
      </div>
    </>
  );
}
