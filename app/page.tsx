"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Code,
  Palette,
  Wrench,
  Phone,
  MessageSquare,
  Rocket,
  Clock,
  DollarSign,
  Zap,
  Menu,
  X,
  Mail,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };

    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form
      e.currentTarget.reset();

      // Show success message (you could use a toast library here)
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Code className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">
              Tangent Code Studios
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Portfolio
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a
                href="#services"
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" asChild>
                <a href="#contact">Get a Quote</a>
              </Button>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-primary px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Modern Websites for Growing Businesses
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 sm:text-xl">
              Get a professional website in 7 days — fixed pricing, no
              surprises. Built with modern technology and designed to convert.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg sm:w-auto"
                asChild
              >
                <a href="#portfolio">View Our Work</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg sm:w-auto"
                asChild
              >
                <a href="#contact">Get a Quote</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Everything you need to establish and grow your online presence
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <Card className="border-border bg-card transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">
                    Website Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Custom-built websites using modern frameworks. Fast,
                    responsive, and optimized for search engines.
                  </p>
                  <p className="mt-4 text-lg font-medium text-foreground">
                    Starting from 60,000 Kshs.
Every project is unique. Get a custom quote tailored to your specific needs and budget.
                  </p>
                  <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" asChild>
                    <a href="#contact">Get Custom Quote</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-card transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Palette className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">
                    Website Redesign
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Transform your outdated website into a modern, high-
                    converting digital experience.
                  </p>
                  <p className="mt-4 text-lg font-medium text-foreground">
                    Starting from 60,000 Kshs.
Pricing based on your current site and desired improvements. Free consultation included.
                  </p>
                  <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" asChild>
                    <a href="#contact">Get Custom Quote</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-border bg-card transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Wrench className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">
                    Maintenance & Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ongoing updates, security patches, and technical support to
                    keep your site running smoothly.
                  </p>
                  <p className="mt-4 text-lg font-medium text-foreground">
                    From 10,000 Kshs/month.
Flexible packages designed around your website's needs. Monthly or annual billing.
                  </p>
                  <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" asChild>
                    <a href="#contact">Request Proposal</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="bg-secondary px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Recent Work
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                See how we&apos;ve helped businesses transform their online
                presence
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "E-Commerce Platform",
                  category: "Online Store",
                  image: "/portfolio-1.jpg",
                },
                {
                  title: "SaaS Dashboard",
                  category: "Web Application",
                  image: "/portfolio-2.jpg",
                },
                {
                  title: "Restaurant Website",
                  category: "Local Business",
                  image: "/portfolio-3.jpg",
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-card shadow-md transition-all hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-medium text-accent">
                      {project.category}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-card-foreground">
                      {project.title}
                    </h3>
                    <Button
                      className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                      asChild
                    >
                      <a href="#contact">View Project →</a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                How It Works
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                A simple, streamlined process to get your website live
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="relative text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  1
                </div>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                  <Phone className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Discovery Call
                </h3>
                <p className="mt-2 text-muted-foreground">
                  15-minute free consultation to understand your goals and
                  requirements
                </p>
              </div>

              <div className="relative text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  2
                </div>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                  <MessageSquare className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Design & Build
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We design and develop your website in 5-7 business days with
                  your feedback
                </p>
              </div>

              <div className="relative text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  3
                </div>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                  <Rocket className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Launch & Support
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Your site goes live with ongoing support and maintenance
                  options
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-primary px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Why Choose Us
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
                We make getting a professional website simple and stress-free
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-xl bg-primary-foreground/10 p-8 text-center backdrop-blur">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent">
                  <Clock className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground">
                  Fast Delivery
                </h3>
                <p className="mt-2 text-primary-foreground/80">
                  Average turnaround of 7 days. No long waits or endless
                  revision cycles.
                </p>
              </div>

              <div className="rounded-xl bg-primary-foreground/10 p-8 text-center backdrop-blur">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent">
                  <DollarSign className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground">
                  Fixed Pricing
                </h3>
                <p className="mt-2 text-primary-foreground/80">
                  No hidden fees or surprise invoices. You know exactly what
                  you&apos;ll pay upfront.
                </p>
              </div>

              <div className="rounded-xl bg-primary-foreground/10 p-8 text-center backdrop-blur">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent">
                  <Zap className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground">
                  Modern Technology
                </h3>
                <p className="mt-2 text-primary-foreground/80">
                  AI-powered tools, mobile-first design, and cutting-edge
                  frameworks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Get In Touch
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Ready to start your project? Send us a message and we&apos;ll
                  get back to you within 24 hours.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">
                        contact@tangentcode.studio
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">
                        +254 725717365
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          className="border-input bg-background"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          className="border-input bg-background"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-foreground">
                        Service Interested In
                      </Label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="development">Website Development</option>
                        <option value="redesign">Website Redesign</option>
                        <option value="maintenance">
                          Maintenance & Support
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="border-input bg-background"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Code className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">
                Tangent Code Studios
              </span>
            </div>

            <p className="text-sm text-muted-foreground">
              A craft of Tangent Code Studios. © {new Date().getFullYear()} All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
