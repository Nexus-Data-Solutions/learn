import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Pricing from '@/components/home/Pricing';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <CTASection />
    </main>
  );
}