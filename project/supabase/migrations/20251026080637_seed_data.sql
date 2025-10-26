-- Seed Categories
INSERT INTO categories (name, slug, icon) VALUES
('Electronics', 'electronics', 'smartphone'),
('Fashion', 'fashion', 'shirt'),
('Home & Furniture', 'home-furniture', 'home'),
('Appliances', 'appliances', 'zap'),
('Kids', 'kids', 'baby'),
('Sports & Books', 'sports-books', 'book'),
('Beauty & Toys', 'beauty-toys', 'footprints');

-- Seed Products
INSERT INTO products (category_id, name, description, price, original_price, discount_percentage, image_url, rating, reviews_count, stock, brand) VALUES
-- Electronics Category
((SELECT id FROM categories WHERE slug = 'electronics'), 'iPhone 15 Pro Max', '6.7-inch Super Retina XDR display, A17 Pro chip, 48MP camera system', 124900, 159900, 22, 'https://images.unsplash.com/photo-1695048139920-28cc32e6d29b?w=500', 4.7, 15234, 45, 'Apple'),
((SELECT id FROM categories WHERE slug = 'electronics'), 'Samsung Galaxy S24 Ultra', 'Dynamic AMOLED 2X, Snapdragon 8 Gen 3, 200MP camera', 104999, 124999, 16, 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500', 4.6, 12345, 38, 'Samsung'),
((SELECT id FROM categories WHERE slug = 'electronics'), 'OnePlus 12', 'Fluid AMOLED display, Snapdragon 8 Gen 3, 50MP triple camera', 64999, 69999, 7, 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500', 4.5, 8765, 52, 'OnePlus'),
((SELECT id FROM categories WHERE slug = 'electronics'), 'MacBook Pro 14"', 'M3 chip, 14.2-inch Liquid Retina XDR display, 512GB SSD', 159900, 179900, 11, 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500', 4.8, 9876, 28, 'Apple'),
((SELECT id FROM categories WHERE slug = 'electronics'), 'Dell XPS 15', 'Intel Core i7, 15.6-inch OLED display, 16GB RAM, 512GB SSD', 129999, 149999, 13, 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500', 4.6, 6543, 34, 'Dell'),
((SELECT id FROM categories WHERE slug = 'electronics'), 'Sony WH-1000XM5', 'Industry-leading noise cancellation, 30-hour battery', 26990, 29990, 10, 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500', 4.7, 11111, 67, 'Sony'),
((SELECT id FROM categories WHERE slug = 'electronics'), 'iPad Air', 'M2 chip, 10.9-inch Liquid Retina display, 256GB', 61900, 66900, 7, 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500', 4.6, 8765, 42, 'Apple'),
((SELECT id FROM categories WHERE slug = 'electronics'), 'Samsung Galaxy Watch 6', 'Bluetooth, 40mm, Health tracking, Sleep analysis', 24999, 27999, 11, 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500', 4.5, 5432, 89, 'Samsung'),

-- Fashion Category
((SELECT id FROM categories WHERE slug = 'fashion'), 'Cotton Regular Fit Shirt', 'Premium cotton fabric, comfortable fit, machine washable', 599, 999, 40, 'https://images.unsplash.com/photo-1594938291221-94d68222eca1?w=500', 4.3, 2345, 125, 'H&M'),
((SELECT id FROM categories WHERE slug = 'fashion'), 'Slim Fit Denim Jeans', 'Stretchable denim, classic blue wash, durable', 1299, 1999, 35, 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500', 4.4, 3456, 89, 'Levi''s'),
((SELECT id FROM categories WHERE slug = 'fashion'), 'Nike Air Max Sneakers', 'Air cushioning, breathable mesh upper, rubber outsole', 7999, 8999, 11, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500', 4.6, 5678, 76, 'Nike'),
((SELECT id FROM categories WHERE slug = 'fashion'), 'Casual Cotton T-Shirt', 'Comfortable fit, soft fabric, multiple colors', 399, 699, 43, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500', 4.2, 1234, 156, 'Puma'),
((SELECT id FROM categories WHERE slug = 'fashion'), 'Leather Jacket', 'Genuine leather, classic style, warm lining', 3999, 5999, 33, 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500', 4.5, 2345, 43, 'Zara'),
((SELECT id FROM categories WHERE slug = 'fashion'), 'Formal Oxford Shoes', 'Genuine leather, cushioned insole, elegant design', 2999, 4999, 40, 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500', 4.4, 1876, 67, 'Woodland'),

-- Home & Furniture Category
((SELECT id FROM categories WHERE slug = 'home-furniture'), 'Modern Sofa Set', 'L-shaped sectional sofa, premium fabric, comfortable', 29999, 49999, 40, 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500', 4.5, 987, 12, 'IKEA'),
((SELECT id FROM categories WHERE slug = 'home-furniture'), 'Queen Size Bed', 'Solid wood frame, storage underneath, cozy', 24999, 34999, 29, 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500', 4.6, 654, 18, 'Godrej'),
((SELECT id FROM categories WHERE slug = 'home-furniture'), 'Study Table', 'Ergonomic design, spacious drawers, durable', 8999, 12999, 31, 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500', 4.4, 1234, 45, 'Nilkamal'),
((SELECT id FROM categories WHERE slug = 'home-furniture'), 'Coffee Table', 'Glass top, wooden legs, modern design', 4999, 7999, 38, 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=500', 4.3, 876, 34, 'HomeTown'),
((SELECT id FROM categories WHERE slug = 'home-furniture'), 'Dining Table Set', '6-seater, marble top, premium finish', 34999, 49999, 30, 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500', 4.5, 543, 15, 'Pepperfry'),

-- Appliances Category
((SELECT id FROM categories WHERE slug = 'appliances'), 'LED Smart TV 55"', '4K Ultra HD, HDR10, Android TV, Voice Assistant', 44999, 59999, 25, 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500', 4.7, 2345, 28, 'Samsung'),
((SELECT id FROM categories WHERE slug = 'appliances'), 'Washing Machine', 'Fully automatic, 8kg capacity, energy efficient', 24999, 32999, 24, 'https://images.unsplash.com/photo-1558618047-3c8c75994ce6?w=500', 4.6, 1876, 42, 'LG'),
((SELECT id FROM categories WHERE slug = 'appliances'), 'Refrigerator', 'Double door, 365L capacity, frost-free', 32999, 42999, 23, 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=500', 4.5, 1654, 35, 'Whirlpool'),
((SELECT id FROM categories WHERE slug = 'appliances'), 'Air Conditioner', '1.5 Ton, 5-star rated, inverter technology', 34999, 44999, 22, 'https://images.unsplash.com/photo-1630006217078-8cd6b5b16f61?w=500', 4.6, 2345, 38, 'Daikin'),
((SELECT id FROM categories WHERE slug = 'appliances'), 'Microwave Oven', '20L capacity, convection mode, auto cook', 8999, 12999, 31, 'https://images.unsplash.com/photo-1589642394507-eaab43d9c90a?w=500', 4.4, 1987, 67, 'LG'),

-- Kids Category
((SELECT id FROM categories WHERE slug = 'kids'), 'Remote Control Car', 'High speed, colorful LED lights, durable', 1299, 1999, 35, 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500', 4.5, 1876, 89, 'Hot Wheels'),
((SELECT id FROM categories WHERE slug = 'kids'), 'LEGO Building Set', '200+ pieces, creative play, colorful blocks', 2499, 3499, 29, 'https://images.unsplash.com/photo-1606914472061-e58f599215a7?w=500', 4.8, 3456, 56, 'LEGO'),
((SELECT id FROM categories WHERE slug = 'kids'), 'Barbie Dreamhouse', 'Multi-room dollhouse, accessories included', 4999, 6999, 29, 'https://images.unsplash.com/photo-1562259949-e2e7c9d5eab7?w=500', 4.6, 1234, 34, 'Barbie'),
((SELECT id FROM categories WHERE slug = 'kids'), 'Kids Tricycle', 'Sturdy frame, adjustable seat, safe design', 2499, 3499, 29, 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500', 4.4, 876, 67, 'Fisher-Price'),

-- Sports & Books Category
((SELECT id FROM categories WHERE slug = 'sports-books'), 'Cricket Bat', 'Premium English willow, lightweight, comfortable grip', 3499, 4999, 30, 'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=500', 4.6, 2345, 45, 'SG'),
((SELECT id FROM categories WHERE slug = 'sports-books'), 'Yoga Mat', 'Premium TPE material, non-slip surface, extra thick', 999, 1499, 33, 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500', 4.5, 1876, 123, 'Puma'),
((SELECT id FROM categories WHERE slug = 'sports-books'), 'Dumbbell Set', 'Adjustable weights, ergonomic grip, heavy duty', 3499, 4999, 30, 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500', 4.4, 987, 78, 'Cult Fit'),
((SELECT id FROM categories WHERE slug = 'sports-books'), 'Harry Potter Box Set', 'Complete 7-book collection, paperback edition', 1799, 2999, 40, 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500', 4.8, 5678, 234, 'Bloomsbury'),

-- Beauty & Toys Category
((SELECT id FROM categories WHERE slug = 'beauty-toys'), 'Anti-Aging Serum', 'Vitamin C enriched, brightening effect, 30ml', 1299, 1999, 35, 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500', 4.5, 3456, 156, 'L''Oreal'),
((SELECT id FROM categories WHERE slug = 'beauty-toys'), 'Makeup Brush Set', 'Premium synthetic bristles, 12-piece set', 899, 1499, 40, 'https://images.unsplash.com/photo-1608527906729-eb8e9b3f8def?w=500', 4.4, 2345, 189, 'Maybelline'),
((SELECT id FROM categories WHERE slug = 'beauty-toys'), 'Men''s Face Wash', 'Deep cleansing, removes excess oil, 100ml', 199, 399, 50, 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500', 4.3, 6789, 456, 'Nivea'),
((SELECT id FROM categories WHERE slug = 'beauty-toys'), 'Face Moisturizer', 'SPF 30, hydrating, non-greasy, 50ml', 599, 999, 40, 'https://images.unsplash.com/photo-1563213129-a4273a0dfb53?w=500', 4.5, 4321, 267, 'Ponds');

