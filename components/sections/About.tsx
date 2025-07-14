import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, LightbulbIcon, CreditCard, Users } from "lucide-react"
import Teams from "./Teams"

const features = [
  {
    icon: <ChefHat className="h-10 w-10 text-primary" />,
    title: "State-of-the-Art Test Kitchen",
    description: "Access to professional-grade equipment and resources to develop and refine culinary concepts."
  },
  
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Dedicated Funding Program",
    description: "Connect with investors and access capital to launch your culinary business."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Membership Community",
    description: "Engage with a passionate community of food enthusiasts who provide feedback and support."
  }
]

export default function About() {
  return (
    <section id="about\" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Good Chef Co</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Good Chef Co represents the future of culinary entrepreneurship, offering a groundbreaking platform that unites ambitious chefs with passionate food enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground mb-6">
              Our innovative dual-market solution combines a comprehensive chef incubator program with an exclusive membership-based dining community, creating unprecedented opportunities for culinary innovation and exceptional dining experiences.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Chefs collaborating in kitchen" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Good Chef Co social engine" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Good Chef Co Social Engine</h3>
            <p className="text-muted-foreground mb-6">
              Welcome to The A List: Where Culinary Innovation Meets Dining Excellence. Good Chef Co's newest venture in downtown LA brings together emerging culinary talent and food enthusiasts. The A List serves as both an incubator for ambitious chefs and a hub for our culinary membership community.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border bg-card">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-muted">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Teams />
    </section>
  )
}