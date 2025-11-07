import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import ChefCard from "@/components/sections/Chefs/ChefCard";

export const metadata: Metadata = {
  title: "Chefs | Good Chef Co",
  description: "Chef experiences and culinary offerings at Good Chef Co",
};

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
];

const chefs = [
  {
    name: "Chef Ben",
    role: "Owner, The Native Kitchen Lab",
    specialization: "Specializing in seasonal, foraged, farm to table, fusion cuisine.",
    image: "/assets/chefs/chef-ben.webp"
  },
  {
    name: "Chef Carla",
    role: "Owner, the Figaro effect",
    specialization: "Specializing in small plates & plant based fusion cuisine",
    image: "/assets/chefs/chef-carla.webp"
  },
  {
    name: "Chef Mike",
    role: "Owner, MCA Cuisine, LLC",
    specialization: "Specializing in Baking & Pastry, European Cuisine, World Cuisine, and American Regional dishes.",
    image: "/assets/chefs/chef-mike.webp"
  }
];

export default function ChefsPage() {
  return (
    <main className="py-16 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="h-4 w-4 mr-2" /> Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">The A List Experience</h1>
          <p className="text-muted-foreground max-w-3xl">A Culinary Playground — Experience diverse chef concepts, interactive dining, and exclusive events with Good Chef Co.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <ChefCard key={exp.title} {...exp} />
          ))}
        </div>

        {/* Meet the Chefs Section */}
        <div className="mt-24 pt-16 border-t border-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet the Chefs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chefs.map((chef) => (
              <div key={chef.name} className="group flex flex-col">
                <div className="relative h-72 w-full rounded-lg overflow-hidden mb-6 shadow-lg bg-muted">
                  <Image 
                    src={chef.image}
                    alt={chef.name}
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{chef.name}</h3>
                <p className="text-secondary font-semibold mb-3">{chef.role}</p>
                <p className="text-muted-foreground">{chef.specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
