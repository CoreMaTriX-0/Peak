import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Users, Shield, Target, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import VariableProximity from "@/components/ui/variable-proximity";
import CountUp from "@/components/ui/count-up";
import { useRef } from "react";

const Index = () => {
  const whoWeAreRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const services = [
    { title: "Accounting & Financial Services", description: "Comprehensive financial management solutions" },
    { title: "Bookkeeping", description: "Accurate and timely record-keeping services" },
    { title: "Taxation", description: "Expert tax planning and compliance" },
    { title: "Payroll", description: "Efficient payroll management solutions" },
    { title: "Advisory Services", description: "Strategic business advisory" },
    { title: "Compliance Services", description: "Regulatory compliance support" },
  ];

  const values = [
    "Integrity - Always doing what's right",
    "Client satisfaction - Your success is our priority",
    "Innovation - Embracing technology for efficiency",
    "Professionalism - High quality service delivery",
    "Transparency - Clear and honest communication",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="py-28 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <VariableProximity
                label="Why Choose Peakvisory"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={heroRef}
                radius={120}
                falloff="exponential"
                className="inline-block"
              />
            </h1>
            <p className="text-xl mb-8 opacity-90">
              At Peakvisory, your success is our business. We're a passionate team committed to helping clients thrive by offering expert accounting and financial guidance tailored to their unique needs.
            </p>
            <Button size="lg" variant="secondary" asChild className="px-8 py-6 text-lg">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Clients Counter */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                <CountUp to={300} duration={2.5} suffix="+" />
              </div>
              <p className="text-lg text-muted-foreground font-medium">Satisfied Clients</p>
            </div>

            {/* Projects Counter */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">
                <CountUp to={500} duration={2.5} suffix="+" />
              </div>
              <p className="text-lg text-muted-foreground font-medium">Projects Completed</p>
            </div>

            {/* Accountants Counter */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                <CountUp to={15} duration={2} suffix="+" />
              </div>
              <p className="text-lg text-muted-foreground font-medium">Qualified Accountants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" ref={whoWeAreRef} className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">
            <VariableProximity
              label="Who we are?"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 900"
              containerRef={whoWeAreRef}
              radius={120}
              falloff="exponential"
              className="inline-block"
            />
          </h2>
          <div className="prose max-w-4xl">
            <p className="text-lg text-muted-foreground mb-4">
              At Peakvisory, your success is our business.
            </p>
            <p className="text-muted-foreground">
              We are a dedicated team of accounting professionals committed to helping clients thrive. With years of industry experience, we offer comprehensive accounting and financial guidance tailored to each client's needs. Our mission is simple: support your business so you can focus on what matters most—growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
                <p className="text-muted-foreground">
                  We know that no two businesses are alike. Whether you're a small business owner or head of a large corporation, we tailor our solutions to fit your needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expertise You Can Trust</h3>
                <p className="text-muted-foreground">
                  Our highly skilled team brings years of industry knowledge and experience, keeping you informed and compliant.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Results-Driven Approach</h3>
                <p className="text-muted-foreground">
                  We don't just crunch numbers—we aim for real results, providing actionable insights to support smarter decision-making.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <TrendingUp className="w-10 h-10 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Our Commitment</h2>
          <p className="text-lg max-w-4xl opacity-90">
            At Peakvisory, we pride ourselves on delivering top-tier services. We believe trust takes years to build and only seconds to break, so we strive to exceed your expectations at every turn with reliability and trustworthiness.
          </p>
          <p className="text-lg mt-4 opacity-90">
            Ready to see how partnering with us makes all the difference? Let's discuss your financial goals, and we'll craft customized strategies together. Nothing matters more than helping you reach new heights.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Our Values</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We are driven by these core principles that shape every decision we make and every client we serve:
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Making Clients The Priority */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Making Clients The Priority</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With 300+ satisfied clients, our client-first approach ensures personalized service every time. We've built trust by going beyond expectations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-1" />
                  <span>Proven Success: We've helped over 100 SMEs grow and optimize their financial operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-1" />
                  <span>Transparent Approach: Clear communication and honest pricing with no surprises</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-1" />
                  <span>Always Here: Round-the-clock support to address your needs anytime</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary/10 h-96 rounded-lg flex items-center justify-center">
              <Award className="w-32 h-32 text-secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            You, our valued client, are our focus
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            We deliver exceptional relationships alongside services. Our focus is to ensure you receive the individualized attention you deserve. You're the key to everything we do.
          </p>
          <Button size="lg" variant="default" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Indian Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "Peakvisory helped us transform our financial processes. Their expertise helped us ensure regulatory compliance."
                </p>
                <p className="font-semibold">— Rajesh Kumar</p>
                <p className="text-sm text-muted-foreground">CEO, Technology Company</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "Choosing Peakvisory was the best decision for our company. Their team goes above and beyond to ensure we stay ahead with exceptional service."
                </p>
                <p className="font-semibold">— Priya Sharma</p>
                <p className="text-sm text-muted-foreground">Operations Manager, Pvt Ltd</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
