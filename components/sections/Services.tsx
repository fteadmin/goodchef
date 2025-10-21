import { ChefHat, Users, Utensils, Truck, Gift, Clipboard } from "lucide-react"
import Image from "next/image"

const serviceCategories = [
  {
    id: "event-catering",
    title: "1. Event Catering",
    icon: <ChefHat className="h-6 w-6" />,
    image: "/assets/services/event-catering.jpg",
    altText: "Event catering service",
    items: [
      {
        title: "Corporate Events",
        description: "Meetings, conferences, galas, company luncheons, and product launches"
      },
      {
        title: "Private Events",
        description: "Birthdays, anniversaries, family reunions, graduations"
      },
      {
        title: "Weddings & Receptions",
        description: "Full-service catering, plated or buffet-style, cocktail hour service"
      },
      {
        title: "Social Gatherings",
        description: "Brunches, garden parties, baby showers, engagement parties"
      }
    ]
  },
  {
    id: "meal-services",
    title: "2. Meal & Menu Services",
    icon: <Utensils className="h-6 w-6" />,
    image: "/assets/services/meal-services.jpg",
    altText: "Custom meal and menu services",
    items: [
      {
        title: "Custom Menu Design",
        description: "Tailored to client preferences, dietary restrictions, and event themes"
      },
      {
        title: "Tasting Sessions",
        description: "Curated sampling experiences before final menu approval"
      },
      {
        title: "Seasonal & Local Menus",
        description: "Fresh, locally sourced ingredients featuring seasonal produce"
      }
    ]
  },
  {
    id: "onsite-services",
    title: "3. On-Site Services",
    icon: <Users className="h-6 w-6" />,
    image: "/assets/services/onsite-services.jpg", 
    altText: "On-site catering services",
    items: [
      {
        title: "Full-Service Catering",
        description: "Setup, service staff, and cleanup"
      },
      {
        title: "Buffet & Stations",
        description: "Themed food stations, carving stations, dessert bars"
      },
      {
        title: "Cocktail & Bar Service",
        description: "Signature cocktails, wine pairings, licensed bartenders"
      },
      {
        title: "Chef-Action Stations",
        description: "Live cooking or carving for interactive guest experiences"
      }
    ]
  },
  {
    id: "delivery",
    title: "4. Drop-Off & Delivery",
    icon: <Truck className="h-6 w-6" />,
    image: "/assets/services/delivery.jpg",
    altText: "Food delivery service",
    items: [
      {
        title: "Corporate Drop-Off",
        description: "Ready-to-serve meals for meetings or office gatherings"
      },
      {
        title: "Party Platters",
        description: "Family-style dishes and curated platters for casual events"
      },
      {
        title: "Boxed Meals",
        description: "Individually packaged meals for convenience and hygiene"
      }
    ]
  },
  {
    id: "specialty",
    title: "5. Specialty & Add-On Services",
    icon: <Gift className="h-6 w-6" />,
    image: "/assets/services/specialty.jpg",
    altText: "Specialty catering services",
    items: [
      {
        title: "Event Staffing",
        description: "Servers, bartenders, chefs, and event coordinators"
      },
      {
        title: "Tableware & Rentals",
        description: "Plates, glassware, linens, and decor coordination"
      },
      {
        title: "Event Planning Support",
        description: "Vendor coordination, setup design, and timeline management"
      },
      {
        title: "Dietary Options",
        description: "Vegan, vegetarian, gluten-free, halal, and allergen-friendly menus"
      },
      {
        title: "Dessert & Beverage Packages",
        description: "Custom cakes, pastries, and coffee or tea bars"
      }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Comprehensive culinary services tailored to meet your specific needs and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <div key={category.id} className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
              <div className="h-48 w-full relative">
                <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center p-4">
                  <div className="flex flex-col items-center text-center">
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
                <Image 
                  src={category.id === "event-catering" ? "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg" :
                       category.id === "meal-services" ? "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg" :
                       category.id === "onsite-services" ? "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" :
                       category.id === "delivery" ? "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" :
                       "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg"}
                  alt={category.altText}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-grow bg-card">
                <ul className="space-y-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex flex-col">
                      <span className="font-semibold text-base mb-1">{item.title}</span>
                      <span className="text-muted-foreground text-sm">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}