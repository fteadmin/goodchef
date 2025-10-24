import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center py-24 px-4 bg-gradient-to-b from-background to-card"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="/assets/landing.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/events/beyondplate.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* subtle overlay to ensure text remains readable over the video */}
        <div className="absolute inset-0 bg-black/30 z-10" aria-hidden />
      </div>

  <div className="container mx-auto pt-20 z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          <span className="block">Chef Program</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
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