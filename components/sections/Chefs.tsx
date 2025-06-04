import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const experiences = [
  {
    title: "Rotating Chefs",
    description: "Experience diverse chef concepts that change regularly. Each dish tells a unique culinary story of the ingredients and the chef behind the food.",
    image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Interactive Dining",
    description: "Enjoy chefs craft masterpieces in our test kitchen design. Every seat offers an experience of culinary artistry.",
    image: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Exclusive Events",
    description: "Join special tastings, chef meet-and-greets, and investor showcases. Members get priority access.",
    image: "https://images.pexels.com/photos/3184187/pexels-photo-3184187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
]

export default function Chefs() {
  return (
    <section id="chefs" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The A List Experience</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A Culinary Playground
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
              <div className="h-60 overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                <p className="text-muted-foreground">{experience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="text-base">
            <Link href="#contact">Join Our Community</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}