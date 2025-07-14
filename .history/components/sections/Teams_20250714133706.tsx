import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const teamMembers = [
  {
    name: "Curtis Randolph",
    role: "CEO",
    image: "/assets/team/ca.jpg",
    description: "Visionary leader driving culinary innovation and business growth."
  },
  {
    name: "Alfonzo Spigner",
    role: "CCO",
    image: "/assets/team/alf.jpg",
    description: "Chief Creative Officer orchestrating exceptional culinary experiences."
  },
  {
    name: "Sharon Roldan",
    role: "Program Director",
    image: "/assets/team/mimi.jpeg",
    description: "Leading our chef incubator program and educational initiatives."
  },
  {
    name: "Carmelle Neal",
    role: "Community Director",
    image: "/assets/team/car2.jpg",
    description: "Building and nurturing our passionate culinary community."
  }
]

export default function Teams() {
  return (
    <section className="py-24 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our passionate team of culinary professionals and industry experts are dedicated to fostering the next generation of culinary talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border border-border bg-card group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="mb-6 relative">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
