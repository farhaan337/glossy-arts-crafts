import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
const AboutSection = () => {
  const features = ["Handcrafted with attention to detail", "Eco-friendly materials when possible", "Custom designs available", "Each piece is uniquely made"];
  return <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-52 md:h-64 shadow-lg">
              <img alt="Crafting resin art" className="w-full h-full object-cover" src="/lovable-uploads/b44cc1f1-b45c-45d0-b65f-820689ce3fff.jpg" />
            </div>
            <div className="rounded-2xl overflow-hidden h-64 md:h-80 shadow-lg mt-8">
              <img alt="Finished resin products" className="w-full h-full object-cover" src="/lovable-uploads/13a80d5f-ff2f-4d40-99c0-2c80c14f20b4.jpg" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-600 font-medium text-sm">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
              <span className="block">Handcrafted with</span>
              <span className="bg-gradient-to-r from-teal-400 to-craft-purple bg-clip-text text-transparent">
                Passion & Creativity
              </span>
            </h2>
            <p className="text-gray-700">
              Resin Wonders started as a small hobby and quickly turned into a passion project. Each piece is 
              carefully designed and handcrafted to bring a touch of color and uniqueness to your everyday life.
            </p>
            <p className="text-gray-700">
              Our mission is to create beautiful, long-lasting resin pieces that bring joy and express your 
              personality. We take pride in our craftsmanship and attention to detail.
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => <div key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                    <Check className="h-3 w-3 text-teal-600" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>)}
            </div>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;