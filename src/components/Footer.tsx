
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold bg-gradient-to-r from-teal-400 to-craft-purple bg-clip-text text-transparent">
                Resin Wonders
              </span>
            </a>
            <p className="text-gray-600 mb-4 max-w-md">
              Handcrafted resin creations that bring color and joy to your everyday life. Each piece uniquely made with love and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-teal-100 transition-colors">
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.224.584 1.772 1.134.552.552.883 1.104 1.133 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.133 1.772c-.548.55-1.104.883-1.772 1.133-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.133 4.902 4.902 0 01-1.133-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.133-1.772c.548-.55 1.104-.883 1.772-1.133.636-.247 1.363-.416 2.427-.465C9.5 2.013 9.84 2 12.292 2h.023zm0 1.802h-.023c-2.648 0-2.971.01-4.015.058-.96.044-1.52.208-1.874.345-.447.172-.775.376-1.12.72-.346.346-.55.674-.723 1.12-.137.355-.3.915-.344 1.875-.05 1.045-.06 1.367-.06 4.015v.023c0 2.648.01 2.971.06 4.015.044.96.207 1.52.344 1.874.172.447.376.775.722 1.12.346.346.674.55 1.12.723.355.137.915.3 1.874.344 1.044.05 1.367.06 4.015.06h.023c2.648 0 2.971-.01 4.015-.06.96-.044 1.519-.207 1.874-.344.447-.172.775-.376 1.12-.722.346-.346.55-.674.723-1.12.137-.355.3-.915.344-1.874.049-1.044.06-1.367.06-4.015v-.023c0-2.648-.011-2.971-.06-4.015-.044-.96-.207-1.52-.344-1.874-.172-.447-.376-.775-.723-1.12-.346-.346-.674-.55-1.12-.723-.355-.137-.914-.3-1.874-.344-1.044-.049-1.367-.06-4.015-.06z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-teal-100 transition-colors">
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-teal-100 transition-colors">
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
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
    </footer>
  );
};

export default Footer;
