import { Metadata } from "next"
import TierCard from '@/components/sections/Membership/TierCard'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Membership | Good Chef Co',
  description: 'Membership tiers and benefits for Good Chef Co',
}

const tiers = [
  {
    name: 'Taste Pioneer',
    monthly: '$99',
    yearly: '$999 (save $189)',
    summary: 'Entry-level membership for food lovers who want priority access, curated digital content, and community connection.',
    featured: false,
    sections: [
      { title: 'Dining Access', items: [
        '24-hour priority reservations',
        '4 guaranteed premium table bookings per month',
        '10% dining savings',
        'First access to seasonal menus and previews'
      ]},
      { title: 'Events & Experiences', items: [
        'Hands-on quarterly culinary workshops',
        'Intimate monthly chef conversations',
        'Fast-track access to signature events',
        'Access to an on-demand masterclass library'
      ]},
      { title: 'Digital Benefits', items: [
        'Personalized Good Chef platform profile',
        'Curated monthly culinary insights',
        'Extensive recipe collection access',
        'Intuitive reservation dashboard'
      ]},
      { title: 'Community Features', items: [
        'Connect with fellow food enthusiasts',
        'Share culinary discoveries',
        'Monthly gastronomy gatherings',
        'Customizable member showcase'
      ]},
    ]
  },
  {
    name: 'Gastronomy Insider',
    monthly: '$199',
    yearly: '$1,999 (save $389)',
    summary: 'For diners who want elevated access and exclusive experiences beyond the basics.',
    featured: true,
    sections: [
      { title: 'Enhanced Dining Access', items: [
        '48-hour priority booking window',
        '8 premium table guarantees per month',
        '15% dining savings',
        'Quarterly chef’s-table experiences and preview tastings',
        'Welcome champagne service'
      ]},
      { title: 'Premium Events & Experiences', items: [
        'Unlimited workshop access',
        'Exclusive quarterly masterclasses',
        'VIP event priority',
        'Curated wine journeys and kitchen tours'
      ]},
      { title: 'Advanced Digital Benefits', items: [
        'AI-powered dining recommendations',
        'First access to restaurant launches',
        'Smart booking with preferences',
        'Digital sommelier companion and expanded masterclass library'
      ]},
      { title: 'Enhanced Community Features', items: [
        'Premium community access',
        'Event hosting privileges',
        'Distinguished reviewer status',
        'Enhanced profile customization and exclusive member circles'
      ]},
    ]
  },
  {
    name: 'Culinary Luminary',
    monthly: '$299',
    yearly: '$2,999 (save $589)',
    summary: 'The top-tier membership for enthusiasts who want ultra-premium access, personalized concierge services, and private experiences.',
    featured: false,
    sections: [
      { title: 'VIP Dining Access', items: [
        '72-hour advance booking privileges',
        'Unlimited premium reservations',
        '20% dining savings',
        "Monthly chef’s-table experiences",
        'Bespoke menu creation & personal dining concierge',
        'Luxury champagne service and private dining sanctuary access'
      ]},
      { title: 'Exclusive Experiences', items: [
        'Private chef sessions and ultra-exclusive events',
        'Luxury culinary retreats and global gastronomy adventures',
        'Bespoke event creation and celebrity chef encounters'
      ]},
      { title: '24/7 Digital Concierge', items: [
        'Personalized recipe curation & priority support',
        'Advanced taste analytics and bespoke content',
        'Beta feature access and digital cellar curator'
      ]},
      { title: 'Elite Community Features', items: [
        'Elite lounge privileges and community leadership opportunities',
        'Master reviewer status and dedicated profile showcase',
        'Exclusive networking events and mentorship/advisory opportunities'
      ]},
    ]
  }
]

export default function MembershipPage() {
  return (
    <main className="py-16 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-4">
            <ChevronLeft className="h-4 w-4 mr-2" /> Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Membership Tiers</h1>
          <p className="text-muted-foreground max-w-3xl">Choose the membership that fits your appetite — from priority dining to exclusive chef-led experiences and full concierge support.</p>
        </div>

        {/* Use the same card grid as the Events page for a cleaner, consistent layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <TierCard key={t.name} {...t} />
          ))}
        </div>

        <div className="mt-12 text-center text-muted-foreground">
          <p>Questions about memberships or corporate/group inquiries? <a href="#contact" className="text-primary hover:underline">Contact us</a> and our team will help pick the right tier.</p>
        </div>
      </div>
    </main>
  )
}
