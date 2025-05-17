
import { Button } from '@/components/ui/button';
import { Trash, ArrowLeft, ShoppingCart, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
  
  const shipping = 49;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar />
      <div className="container-custom py-12">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-gray-600 hover:text-teal-500 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Continue Shopping</span>
          </Link>
          <h1 className="text-2xl md:text-3xl font-serif font-bold ml-auto">Your Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="h-16 w-16 mx-auto text-gray-300 mb-6" />
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Link to="/">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                Shop Now
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 py-3 px-4 text-sm font-medium">
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-center">Total</div>
                  </div>
                </div>
                
                {cartItems.map((item) => (
                  <div key={item.id} className="border-t border-gray-200 py-4 px-4">
                    <div className="grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-6">
                        <div className="flex items-center">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="ml-3">
                            <p className="font-medium">{item.name}</p>
                            <button 
                              onClick={() => removeFromCart(item.id)} 
                              className="flex items-center text-sm text-red-500 mt-1 hover:text-red-600"
                            >
                              <Trash className="h-3 w-3 mr-1" /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 text-center flex items-center justify-center">
                        <IndianRupee className="h-3 w-3 mr-1" />{item.price.toFixed(0)}
                      </div>
                      <div className="col-span-2 text-center">
                        <div className="flex items-center justify-center">
                          <button 
                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >-</button>
                          <span className="mx-2 w-8 text-center">{item.quantity}</span>
                          <button 
                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >+</button>
                        </div>
                      </div>
                      <div className="col-span-2 text-center font-medium flex items-center justify-center">
                        <IndianRupee className="h-3 w-3 mr-1" />{(item.price * item.quantity).toFixed(0)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-lg font-serif font-medium mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="flex items-center"><IndianRupee className="h-3 w-3 mr-1" />{subtotal.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="flex items-center"><IndianRupee className="h-3 w-3 mr-1" />{shipping.toFixed(0)}</span>
                  </div>
                </div>
                <div className="border-t border-gray-300 pt-3 mb-6">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span className="flex items-center"><IndianRupee className="h-3 w-3 mr-1" />{total.toFixed(0)}</span>
                  </div>
                </div>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
