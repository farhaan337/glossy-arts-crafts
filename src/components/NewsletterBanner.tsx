
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const NewsletterBanner = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log('Subscribing email:', email);
    setIsSubmitted(true);
    setEmail('');
    // Reset submission status after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="bg-gradient-to-br from-teal-500 to-craft-purple text-white py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-12">
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 mr-3" />
              <h3 className="text-2xl font-serif font-medium">Sign Up for Updates</h3>
            </div>
            <p className="text-white/90 max-w-md">
              Subscribe to our newsletter for exclusive discounts, new product announcements, and creative resin craft ideas!
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            {isSubmitted ? (
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4 text-center">
                <p className="font-medium">Thank you for subscribing!</p>
                <p className="text-sm text-white/90 mt-1">We've sent a confirmation email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-64 md:w-72"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-white text-teal-700 hover:bg-teal-50"
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
