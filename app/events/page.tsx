import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import EventCard from "@/components/sections/Events/EventCard";

export const metadata: Metadata = {
  title: "Events | Good Chef Co",
  description: "Upcoming culinary events and experiences hosted by Good Chef Co.",
};

export default function EventsPage() {
  return (
    <main className="py-16 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-muted-foreground max-w-3xl">
            Experience exceptional culinary moments with Good Chef Co&apos;s signature event series. 
            Join us for unique dining experiences, chef collaborations, and food celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <EventCard 
            title="Beyond the Plate"
            description="An immersive dining experience that explores the stories, techniques, and inspirations behind signature dishes. Engage with our chefs and discover the culinary journey beyond what's on your plate."
            image="/assets/events/beyondplate.jpg"
            location="Downtown LA"
            badgeText="Featured Event"
          />
          <EventCard 
            title="Maa Harvest"
            description="A soul-nourishing ritual uniting communities through farm-to-table authenticity. This seasonal, chef-led experience features curated menus from local regenerative farms and indigenous growers, celebrating holistic living and conscious consumption while rebuilding our connection to the land and each other."
            image="/assets/events/maaharvest3.jpg"
            location="Urban Farm Collective"
            badgeText="Seasonal"
          />
          <EventCard 
            title="A-list Supper Club"
            description="An exclusive membership dining experience featuring rotating chef residencies. Each intimate dinner features innovative tasting menus from our incubator's rising culinary talents in a sophisticated setting."
            image="/assets/events/alistsupper.jpg"
            location="The A-List Venue"
            badgeText="Members Only"
          />
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Events Mailing List</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be the first to know about upcoming events, chef collaborations, and special dining experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </main>
  );
}