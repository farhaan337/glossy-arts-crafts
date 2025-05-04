
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center">
              <span className="font-serif bg-gradient-to-r from-teal-400 to-craft-purple bg-clip-text text-transparent font-extrabold text-2xl">Resin Wonders</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="font-medium hover:text-teal-500 transition-colors">
              Shop
            </a>
            <a href="#categories" className="font-medium hover:text-teal-500 transition-colors">
              Categories
            </a>
            <a href="#about" className="font-medium hover:text-teal-500 transition-colors">
              About Us
            </a>
            <a href="#contact" className="font-medium hover:text-teal-500 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative" onClick={() => navigate('/cart')}>
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>}
            </Button>
            
            <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && <div className="md:hidden bg-white absolute w-full shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#products" className="font-medium py-2" onClick={toggleMenu}>
              Shop
            </a>
            <a href="#categories" className="font-medium py-2" onClick={toggleMenu}>
              Categories
            </a>
            <a href="#about" className="font-medium py-2" onClick={toggleMenu}>
              About Us
            </a>
            <a href="#contact" className="font-medium py-2" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>}
    </header>
  );
};

export default Navbar;
