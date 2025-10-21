import { Card } from "@/components/ui/card";

interface StatItemProps {
  number: string;
  label: string;
  description: string;
}

function StatItem({ number, label, description }: StatItemProps) {
  return (
    <Card className="p-8 border border-border bg-card hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col items-center text-center">
        <span className="text-7xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
          {number}
        </span>
        <h3 className="text-xl font-bold mb-3 text-foreground">{label}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </Card>
  );
}

export default function Stats() {
  return (
    <section className="py-24 px-4 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Celebrating Culinary Excellence
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our community&apos;s achievements showcase the impact of our culinary incubator program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatItem 
            number="10"
            label="Chefs"
            description="Supported and nurtured in our incubator."
          />
          <StatItem 
            number="100"
            label="Dishes"
            description="Created and refined through dedication."
          />
          <StatItem 
            number="1000"
            label="Guests"
            description="Impressed by the culinary artistry."
          />
        </div>
      </div>
    </section>
  );
}