import { ShoppingCart, Search, ChevronDown, MapPin, LogOut, User, Settings, HelpCircle, Bell, Package, Gift, Headphones, CreditCard, Award, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  cartCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCartClick: () => void;
  onLoginClick: () => void;
}

export function Header({ cartCount, searchQuery, onSearchChange, onCartClick, onLoginClick }: HeaderProps) {
  const { isAuthenticated, userRole, userName, logout, switchRole } = useAuth();
  const [showRoleMenu, setShowRoleMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const roleMenuRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (roleMenuRef.current && !roleMenuRef.current.contains(event.target as Node)) {
        setShowRoleMenu(false);
      }
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setShowMoreMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-gray-100">
      <div className="bg-gradient-to-r from-[#2874f0] via-[#1c5ec7] to-[#2874f0] text-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-1 cursor-pointer transform hover:scale-105 transition-transform">
                <h1 className="text-2xl font-bold italic">Ecommerce</h1>
                <span className="text-[11px] font-medium italic">
                  Explore <span className="text-yellow-400">wesite</span>
                </span>
              </div>
            </div>

            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full px-5 py-3 pr-14 rounded-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm shadow-md"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2874f0]" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {!isAuthenticated ? (
                <>
                  <button 
                    onClick={onLoginClick}
                    className="flex items-center gap-1 hover:bg-[#1c5ec7] px-4 py-2 rounded transition-all hover:shadow-lg"
                  >
                    <span className="text-sm font-medium">Login</span>
                  </button>

                  <button className="flex items-center gap-1 hover:bg-[#1c5ec7] px-4 py-2 rounded transition-all hover:shadow-lg">
                    <span className="text-sm">Seller</span>
                  </button>

                  <div className="relative" ref={moreMenuRef}>
                    <button 
                      onClick={() => setShowMoreMenu(!showMoreMenu)}
                      className="flex items-center gap-1 hover:bg-[#1c5ec7] px-4 py-2 rounded transition-all hover:shadow-lg"
                    >
                      <span className="text-sm">More</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {showMoreMenu && (
                      <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-50 min-w-[240px]">
                        <button
                          onClick={() => {
                            alert('Notification Preferences');
                            setShowMoreMenu(false);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-700"
                        >
                          <Bell className="w-5 h-5 text-[#2874f0]" />
                          <span className="text-sm font-medium">Notification Preferences</span>
                        </button>
                        <button
                          onClick={() => {
                            alert('Flipkart Plus Zone');
                            setShowMoreMenu(false);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-700"
                        >
                          <Zap className="w-5 h-5 text-yellow-500" />
                          <span className="text-sm font-medium">Flipkart Plus Zone</span>
                        </button>
                        <button
                          onClick={() => {
                            alert('Customer Care');
                            setShowMoreMenu(false);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-700"
                        >
                          <Headphones className="w-5 h-5 text-green-600" />
                          <span className="text-sm font-medium">Customer Care</span>
                        </button>
                        <button
                          onClick={() => {
                            alert('Advertise');
                            setShowMoreMenu(false);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-700"
                        >
                          <Gift className="w-5 h-5 text-purple-600" />
                          <span className="text-sm font-medium">Advertise</span>
                        </button>
                        <div className="border-t border-gray-200">
                          <button
                            onClick={() => {
                              alert('Download App');
                              setShowMoreMenu(false);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-700"
                          >
                            <Package className="w-5 h-5 text-orange-500" />
                            <span className="text-sm font-medium">Download App</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-medium">{userName}</span>
                  </div>

                  <div className="relative" ref={roleMenuRef}>
                    <button 
                      onClick={() => setShowRoleMenu(!showRoleMenu)}
                      className="flex items-center gap-1 hover:bg-[#1c5ec7] px-4 py-2 rounded transition-all hover:shadow-lg"
                    >
                      <span className="text-sm capitalize">{userRole}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {showRoleMenu && (
                      <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-50 min-w-[200px]">
                        <button
                          onClick={() => {
                            switchRole('buyer');
                            setShowRoleMenu(false);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-2 ${
                            userRole === 'buyer' ? 'bg-blue-50 text-[#2874f0]' : 'text-gray-700'
                          }`}
                        >
                          <ShoppingCart className="w-4 h-4" />
                          <span className="text-sm font-medium">Switch to Buyer</span>
                        </button>
                        <button
                          onClick={() => {
                            switchRole('seller');
                            setShowRoleMenu(false);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-2 ${
                            userRole === 'seller' ? 'bg-blue-50 text-[#2874f0]' : 'text-gray-700'
                          }`}
                        >
                          <Settings className="w-4 h-4" />
                          <span className="text-sm font-medium">Switch to Seller</span>
                        </button>
                        <div className="border-t border-gray-200">
                          <button
                            onClick={() => {
                              logout();
                              setShowRoleMenu(false);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-red-50 transition-colors flex items-center gap-2 text-red-600"
                          >
                            <LogOut className="w-4 h-4" />
                            <span className="text-sm font-medium">Logout</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="relative" ref={moreMenuRef}>
                    <button 
                      onClick={() => setShowMoreMenu(!showMoreMenu)}
                      className="flex items-center gap-1 hover:bg-[#1c5ec7] px-4 py-2 rounded transition-all hover:shadow-lg"
                    >
                      <span className="text-sm">More</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {showMoreMenu && (
                      <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-50 min-w-[240px]">
                        {isAuthenticated && (
                          <>
                            <button
                              onClick={() => {
                                alert('Track Orders');
                                setShowMoreMenu(false);
                              }}
                              className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-700"
                            >
                              <Package className="w-5 h-5 text-[#2874f0]" />
                              <span className="text-sm font-medium">Track Orders</span>
                            </button>
                            <button
                              onClick={() => {
                                alert('Wishlist');
                                setShowMoreMenu(false);
                              }}
                              className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-700"
                            >
                              <Gift className="w-5 h-5 text-red-500" />
                              <span className="text-sm font-medium">Wishlist</span>
                            </button>
                            <button
                              onClick={() => {
                                alert('My Account');
                                setShowMoreMenu(false);
                              }}
                              className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-700"
                            >
                              <User className="w-5 h-5 text-blue-600" />
                              <span className="text-sm font-medium">My Account</span>
                            </button>
                            <div className="border-t border-gray-200">
                              <button
                                onClick={() => {
                                  alert('Notification Preferences');
                                  setShowMoreMenu(false);
                                }}
                                className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-700"
                              >
                                <Bell className="w-5 h-5 text-[#2874f0]" />
                                <span className="text-sm font-medium">Notification Preferences</span>
                              </button>
                            </div>
                          </>
                        )}
                        <button
                          onClick={() => {
                            alert('24x7 Customer Care');
                            setShowMoreMenu(false);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-700"
                        >
                          <Headphones className="w-5 h-5 text-green-600" />
                          <span className="text-sm font-medium">24x7 Customer Care</span>
                        </button>
                        <button
                          onClick={() => {
                            alert('About Us');
                            setShowMoreMenu(false);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-700"
                        >
                          <HelpCircle className="w-5 h-5 text-gray-600" />
                          <span className="text-sm font-medium">About Us</span>
                        </button>
                        <button
                          onClick={() => {
                            alert('Advertise');
                            setShowMoreMenu(false);
                          }}
                          className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-700"
                        >
                          <Award className="w-5 h-5 text-purple-600" />
                          <span className="text-sm font-medium">Advertise</span>
                        </button>
                        <div className="border-t border-gray-200">
                          <button
                            onClick={() => {
                              alert('Download App');
                              setShowMoreMenu(false);
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-700"
                          >
                            <Package className="w-5 h-5 text-orange-500" />
                            <span className="text-sm font-medium">Download App</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

              {userRole === 'buyer' && (
                <button 
                  onClick={onCartClick}
                  className="flex items-center gap-2 hover:bg-[#1c5ec7] px-4 py-2 rounded transition-all hover:shadow-lg relative group"
                >
                  <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Cart</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                      {cartCount}
                    </span>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-b bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-screen-xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-5 h-5 text-[#2874f0]" />
            <span className="text-gray-600">Deliver to</span>
            <span className="font-semibold text-gray-900 hover:text-[#2874f0] cursor-pointer transition-colors">Select Location</span>
          </div>
        </div>
      </div>
    </header>
  );
}
