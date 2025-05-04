import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section className="relative bg-gradient-to-br from-craft-cream via-white to-craft-purple/10 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-teal-100/30 opacity-70"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-600 font-medium text-sm">
              Handcrafted with love
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              <span className="block">Unique Resin</span>
              <span className="bg-gradient-to-r from-teal-400 to-craft-purple bg-clip-text text-transparent">
                Crafts & Keychains
              </span>
            </h1>
            <p className="text-lg text-gray-700 md:pr-10">
              Discover our handmade resin creations that bring color and joy to everyday life. Each piece is uniquely crafted with attention to detail.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8" size="lg">
                Shop Now
              </Button>
              <Button variant="outline" className="rounded-full px-8 border-teal-200 text-teal-700 hover:bg-teal-50" size="lg">
                Custom Orders
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden h-48 shadow-lg animate-float">
                <img alt="Colorful resin coasters" className="w-full h-full object-cover" src="/lovable-uploads/46cf915e-0bf5-462c-a8bb-d4e971706056.jpg" />
              </div>
              <div className="rounded-2xl overflow-hidden h-32 shadow-lg animate-float" style={{
              animationDelay: "0.3s"
            }}>
                <img alt="Cat-shaped resin keychain" className="w-full h-full object-cover" src="/lovable-uploads/8f6cda2c-e850-4481-9e5c-41fd5a3f7547.jpg" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden h-32 shadow-lg animate-float" style={{
              animationDelay: "0.6s"
            }}>
                <img alt="Resin jewelry" className="w-full h-full object-cover" src="/lovable-uploads/a64bc908-d20c-4906-8cbe-316b937f3714.jpg" />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 shadow-lg animate-float" style={{
              animationDelay: "0.9s"
            }}>
                <img alt="Custom resin art piece" src="/lovable-uploads/60191d33-7e6d-48de-a03d-65824897143d.jpg" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;