/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { Services } from './components/services/Services';
import { Corporate } from './components/corporate/Corporate';
import { WhyUs } from './components/why-us/WhyUs';
import { Testimonials } from './components/testimonials/Testimonials';
import { Blog } from './components/blog/Blog';
import { Footer } from './components/footer/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F7F7F5] text-[#062446]">
      {/* Official Header Lawcrest Legal Group */}
      <Header />

      {/* Main Viewport Offset for Fixed Header */}
      <main className="pt-[84px] sm:pt-[88px]">
        {/* Official Hero Section */}
        <Hero />

        {/* Official Services Section */}
        <Services />

        {/* Official Corporate & Investors Section */}
        <Corporate />

        {/* Official Why Us Section */}
        <WhyUs />

        {/* Official Testimonials Section */}
        <Testimonials />

        {/* Official Legal Blog & Insights Section */}
        <Blog />
      </main>

      {/* Official Footer Lawcrest Legal Group */}
      <Footer />
    </div>
  );
}
