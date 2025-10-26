import { Category } from '../lib/supabase';
import {
  Smartphone,
  Laptop,
  Shirt,
  Home,
  Zap,
  Baby,
  Wrench,
  BookOpen,
  Footprints
} from 'lucide-react';

interface CategoryBarProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (slug: string | null) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'smartphone': Smartphone,
  'laptop': Laptop,
  'shirt': Shirt,
  'home': Home,
  'zap': Zap,
  'baby': Baby,
  'wrench': Wrench,
  'book': BookOpen,
  'footprints': Footprints,
};

export function CategoryBar({ categories, selectedCategory, onSelectCategory }: CategoryBarProps) {
  return (
    <div className="bg-white shadow-md border-b border-gray-100 sticky top-[88px] z-40">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
          <button
            onClick={() => onSelectCategory(null)}
            className={`flex flex-col items-center gap-2 px-5 py-3 rounded-xl transition-all min-w-fit shadow-sm ${
              selectedCategory === null
                ? 'bg-gradient-to-br from-[#2874f0] to-[#1c5ec7] text-white shadow-lg scale-105'
                : 'hover:bg-gray-100 text-gray-700 hover:shadow-md'
            }`}
          >
            <div className="w-14 h-14 flex items-center justify-center bg-white bg-opacity-20 rounded-full">
              <Zap className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold whitespace-nowrap">All Products</span>
          </button>

          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Smartphone;
            const isSelected = selectedCategory === category.slug;

            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.slug)}
                className={`flex flex-col items-center gap-2 px-5 py-3 rounded-xl transition-all min-w-fit shadow-sm transform hover:scale-105 ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#2874f0] to-[#1c5ec7] text-white shadow-lg scale-105'
                    : 'hover:bg-gray-100 text-gray-700 hover:shadow-md'
                }`}
              >
                <div className={`w-14 h-14 flex items-center justify-center rounded-full ${isSelected ? 'bg-white bg-opacity-20' : 'bg-gray-100'}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold whitespace-nowrap">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
