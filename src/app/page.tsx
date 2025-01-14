import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import Pricing from '@/components/home/Pricing';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <Pricing />
      <CTASection />
    </main>
  );
}