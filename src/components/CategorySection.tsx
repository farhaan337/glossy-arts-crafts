
import { Brush, Key, Gift, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 'keychains',
    title: 'Keychains',
    description: 'Colorful and unique keychains to brighten your day.',
    icon: Key,
    color: 'from-teal-400 to-teal-500',
  },
  {
    id: 'jewelry',
    title: 'Jewelry',
    description: 'Elegant resin jewelry pieces for any occasion.',
    icon: Gift,
    color: 'from-craft-purple to-purple-500',
  },
  {
    id: 'home-decor',
    title: 'Home Decor',
    description: 'Beautiful decor items to enhance your living space.',
    icon: Home,
    color: 'from-craft-gold to-amber-500',
  },
  {
    id: 'custom',
    title: 'Custom Orders',
    description: 'Create your own unique resin piece with our custom service.',
    icon: Brush,
    color: 'from-pink-400 to-rose-500',
  }
];

const CategorySection = () => {
  return (
    <section id="categories" className="py-20 bg-craft-cream/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            <span className="bg-gradient-to-r from-teal-400 to-craft-purple bg-clip-text text-transparent">
              Explore by Category
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Browse through our different product categories to find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-5">{category.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 hover:text-teal-800"
                >
                  View Collection
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
