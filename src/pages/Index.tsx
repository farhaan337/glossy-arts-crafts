
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import CategorySection from '../components/CategorySection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import NewsletterBanner from '../components/NewsletterBanner';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <ProductsSection />
        <CategorySection />
        <AboutSection />
        <NewsletterBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
