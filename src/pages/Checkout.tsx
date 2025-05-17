
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { IndianRupee, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

type CustomerFormValues = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
};

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, subtotal, clearCart } = useCart();
  const shipping = 49;
  const total = subtotal + shipping;
  
  const form = useForm<CustomerFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  const onSubmit = (data: CustomerFormValues) => {
    // Here you would normally send the order to a backend
    console.log("Order details:", {
      customer: data,
      items: cartItems,
      subtotal,
      shipping,
      total
    });
    
    // Simulate a successful order
    toast.success("Order placed successfully!");
    clearCart();
    navigate('/order-success');
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="container-custom py-12">
        <div className="flex items-center mb-8">
          <Link to="/cart" className="flex items-center text-gray-600 hover:text-teal-500 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Cart</span>
          </Link>
          <h1 className="text-2xl md:text-3xl font-serif font-bold ml-auto">Checkout</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-xl font-medium mb-6">Shipping Information</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" {...field} required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Shipping Address</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter your complete address" 
                            className="min-h-[120px]" 
                            {...field} 
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-teal-500 hover:bg-teal-600">
                      Complete Order
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h2 className="text-lg font-serif font-medium mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-sm">{item.name} x{item.quantity}</span>
                    <span className="text-sm font-medium flex items-center">
                      <IndianRupee className="h-3 w-3 mr-1" />{(item.price * item.quantity).toFixed(0)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-300 pt-3 mb-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="flex items-center"><IndianRupee className="h-3 w-3 mr-1" />{subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-600">Shipping</span>
                  <span className="flex items-center"><IndianRupee className="h-3 w-3 mr-1" />{shipping.toFixed(0)}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-300 pt-3 mb-6">
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span className="flex items-center"><IndianRupee className="h-4 w-4 mr-1" />{total.toFixed(0)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
