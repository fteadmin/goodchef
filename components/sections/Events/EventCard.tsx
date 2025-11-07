"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";

export interface EventCardProps {
  title: string;
  description: string;
  image: string;
  location: string;
  badgeText: string;
  date?: string;
}

export default function EventCard({ title, description, image, location, badgeText, date }: EventCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
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
      </CardHeader>
      <CardContent className="flex-grow">
        {(date || location) && (
          <div className="space-y-2 mb-4">
            {date && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>{date}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>{location}</span>
              </div>
            )}
          </div>
        )}
        <CardDescription className="text-sm lg:text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Register Interest</Button>
      </CardFooter>
    </Card>
  );
}