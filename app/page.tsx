import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import Gallery from '@/components/Gallery';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MenuSection />
      <Gallery />
      <Locations />
      <Footer />
    </main>
  );
}
