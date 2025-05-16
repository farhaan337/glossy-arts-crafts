import { useState } from 'react';
import ProductCard, { ProductProps } from './ProductCard';
import { Button } from "@/components/ui/button";
const basePath = process.env.NODE_ENV === 'production' 
  ? '/<resin-charm-boutique>' 
  : '';

const productData: ProductProps[] = [
  {
    id: '1',
    name: 'Bracelet with Blue Butterfly Charm',
    price: 199,
    image: '/lovable-uploads/WhatsApp_Image_2025-02-01_at_3.50.59_PM.jpeg',
    category: 'Jewelry',
    description: 'A delicate handcrafted bracelet featuring shimmering glass beads in shades of blue, purple, and black, accented with a charming blue enamel butterfly.',
    bestSeller: true
  },
  {
    id: '2',
    name: 'Ocean-Themed Resin Art',
    price: 249,
    image: '/lovable-uploads/WhatsApp_Image_2025-02-01_at_3.06.55_PM.jpeg',
    category: 'Coasters',
    description: 'Vibrant blue coaster with real preserved flowers and decorative gold stars'
  },
  {
    id: '3',
    name: 'Heart necklace',
    price: 149,
    image: '/lovable-uploads/WhatsApp Image 2025-05-04 at 16.43.33_08e936f3.jpg',
    category: 'Jewelry',
    description: 'Stunning bracelet with blue, purple, and black beads featuring butterfly charm'
  },
  {
    id: '4',
    name: 'Beeds bracelets',
    price: 129,
    image: '/lovable-uploads/WhatsApp_Image_2025-05-04_at_16.44.11_eab12eb0.jpg',
    category: 'Keychains',
    description: 'Stunning bracelet with blue, purple, and black beads',
    bestSeller: true
  },
  {
    id: '5',
    name: 'Custom Text Keychain',
    price: 139,
    image: '/lovable-uploads/WhatsApp_Image_2025-05-04_at_16.44.15_165f8c05.jpg',
    category: 'Keychains',
    description: 'Personalized keychain with your choice of text and color'
  },
  {
    id: '6',
    name: 'Resin Bowl',
    price: 299,
    image: '/lovable-uploads/WhatsApp_Image_2025-05-04_at_16.43.57_0c9b3850.jpg',
    category: 'Home Decor',
    description: 'Custom zodiac-themed trinket tray perfect for bowl or small items'
  },
  {
    id: '7',
    name: 'Earring Resin ',
    price: 179,
    image: '/lovable-uploads/WhatsApp Image 2025-05-04 at 16.44.15_a8cdc25a.jpg',
    category: 'Jewelry',
    description: 'Elegant crystal resin with adjustable earring'
  },
  {
    id: '8',
    name: 'Heart Resin',
    price: 99,
    image: '/lovable-uploads/WhatsApp_Image_2025-02-01_at_3.06.38_PM.jpeg',
    category: 'Home Decor',
    description: 'Personalized Heart Resin with your initial and favorite color'
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
