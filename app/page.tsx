import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
// import Teams from '@/components/sections/Teams';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      {/* <Teams /> */}
      <Contact />
    </>
  );
}