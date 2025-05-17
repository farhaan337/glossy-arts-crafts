
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingBag, CheckCircle, Truck } from "lucide-react";
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OrderSuccess = () => {
  // Generate a random order number for display purposes
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);
  
  const formattedDeliveryDate = estimatedDelivery.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long', 
    day: 'numeric'
  });
  
  return (
    <>
      <Navbar />
      <div className="container-custom py-16">
        <div className="max-w-lg mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
          </div>
          
          <h1 className="text-3xl font-serif font-bold mb-4">Thank You For Your Order!</h1>
          <p className="text-lg text-gray-600 mb-4">
            We've received your order and will process it right away. 
            You'll receive a confirmation email shortly.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-200">
              <span className="text-sm text-gray-600">Order Number:</span>
              <span className="font-medium">{orderNumber}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm flex items-center text-gray-600">
                <Truck className="w-4 h-4 mr-2" /> Estimated Delivery:
              </span>
              <span className="font-medium">{formattedDeliveryDate}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button className="bg-teal-500 hover:bg-teal-600 w-full">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="w-full flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" /> Track Your Order
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderSuccess;
