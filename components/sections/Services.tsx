import { ChefHat, Rocket } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: "culinary-services",
    title: "Culinary Services",
    icon: <ChefHat className="h-8 w-8" />,
    description: "Comprehensive culinary services tailored to meet your specific needs and preferences.",
    details: [
      "Event Catering — Corporate events, private celebrations, weddings, and social gatherings",
      "Custom Menu Design — Tailored menus with dietary accommodations and seasonal ingredients",
      "On-Site Services — Full-service catering, buffet & stations, cocktail service, and chef-action stations",
      "Drop-Off & Delivery — Corporate drop-offs, party platters, and individually boxed meals",
      "Specialty Services — Event staffing, tableware rentals, event planning support, and dietary options"
    ],
    image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
    altText: "Culinary services"
  },
  {
    id: "chef-incubator",
    title: "Chef Incubator Program",
    icon: <Rocket className="h-8 w-8" />,
    description: "Transform your culinary passion into a thriving business. We provide the accelerator, test kitchen, and funding you need to scale.",
    details: [
      "Elite business accelerator — Builds the next generation of culinary leaders",
      "State-of-the-art test kitchen — Generates immediate revenue through innovative dining experiences",
      "Dedicated funding program — Provides capital needed to scale"
    ],
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    altText: "Chef incubator program"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Comprehensive services designed to support both culinary experiences and chef entrepreneurship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div key={service.id} className="group flex flex-col h-full">
              {/* Image Container */}
              <div className="relative h-80 w-full rounded-lg overflow-hidden mb-6 shadow-lg">
                <Image 
                  src={service.image}
                  alt={service.altText}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Icon Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-6">
                  <div className="text-white bg-secondary/80 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-secondary">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed flex-grow">{service.description}</p>
                
                {/* Details List */}
                {service.details.length > 0 && (
                  <ul className="space-y-3 mt-auto pt-6 border-t-2 border-secondary/20">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                        <span className="text-secondary font-bold flex-shrink-0 mt-0.5">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}