import { useState, useEffect } from 'react';
import { supabase, Category, Product } from './lib/supabase';
import { Header } from './components/Header';
import { CategoryBar } from './components/CategoryBar';
import { Banner } from './components/Banner';
import { FilterSidebar } from './components/FilterSidebar';
import { ProductGrid } from './components/ProductGrid';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { useCart } from './hooks/useCart';
import { useAuth } from './contexts/AuthContext';

function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const { isAuthenticated, userRole } = useAuth();
  const {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();

  useEffect(() => {
    loadCategories();
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, selectedCategory, searchQuery, selectedBrands, minRating]);

  const loadCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');

    if (error) {
      console.error('Error loading categories:', error);
    } else {
      setCategories(data || []);
    }
  };

  const loadProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading products:', error);
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  };

  const filterProducts = () => {
    let filtered = [...products];

    if (selectedCategory) {
      const category = categories.find(c => c.slug === selectedCategory);
      if (category) {
        filtered = filtered.filter(p => p.category_id === category.id);
      }
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.brand?.toLowerCase().includes(query)
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => p.brand && selectedBrands.includes(p.brand));
    }

    if (minRating > 0) {
      filtered = filtered.filter(p => p.rating >= minRating);
    }

    setFilteredProducts(filtered);
  };

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setIsCartOpen(true);
  };

  const availableBrands = Array.from(
    new Set(products.filter(p => p.brand).map(p => p.brand))
  ).sort() as string[];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header
        cartCount={totalItems}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
      />

      {userRole && (
        <div className={`max-w-screen-xl mx-auto px-4 py-3 ${
          userRole === 'buyer' ? 'bg-gradient-to-r from-blue-50 to-blue-100' : 'bg-gradient-to-r from-green-50 to-green-100'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                userRole === 'buyer' ? 'bg-blue-500' : 'bg-green-500'
              } animate-pulse`}></div>
              <span className="text-sm font-semibold text-gray-800">
                Logged in as <span className="capitalize">{userRole}</span>
              </span>
            </div>
            {userRole === 'seller' && (
              <span className="text-xs text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm">
                Manage your products and sales
              </span>
            )}
          </div>
        </div>
      )}

      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <Banner />

      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex gap-6">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar
              brands={availableBrands}
              selectedBrands={selectedBrands}
              onBrandToggle={handleBrandToggle}
              priceRange={[0, 100000]}
              onPriceRangeChange={() => {}}
              minRating={minRating}
              onMinRatingChange={setMinRating}
            />
          </aside>

          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {userRole === 'seller' 
                  ? (selectedCategory
                      ? `Manage ${categories.find(c => c.slug === selectedCategory)?.name}`
                      : 'Manage Your Products')
                  : (selectedCategory
                      ? categories.find(c => c.slug === selectedCategory)?.name
                      : 'All Products')}
              </h2>
              <p className="text-gray-600">
                {filteredProducts.length} {userRole === 'seller' ? 'product(s)' : 'products'} found
              </p>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-[#2874f0] mb-4"></div>
                <p className="text-gray-500 font-medium">Loading amazing products...</p>
              </div>
            ) : (
              <ProductGrid
                products={filteredProducts}
                onAddToCart={handleAddToCart}
              />
            )}
          </main>
        </div>
      </div>

      <Footer />

      {userRole === 'buyer' && (
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          totalPrice={totalPrice}
        />
      )}

      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {userRole === 'buyer' && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 bg-gradient-to-r from-[#2874f0] to-[#1c5ec7] text-white p-5 rounded-full shadow-2xl hover:shadow-[#2874f0]/50 hover:scale-110 transition-all z-30 animate-bounce"
        >
          <div className="relative">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                {totalItems}
              </span>
            )}
          </div>
        </button>
      )}

      {userRole === 'seller' && (
        <button
          onClick={() => {/* Handle add product */}}
          className="lg:hidden fixed bottom-6 right-6 bg-gradient-to-r from-green-600 to-green-700 text-white p-5 rounded-full shadow-2xl hover:shadow-green-600/50 hover:scale-110 transition-all z-30 animate-bounce"
        >
          <div className="relative">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}

export default App;
