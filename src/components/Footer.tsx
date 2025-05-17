import { Heart } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-white border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold bg-gradient-to-r from-teal-400 to-craft-purple bg-clip-text text-transparent">Glossy Arts And Crafts</span>
            </a>
            <p className="text-gray-600 mb-4 max-w-md">
              Handcrafted resin creations that bring color and joy to your everyday life. Each piece uniquely made with love and attention to detail.
            </p>
            <div className="flex space-x-4">
              
              
              
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-600 hover:text-teal-500 transition-colors">Shop</a></li>
              <li><a href="#categories" className="text-gray-600 hover:text-teal-500 transition-colors">Categories</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-teal-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-teal-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Resin Wonders. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-4 md:mt-0 flex items-center">
            Made with <Heart className="h-3 w-3 mx-1 text-red-500" /> for crafting enthusiasts
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;