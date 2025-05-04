
import { useState } from 'react';
import ProductCard, { ProductProps } from './ProductCard';
import { Button } from '@/components/ui/button';

const productData: ProductProps[] = [
  {
    id: '1',
    name: 'Ocean Wave Keychain',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    category: 'Keychains',
    bestSeller: true
  },
  {
    id: '2',
    name: 'Galaxy Coaster Set',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    category: 'Coasters'
  },
  {
    id: '3',
    name: 'Flower Pendant Necklace',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    category: 'Jewelry'
  },
  {
    id: '4',
    name: 'Crystal Clear Bookmark',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    category: 'Bookmarks'
  },
  {
    id: '5',
    name: 'Rainbow Heart Keychain',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    category: 'Keychains',
    bestSeller: true
  },
  {
    id: '6',
    name: 'Mandala Trinket Tray',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    category: 'Home Decor'
  },
  {
    id: '7',
    name: 'Geometric Phone Grip',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    category: 'Accessories'
  },
  {
    id: '8',
    name: 'Zodiac Sign Keychain',
    price: 13.50,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    category: 'Keychains'
  }
];

const categories = ['All', ...Array.from(new Set(productData.map(p => p.category)))];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProducts = activeCategory === 'All' 
    ? productData 
    : productData.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            <span className="bg-gradient-to-r from-teal-400 to-craft-purple bg-clip-text text-transparent">
              Our Collections
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our handcrafted resin products, each made with love and attention to detail.
            Perfect for gifts or treating yourself to something special.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 scrollbar-none">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`
                  rounded-full px-6 whitespace-nowrap
                  ${activeCategory === category 
                    ? 'bg-teal-500 hover:bg-teal-600 text-white' 
                    : 'text-gray-600 hover:text-teal-500 border-gray-200'}
                `}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="rounded-full px-8 border-teal-200 text-teal-700 hover:bg-teal-50"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
