"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Ticket, Shirt, Palette } from "lucide-react";

export interface EventCardProps {
  title: string;
  description: string;
  image: string;
  location: string;
  badgeText: string;
  date?: string;
  time?: string;
  ticketPrice?: string;
  attire?: string;
  theme?: string;
  paymentLink?: string;
}

export default function EventCard({ title, description, image, location, badgeText, date, time, ticketPrice, attire, theme, paymentLink }: EventCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 bg-muted">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover"
          unoptimized={image.startsWith('http')}
        />
        <Badge className="absolute top-3 right-3 text-xs bg-primary/80 hover:bg-primary">{badgeText}</Badge>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg lg:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pb-3 space-y-3">
        {(date || time || ticketPrice || (location && location !== "TBD")) && (
          <div className="space-y-1.5">
            {date && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5 text-secondary" />
                <span>{date}</span>
              </div>
            )}
            {time && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-secondary" />
                <span>{time}</span>
              </div>
            )}
            {location && location !== "TBD" && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-secondary" />
                <span>{location}</span>
              </div>
            )}
            {ticketPrice && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Ticket className="h-3.5 w-3.5 text-secondary" />
                <span>{ticketPrice}</span>
              </div>
            )}
          </div>
        )}
        <CardDescription className="text-xs lg:text-sm line-clamp-3">{description}</CardDescription>
        {theme && (
          <div className="p-2 bg-muted rounded text-xs">
            <div className="flex items-start gap-1.5">
              <Palette className="h-3.5 w-3.5 text-secondary mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">Theme: </span>
                <span className="text-muted-foreground line-clamp-2">{theme}</span>
              </div>
            </div>
          </div>
        )}
        {attire && (
          <div className="p-2 bg-muted rounded text-xs">
            <div className="flex items-start gap-1.5">
              <Shirt className="h-3.5 w-3.5 text-secondary mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold">Attire: </span>
                <span className="text-muted-foreground line-clamp-2">{attire}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-3">
        {paymentLink ? (
          <Button className="w-full h-9" asChild>
            <a href={paymentLink} target="_blank" rel="noopener noreferrer">Buy Tickets</a>
          </Button>
        ) : (
          <Button className="w-full h-9">Register Interest</Button>
        )}
      </CardFooter>
    </Card>
  );
}