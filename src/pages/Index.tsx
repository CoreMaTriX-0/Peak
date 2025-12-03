import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Users, Shield, Target, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import VariableProximity from "@/components/ui/variable-proximity";
import CountUp from "@/components/ui/count-up";
import CardSwap from "@/components/ui/card-swap";
import { useRef } from "react";

const Index = () => {
  const whoWeAreRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop"
  ];
  
  const services = [
    { 
      title: "Daily & Transactional Accounting", 
      description: "The meticulous handling of your daily financial workflow, ensuring every dollar is tracked correctly.",
      items: [
        "Accounts Payable (A/P) Management & Vendor Payments",
        "Accounts Receivable (A/R) & Customer Invoicing",
        "Daily Bank and Credit Card Reconciliation",
        "Employee Expense Report Processing & Policy Adherence",
        "Dedicated Document Management and Secure Data Storage"
      ]
    },
    { 
      title: "Monthly Financial Close & Reporting", 
      description: "Turning raw data into strategic insights on a reliable schedule.",
      items: [
        "Journal Entry Preparation & General Ledger Maintenance",
        "Inventory and Fixed Asset Tracking",
        "Robust Monthly Financial Reporting Package: Including Profit & Loss, Balance Sheet, and Statement of Cash Flows",
        "Custom Dashboards and Key Performance Indicator (KPI) Tracking",
        "Executive Summary Narrative highlighting key financial trends and anomalies"
      ]
    },
    { 
      title: "Compliance & Technology Integration", 
      description: "Leverage the power of modern technology for seamless, audit-ready operations.",
      items: [
        "Seamless Integration with your Existing Tech Stack (e.g., QuickBooks, Xero, Bill.com)",
        "Sales Tax Filing and Regulatory Compliance (Local, State, and Federal)",
        "Year-End Preparation and Collaboration with Your Tax CPA"
      ]
    },
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
      <section ref={heroRef} className="min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground pt-20">
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

      {/* Who We Are */}
      <section id="who-we-are" ref={whoWeAreRef} className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
            <VariableProximity
              label="We Don't Just Record Data, We Deliver Peace of Mind."
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 900"
              containerRef={whoWeAreRef}
              radius={120}
              falloff="exponential"
              className="inline-block"
            />
          </h2>
          <div className="prose max-w-4xl">
            <p className="text-base sm:text-lg text-muted-foreground mb-4">
              In the fast-paced world of scaling a business, financial errors and delays are costly distractions. Our Core Accounting and Bookkeeping services are designed to eliminate the administrative burden, delivering a flawless financial structure you can trust.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              By partnering with us, you immediately gain:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Actionable Clarity</p>
                  <p className="text-sm sm:text-base text-muted-foreground">Move beyond basic reports. Our monthly packages include insightful analysis on key drivers, empowering you to make strategic, data-backed decisions about your future growth.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Guaranteed Timeliness</p>
                  <p className="text-sm sm:text-base text-muted-foreground">Say goodbye to late month-end closes. We commit to a consistent, predictable schedule, ensuring your financial statements are ready when you need them for investors, banks, or board meetings.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Reduced Compliance Risk</p>
                  <p className="text-sm sm:text-base text-muted-foreground">Your entire process is managed by finance professionals who understand current compliance requirements, minimizing the risk of penalties and costly audits.</p>
                </div>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground mt-6 font-medium">
              Stop wasting time reconciling transactions and start focusing on your company's potential.
            </p>
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

      {/* Our Services */}
      <section id="services" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Our Core Accounting Service Pillars</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-3xl">
            We offer a comprehensive suite of services, tailored to create a bulletproof financial backbone for your business.
          </p>
          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-secondary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{index + 1}. {service.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-4 sm:ml-16">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Our Commitment</h2>
          <p className="text-base sm:text-lg max-w-4xl opacity-90">
            At GVS Consulting, we pride ourselves on delivering top-tier services. We believe trust takes years to build and only seconds to break, so we strive to exceed your expectations at every turn with reliability and trustworthness.
          </p>
          <p className="text-base sm:text-lg mt-4 opacity-90">
            Ready to see how partnering with us makes all the difference? Let's discuss your financial goals, and we'll craft customized strategies together. Nothing matters more than helping you reach new heights.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Our Values</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            We are driven by these core principles that shape every decision we make and every client we serve:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-sm sm:text-base md:text-lg">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Making Clients The Priority */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Making Clients The Priority</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                With 300+ satisfied clients, our client-first approach ensures personalized service every time. We've built trust by going beyond expectations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Proven Success: We've helped over 100 SMEs grow and optimize their financial operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Transparent Approach: Clear communication and honest pricing with no surprises</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Always Here: Round-the-clock support to address your needs anytime</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary/10 h-64 sm:h-80 md:h-96 rounded-lg flex items-center justify-center">
              <Award className="w-24 h-24 sm:w-32 sm:h-32 text-secondary" />
            </div>
          </div>
        </div>
      </section>

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">What Our Indian Clients Say</h2>
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
