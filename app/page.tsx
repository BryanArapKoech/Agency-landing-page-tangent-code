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
  const form = e.currentTarget; // save ref before async
  setIsSubmitting(true);

  const formData = new FormData(form);
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    service: formData.get("service") as string,
    message: formData.get("message") as string,
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed");

    form.reset();
    alert("Thank you! We'll get back to you within 24 hours.");
  } catch {
    alert("There was an error sending your message. Please try again.");
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
            <Image
              src="/TCS_logo_favicon.png"
              alt="Tangent Code Studios"
              width={36}
              height={36}
              className="rounded-lg"
            />
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
              Contact Us
            </a>

            <Button
              className="rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90 shadow-md"
              asChild
            >
              <a href="#contact">Get a Quote</a>
            </Button>


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
                Contact Us
              </a>
              <Button
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                asChild
              >
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
              Get a professional website built with modern technology and designed to convert.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 shadow-lg sm:w-auto"
                asChild
              >
                <a href="#portfolio">View Our Work</a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-white bg-transparent text-white hover:bg-white hover:text-primary shadow-lg sm:w-auto"
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
                    Pricing is based on your current site and desired improvements. Free consultation included.
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
                  image: "/portfolio/1cherussportswear.png",
                  link: "https://cherusportswear.co.ke",
                },
                {
                  title: "SaaS Dashboard",
                  category: "Education Web Application",
                  image: "/portfolio/2easytrainer.png",
                  link: "https://easytrainer.co.ke",
                },
                {
                  title: "Sports News Website",
                  category: "Sports News Portal",
                  image: "/portfolio/3cheruspulse.png",
                  link: "https://cherussportswear.co.ke/blog.html",
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
                      <a
                        href={project.link || "#contact"}
                        {...(project.link
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        View Project →
                      </a>
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
                  Most standard business websites can be ready within 5–7 business days. 
                  Custom websites with advanced features are planned around the scope, functionality, and feedback process.
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
                  The average turnaround of standard business websites is 7 days. No long waits or endless
                  revision cycles.
                </p>
              </div>

              <div className="rounded-xl bg-primary-foreground/10 p-8 text-center backdrop-blur">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent">
                  <DollarSign className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground">
                  Transparent Pricing
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
                  AI-powered tools, mobile-first design.
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
                        contact@tangentcodestudios.co.ke
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

                    <button
                      type="submit"
                      className="w-full rounded-md bg-primary px-4 py-3 text-base font-medium text-primary-foreground shadow-lg hover:bg-primary/90 disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="border-t border-border bg-card px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-6 text-center md:grid-cols-3 md:text-left">
            {/* Left: Brand */}
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <Image
                src="/TCS_logo_favicon.png"
                alt="Tangent Code Studios"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold text-foreground">
                Tangent Code Studios
              </span>
            </div>

            {/* Middle: Social Icons */}
            <div className="flex items-center justify-center gap-5">
              <a
                href="https://x.com/tangentcodestudios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Tangent Code Studios on X"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://web.facebook.com/profile.php?id=61589872315079"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Tangent Code Studios on Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://tiktok.com/@tangentcodestudios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Tangent Code Studios on TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                </svg>
              </a>
            </div>

            {/* Right: Copyright */}
            <p className="text-sm text-muted-foreground md:text-right">
              A craft of Tangent Code Studios. © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/254725717365"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}