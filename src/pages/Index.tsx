import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Users, Shield, Target, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import VariableProximity from "@/components/ui/variable-proximity";
import CountUp from "@/components/ui/count-up";
import CardSwap from "@/components/ui/card-swap";
import { ServicePillars } from "@/components/ServicePillars";
import { useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop"
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground -mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                <VariableProximity
                  label="Core Accounting & Bookkeeping Services"
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 900"
                  containerRef={heroRef}
                  radius={120}
                  falloff="exponential"
                  className="inline-block"
                />
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 opacity-90">
                Accurate Books | On-Time Reports | Zero Headaches<br />
                Your Reliable Finance Foundation.
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
                We handle the complexity of daily financial operations, delivering clean, actionable data for compliance and decision-making. Stop worrying about the details - start acting on the facts.
              </p>
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </div>
            
            {/* Right Side - Animated Image */}
            <div className="flex items-center justify-center">
              <CardSwap 
                images={heroImages}
                width={500}
                height={400}
                cardDistance={60}
                verticalDistance={70}
                delay={4000}
                pauseOnHover={false}
                skewAmount={5}
                easing="elastic"
                className="w-full max-w-md lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Clients Counter */}
            <div className="text-center p-4 sm:p-6">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">
                <CountUp to={300} duration={2.5} suffix="+" />
              </div>
              <p className="text-base sm:text-lg text-muted-foreground font-medium">Satisfied Clients</p>
            </div>

            {/* Projects Counter */}
            <div className="text-center p-4 sm:p-6">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary mb-2">
                <CountUp to={500} duration={2.5} suffix="+" />
              </div>
              <p className="text-base sm:text-lg text-muted-foreground font-medium">Projects Completed</p>
            </div>

            {/* Accountants Counter */}
            <div className="text-center p-4 sm:p-6 sm:col-span-2 md:col-span-1">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent mb-2">
                <CountUp to={15} duration={2} suffix="+" />
              </div>
              <p className="text-base sm:text-lg text-muted-foreground font-medium">Qualified Accountants</p>
            </div>
          </div>
        </div>
      </section>



      {/* Why Work With Us */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">The Advantage: Why Choose Us Over In-House?</h2>
          <p className="text-base sm:text-lg text-muted-foreground text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
            Choosing to outsource your core accounting is a strategic move. Choosing us guarantees higher quality, efficiency, and scalability than traditional alternatives.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-background rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-left font-semibold">Internal Hire</th>
                  <th className="p-4 text-left font-semibold">Generic Bookkeeper</th>
                  <th className="p-4 text-left font-semibold bg-secondary text-secondary-foreground">Our Firm</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Oversight</td>
                  <td className="p-4 text-muted-foreground">Limited</td>
                  <td className="p-4 text-muted-foreground">Minimal</td>
                  <td className="p-4 font-semibold text-secondary">CPA/CA/Finance Executive Supervision</td>
                </tr>
                <tr className="border-b border-border bg-muted/50">
                  <td className="p-4 font-medium">Scalability</td>
                  <td className="p-4 text-muted-foreground">Fixed Capacity</td>
                  <td className="p-4 text-muted-foreground">Hard to Scale Quickly</td>
                  <td className="p-4 font-semibold text-secondary">Flexibly scales with your growth</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Cost Model</td>
                  <td className="p-4 text-muted-foreground">Salary, Benefits, Taxes, Training</td>
                  <td className="p-4 text-muted-foreground">Hourly or Basic Package</td>
                  <td className="p-4 font-semibold text-secondary">Predictable, Fixed Monthly Fees</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="p-4 font-medium">Risk Reduction</td>
                  <td className="p-4 text-muted-foreground">High risk of single point of failure</td>
                  <td className="p-4 text-muted-foreground">Variable Quality</td>
                  <td className="p-4 font-semibold text-secondary">Zero single point of failure; guaranteed accuracy</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg sm:text-xl text-center font-medium text-foreground italic">
            "We eliminate the cost and hassle of hiring, training, and managing an in-house accounting department while delivering CFO-level expertise to your books."
          </p>
        </div>
      </section>

      {/* Our Services - New Animated Version */}
      <ServicePillars />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Gain Financial Confidence?
          </h2>
          <p className="text-xl sm:text-2xl max-w-2xl mx-auto mb-4 opacity-90 font-semibold">
            Stop Managing Books, Start Managing Growth.
          </p>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 opacity-90">
            Book Your Free Core Accounting Consultation. We'll discuss your current bottlenecks and design a tailored, transparent solution to streamline your entire financial operation.
          </p>
          <Button size="lg" variant="default" asChild className="w-full sm:w-auto">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Trusted by Growing Businesses</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm sm:text-base text-muted-foreground italic mb-4">
                  "GVS Consulting helped us transform our financial processes. Their expertise helped us ensure regulatory compliance."
                </p>
                <p className="font-semibold text-sm sm:text-base">— Rajesh Kumar</p>
                <p className="text-xs sm:text-sm text-muted-foreground">CEO, Technology Company</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-sm sm:text-base text-muted-foreground italic mb-4">
                  "Choosing GVS Consulting was the best decision for our company. Their team goes above and beyond to ensure we stay ahead with exceptional service."
                </p>
                <p className="font-semibold text-sm sm:text-base">— Priya Sharma</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Operations Manager, Pvt Ltd</p>
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
