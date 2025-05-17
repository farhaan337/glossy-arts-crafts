
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingBag, CheckCircle } from "lucide-react";
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OrderSuccess = () => {
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
          <p className="text-lg text-gray-600 mb-8">
            We've received your order and will process it right away. 
            You'll receive a confirmation email shortly.
          </p>
          
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
