import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center py-24 px-4 bg-gradient-to-b from-background to-card"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto pt-20 z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="block mb-2">Beyond The Plate:</span>
          <span className="block text-3xl md:text-5xl lg:text-6xl mb-3">Discover the Culinary Artistry</span>
          <span className="block text-3xl md:text-5xl lg:text-6xl">of Good Chef Co.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mt-8 mb-10">
          We are transforming passionate chefs into successful entrepreneurs through our elite business accelerator, state-of-the-art test kitchen, dedicated funding program, and a membership dining experience.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="text-base">
            <Link href="#about">Learn More</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <Link href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-sm font-medium mb-2">Scroll Down</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}