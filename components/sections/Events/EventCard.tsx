"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export interface EventCardProps {
  title: string;
  description: string;
  image: string;
  location: string;
  badgeText: string;
}

export default function EventCard({ title, description, image, location, badgeText }: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64 bg-muted">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover"
          unoptimized={image.startsWith('http')}
        />
        <Badge className="absolute top-4 right-4 bg-primary/80 hover:bg-primary">{badgeText}</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl lg:text-2xl">{title}</CardTitle>
        <div className="flex items-center text-muted-foreground text-sm">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm lg:text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Register Interest</Button>
      </CardFooter>
    </Card>
  );
}