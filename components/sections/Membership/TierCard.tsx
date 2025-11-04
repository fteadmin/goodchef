"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface TierSection {
  title?: string
  items: string[]
}

export interface TierCardProps {
  name: string
  monthly: string
  yearly: string
  summary: string
  featured?: boolean
  sections: TierSection[]
}

export default function TierCard({ name, monthly, yearly, summary, featured, sections }: TierCardProps) {
  return (
    <Card className={"h-full shadow-md " + (featured ? "ring-2 ring-primary/40" : "") }>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg lg:text-xl">{name}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{summary}</p>
          </div>
          {featured && <Badge variant="outline">Popular</Badge>}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-baseline gap-4">
          <div>
            <div className="text-3xl font-bold">{monthly}</div>
            <div className="text-sm text-muted-foreground">/ month</div>
          </div>
          <div className="text-sm text-muted-foreground">or {yearly} / year</div>
        </div>

        {sections.map((sec, i) => (
          <div key={i}>
            {sec.title && <h4 className="font-semibold mb-2">{sec.title}</h4>}
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {sec.items.map((it, idx) => (
                <li key={idx}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>

      <CardFooter className="flex gap-3">
        <Button asChild className="flex-1">
          <Link href="#contact">Join Monthly</Link>
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <Link href="#contact">Join Yearly</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
