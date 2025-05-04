
import { useState } from 'react';
import ProductCard, { ProductProps } from './ProductCard';
import { Button } from '@/components/ui/button';

const productData: ProductProps[] = [
  {
    id: '1',
    name: 'Bracelet with Blue Butterfly Charm',
    price: 199,
    image: 'public/lovable-uploads/WhatsApp Image 2025-02-01 at 3.50.59 PM.jpeg',
    category: 'Jewelry',
    description: 'A delicate handcrafted bracelet featuring shimmering glass beads in shades of blue, purple, and black, accented with a charming blue enamel butterfly.',
    bestSeller: true
  },
  {
    id: '2',
    name: 'Ocean-Themed Resin Art',
    price: 249,
    image: 'public/lovable-uploads/WhatsApp Image 2025-02-01 at 3.06.55 PM.jpeg',
    category: 'Coasters',
    description: 'Vibrant blue coaster with real preserved flowers and decorative gold stars'
  },
  {
    id: '3',
    name: 'Heart necklace',
    price: 149,
    image: 'public/lovable-uploads/WhatsApp Image 2025-05-04 at 16.43.33_08e936f3.jpg',
    category: 'Jewelry',
    description: 'Stunning bracelet with blue, purple, and black beads featuring butterfly charm'
  },
  {
    id: '4',
    name: 'Love Quote Heart Keychain',
    price: 129,
    image: '/lovable-uploads/82a527de-55c9-49ce-88dc-54aa9b49a600.png',
    category: 'Keychains',
    description: 'Red heart-shaped keychain with inspirational love quote and glitter accents',
    bestSeller: true
  },
  {
    id: '5',
    name: 'Custom Text Keychain',
    price: 139,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    category: 'Keychains',
    description: 'Personalized keychain with your choice of text and color'
  },
  {
    id: '6',
    name: 'Resin Bowl',
    price: 299,
    image: 'public/lovable-uploads/WhatsApp Image 2025-05-04 at 16.43.57_0c9b3850.jpg',
    category: 'Home Decor',
    description: 'Custom zodiac-themed trinket tray perfect for jewelry or small items'
  },
  {
    id: '7',
    name: 'Crystal Pendant Necklace',
    price: 179,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    category: 'Jewelry',
    description: 'Elegant crystal pendant with adjustable chain'
  },
  {
    id: '8',
    name: 'Name Initial Bookmark',
    price: 99,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
    category: 'Bookmarks',
    description: 'Personalized bookmark with your initial and favorite color'
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
