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
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Handle hash navigation when component mounts
    const hash = window.location.hash;
    if (hash === "#services") {
      setTimeout(() => {
        const element = document.getElementById("services");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);
  
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
      <section ref={heroRef} className="min-h-[90vh] md:min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-8 md:py-0 -mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
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
                <span className="hidden sm:inline">Accurate Records | On-Time Reports | Zero Stress<br /></span>
                <span className="sm:hidden">Accurate Records · On-Time Reports<br />Zero Stress<br /></span>
                Your Trusted Accounting Backbone.
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
                We manage the full spectrum of day-to-day accounting tasks, ensuring organized, reliable, and audit-ready books. With clean, dependable data at your fingertips, you can stay compliant, make informed decisions, and stop stressing about the paperwork—so you can focus on running your business.
              </p>
              <div 
                className="relative inline-block w-full sm:w-auto group overflow-hidden rounded-md"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                }}
                style={{
                  '--mouse-x': '0px',
                  '--mouse-y': '0px',
                  '--r': '200px',
                  '--card-border': '#10b981',
                  '--card-gradient': 'linear-gradient(145deg, #10b981, #059669)'
                } as React.CSSProperties}
              >
                <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                  background: 'radial-gradient(var(--r) circle at var(--mouse-x) var(--mouse-y), var(--card-border), transparent 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  padding: '2px'
                }}></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 mix-blend-screen pointer-events-none" style={{
                  background: 'radial-gradient(calc(var(--r) * 0.8) circle at var(--mouse-x) var(--mouse-y), var(--card-gradient), transparent 100%)'
                }}></div>
                <Button size="lg" variant="secondary" asChild className="relative z-10 w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
                  <Link to="/contact">Book Appointment</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Side - Animated Image */}
            <div className="flex items-center justify-center mt-6 md:mt-0">
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
                className="w-full max-w-sm sm:max-w-md lg:max-w-none scale-90 sm:scale-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services - New Animated Version */}
      <ServicePillars />

      {/* Why Work With Us */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">The Advantage: Why Choose Us Over In-House?</h2>
            <p className="text-base sm:text-lg text-muted-foreground text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
              Choosing to outsource your core accounting is a strategic move. Choosing us guarantees higher accuracy, efficiency, and scalability than traditional alternatives.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto mb-8 -mx-4 sm:mx-0"
          >
            <div className="inline-block min-w-full align-middle">
            <table className="w-full border-collapse bg-background rounded-lg overflow-hidden shadow-lg min-w-[640px]">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-left font-semibold">Internal Hire</th>
                  <th className="p-4 text-left font-semibold">Generic Bookkeeper</th>
                  <th className="p-4 text-left font-semibold bg-secondary text-secondary-foreground">GVS Consulting</th>
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
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-center font-medium text-foreground italic"
          >
            "We eliminate the cost and hassle of hiring, training, and managing an in-house accounting department while delivering CFO-level expertise to your books."
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
