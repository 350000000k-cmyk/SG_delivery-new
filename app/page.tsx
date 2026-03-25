
"use client"

import Image from "next/image"
import Link from "next/link"
import { Package, Truck, MapPin, Clock, Shield, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/placeholder-logo.png"
              alt="Sterlinglams Logistics"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-lg font-bold tracking-tight">Sterlinglams Logistics</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
            <Link href="/login">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Truck className="size-4" />
              Fast & Reliable Delivery
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Delivering Excellence,{" "}
              <span className="text-primary">Every Time</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Sterlinglams Logistics provides fast, reliable, and secure delivery services.
              Real-time tracking, same-day dispatch, and professional courier solutions for
              businesses and individuals.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/login">
                <Button size="lg" className="gap-2 px-8">
                  <Package className="size-5" />
                  Start Shipping
                </Button>
              </Link>
              <Link href="/track/demo">
                <Button variant="outline" size="lg" className="gap-2 px-8">
                  <MapPin className="size-5" />
                  Track a Package
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Why Choose Us</h2>
            <p className="mt-3 text-muted-foreground">
              Trusted by businesses across Singapore for dependable logistics
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Same-Day Delivery",
                description:
                  "Get your packages delivered the same day with our express service. Fast turnaround for urgent shipments.",
              },
              {
                icon: MapPin,
                title: "Real-Time Tracking",
                description:
                  "Track every package in real-time from pickup to delivery. Stay updated with live GPS location.",
              },
              {
                icon: Shield,
                title: "Secure & Insured",
                description:
                  "Every shipment is handled with care and covered by insurance. Your goods are protected at every step.",
              },
              {
                icon: Truck,
                title: "Fleet of Vehicles",
                description:
                  "From small parcels to bulk shipments, our diverse fleet handles deliveries of all sizes efficiently.",
              },
              {
                icon: Package,
                title: "Automated Dispatch",
                description:
                  "Smart route optimization and automated driver assignment ensure the fastest delivery routes.",
              },
              {
                icon: Phone,
                title: "24/7 Support",
                description:
                  "Our support team is available around the clock to help with any questions or delivery concerns.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold">Ready to Ship?</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Join hundreds of satisfied customers who trust Sterlinglams Logistics
              for their delivery needs.
            </p>
            <div className="mt-8">
              <Link href="/login">
                <Button size="lg" variant="secondary" className="gap-2 px-8">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <Image
                src="/placeholder-logo.png"
                alt="Sterlinglams Logistics"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold">Sterlinglams Logistics</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Sterlinglams Logistics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

