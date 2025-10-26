# 🛍️ Flipkart Clone - E-commerce Website

A stunning, fully functional e-commerce website built with React, TypeScript, Tailwind CSS, and Supabase.

## ✨ Features

- 🎨 **Modern UI/UX Design** - Beautiful gradients, animations, and hover effects
- 🛒 **Shopping Cart** - Full cart functionality with quantity management
- 🔍 **Search & Filter** - Filter by category, brand, and rating
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Optimized with Vite and modern React patterns
- 💾 **Persistent Cart** - Cart data saved in localStorage
- 🎯 **Category Navigation** - Easy browsing by product categories
- 🌟 **Product Cards** - Stunning product displays with ratings and discounts

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account (free tier works perfectly)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy your project URL and anon key
   - Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run database migrations**
   - Go to your Supabase project dashboard
   - Navigate to SQL Editor
   - Run the migration files in order:
     - `supabase/migrations/20251026080636_create_ecommerce_schema.sql`
     - `supabase/migrations/20251026080637_seed_data.sql`

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📁 Project Structure

```
project/
├── src/
│   ├── components/          # React components
│   │   ├── Banner.tsx       # Hero banner
│   │   ├── CartDrawer.tsx   # Shopping cart sidebar
│   │   ├── CategoryBar.tsx  # Category navigation
│   │   ├── FilterSidebar.tsx # Product filters
│   │   ├── Footer.tsx        # Site footer
│   │   ├── Header.tsx        # Site header
│   │   ├── ProductCard.tsx  # Product card component
│   │   └── ProductGrid.tsx  # Product grid layout
│   ├── hooks/
│   │   └── useCart.ts       # Cart management hook
│   ├── lib/
│   │   └── supabase.ts     # Supabase client
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.tsx             # Entry point
├── supabase/
│   └── migrations/          # Database migrations
├── public/                  # Static assets
└── package.json            # Dependencies
```

## 🎨 Design Features

### Color Scheme
- Primary Blue: `#2874f0`
- Accent Orange: `#ff9f00`
- Success Green: `#22c55e`
- Background: Gradient from gray-50 to white

### Components
- **Header**: Sticky navigation with search functionality
- **Banner**: Animated hero section with gradient background
- **Product Cards**: Hover effects, discount badges, wishlist icon
- **Cart Drawer**: Slide-in cart with quantity controls
- **Filters**: Brand and rating filters with smooth transitions

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Supabase** - Backend & database
- **Lucide React** - Icons

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features Implemented

1. **Product Browsing**
   - Category-based navigation
   - Search functionality
   - Brand filtering
   - Rating filtering

2. **Shopping Cart**
   - Add to cart
   - Update quantities
   - Remove items
   - Persistent storage

3. **UI/UX Enhancements**
   - Smooth animations
   - Loading states
   - Error handling
   - Responsive design
   - Accessibility features

## 🚧 Future Enhancements

- [ ] User authentication
- [ ] Product reviews
- [ ] Checkout process
- [ ] Order tracking
- [ ] Wishlist functionality
- [ ] Payment integration
- [ ] Product recommendations

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, email support@example.com or open an issue in the repository.

---

Made with ❤️ using React & Supabase

