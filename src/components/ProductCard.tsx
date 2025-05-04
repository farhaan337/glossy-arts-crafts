
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, IndianRupee } from "lucide-react";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  bestSeller?: boolean;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        {product.bestSeller && (
          <div className="absolute top-2 left-2 bg-craft-gold text-white text-xs font-bold px-2 py-1 rounded-md">
            BEST SELLER
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-teal-500 font-medium">{product.category}</p>
            <h3 className="font-medium text-lg mt-1">{product.name}</h3>
            {product.description && (
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
            )}
          </div>
          <p className="font-serif font-semibold text-lg flex items-center">
            <IndianRupee className="h-3 w-3 mr-1" />{product.price.toFixed(0)}
          </p>
        </div>
        
        <Button 
          className="w-full mt-4 bg-teal-500 hover:bg-teal-600 gap-2"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
