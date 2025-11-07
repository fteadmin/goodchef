"use client"

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface ChefCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ChefCard({ title, description, image }: ChefCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 bg-muted">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover"
          unoptimized={image.startsWith('http')}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl lg:text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm lg:text-base text-muted-foreground">{description}</p>
        <Button asChild className="w-full">
          <Link href="/#contact">Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
