import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Chefs from '@/components/sections/Chefs';
import Contact from '@/components/sections/Contact';
import Teams from '@/components/sections/Teams';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Chefs />
      <Teams />
      <Contact />
    </>
  );
}