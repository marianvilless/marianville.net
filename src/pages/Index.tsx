import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Trophy,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Consistently high academic standards with exceptional examination results."
  },
  {
    icon: BookOpen,
    title: "Holistic Education",
    description: "Balanced curriculum focusing on academics, sports, and character development."
  },
  {
    icon: Users,
    title: "Dedicated Faculty",
    description: "Experienced and passionate teachers committed to student success."
  },
  {
    icon: Trophy,
    title: "Extra-Curricular",
    description: "Wide range of clubs, sports, and activities for all-round development."
  }
];

const announcements = [
  {
    date: "Dec 15, 2024",
    title: "New Academic Year Registration Open",
    description: "Registration for the upcoming academic year is now open. Apply today!"
  },
  {
    date: "Dec 10, 2024",
    title: "Annual Sports Day",
    description: "Join us for our annual sports day celebration this weekend."
  },
  {
    date: "Dec 5, 2024",
    title: "Parent-Teacher Conference",
    description: "Quarterly parent-teacher meeting scheduled for next week."
  }
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-in font-display text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Welcome to Marianville Secondary School
            </h1>
            <p className="mt-6 animate-fade-in text-lg text-primary-foreground/90 [animation-delay:200ms] md:text-xl">
              Nurturing minds, building futures. Where academic excellence meets 
              character development in a supportive learning environment.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center [animation-delay:400ms] animate-fade-in">
              <Link to="/registration">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Why Choose Marianville?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Discover what makes our school a leading institution for secondary education.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <Card 
                key={item.title} 
                className="group border-none shadow-card transition-all hover:shadow-soft hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Latest Announcements
            </h2>
            <p className="mt-4 text-muted-foreground">
              Stay updated with the latest news and events from our school.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {announcements.map((item) => (
              <Card key={item.title} className="border-none shadow-card">
                <CardContent className="p-6">
                  <span className="text-xs font-medium text-primary">{item.date}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="overflow-hidden border-none bg-hero-gradient shadow-soft">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
                  Ready to Join Our Community?
                </h2>
                <p className="mt-4 text-primary-foreground/90">
                  Begin your journey with Marianville Secondary School today. 
                  Our admissions team is here to guide you through the process.
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link to="/registration">
                    <Button size="lg" variant="secondary">
                      Start Registration
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="border-t border-border bg-muted/30 py-12">
        <div className="container">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <p className="font-display text-4xl font-bold text-primary">500+</p>
              <p className="mt-1 text-sm text-muted-foreground">Students Enrolled</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-primary">50+</p>
              <p className="mt-1 text-sm text-muted-foreground">Qualified Teachers</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-primary">95%</p>
              <p className="mt-1 text-sm text-muted-foreground">Pass Rate</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-primary">25+</p>
              <p className="mt-1 text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
