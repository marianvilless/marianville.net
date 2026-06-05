import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Eye, 
  Heart, 
  BookOpen, 
  Users, 
  Award,
  GraduationCap
} from "lucide-react";

const values = [
  { icon: Heart, title: "Integrity", description: "Upholding honesty and strong moral principles in all we do." },
  { icon: BookOpen, title: "Excellence", description: "Striving for the highest standards in academics and character." },
  { icon: Users, title: "Community", description: "Fostering a supportive and inclusive learning environment." },
  { icon: Award, title: "Respect", description: "Treating all members of our community with dignity and respect." },
];

const leadership = [
  { name: "Dr. Jane Smith", role: "Principal", description: "Over 20 years of experience in educational leadership." },
  { name: "Mr. John Doe", role: "Vice Principal", description: "Specializes in curriculum development and student affairs." },
  { name: "Mrs. Mary Johnson", role: "Academic Director", description: "Leads our academic programs and faculty development." },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              About Our School
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Discover the history, mission, and values that make Marianville 
              Secondary School a premier institution for education.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Our History
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Marianville Secondary School was founded with a vision to provide 
                  quality education that nurtures both the mind and character of 
                  students. Since our establishment, we have grown to become one of 
                  the leading secondary schools in the region.
                </p>
                <p>
                  Our journey has been marked by a commitment to academic excellence, 
                  innovative teaching methods, and a dedication to producing 
                  well-rounded individuals who are prepared for the challenges of 
                  the modern world.
                </p>
                <p>
                  Over the years, we have expanded our facilities, enhanced our 
                  curriculum, and built a strong community of educators, students, 
                  and parents who share our vision for educational excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
                <GraduationCap className="h-32 w-32 text-primary/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-none shadow-card">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold">Our Mission</h3>
                <p className="mt-4 text-muted-foreground">
                  To provide a comprehensive and quality education that empowers 
                  students to achieve their full potential, develop critical thinking 
                  skills, and become responsible citizens who contribute positively 
                  to society.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-card">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold">Our Vision</h3>
                <p className="mt-4 text-muted-foreground">
                  To be a leading institution of academic excellence, recognized for 
                  producing graduates who are innovative thinkers, ethical leaders, 
                  and lifelong learners committed to making a positive impact in 
                  their communities and the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              The principles that guide everything we do at Marianville.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="border-none shadow-card text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              School Leadership
            </h2>
            <p className="mt-4 text-muted-foreground">
              Meet the dedicated team leading our institution.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {leadership.map((leader) => (
              <Card key={leader.name} className="border-none shadow-card text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold">{leader.name}</h3>
                  <p className="text-sm font-medium text-primary">{leader.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Our Facilities
            </h2>
            <p className="mt-4 text-muted-foreground">
              Modern facilities designed to support comprehensive learning.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              "Modern Science Laboratories",
              "Computer & IT Center",
              "Library & Resource Center",
              "Sports Complex",
              "Assembly Hall",
              "Art & Music Studios"
            ].map((facility) => (
              <Card key={facility} className="border-none shadow-card">
                <CardContent className="p-6">
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-muted to-accent mb-4"></div>
                  <h3 className="font-display font-semibold">{facility}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
