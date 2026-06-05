import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Have questions? We'd love to hear from you. Reach out to us 
              and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                Send Us a Message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and we'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+123 456 7890" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    rows={5}
                    required 
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold md:text-3xl">
                  Contact Information
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Reach out to us through any of these channels.
                </p>
              </div>

              <div className="grid gap-4">
                <Card className="border-none shadow-card">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">Address</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        123 School Road, Education District<br />
                        City, State 12345
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-card">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">Phone</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Main Office: +123 456 7890<br />
                        Admissions: +123 456 7891
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-card">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">Email</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        General: info@marianville.edu<br />
                        Admissions: admissions@marianville.edu
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-card">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">Office Hours</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Monday - Friday: 8:00 AM - 4:00 PM<br />
                        Saturday: 9:00 AM - 12:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <Card className="border-none shadow-card overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-muted to-accent flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <p className="mt-2 text-sm text-muted-foreground">Map Location</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
