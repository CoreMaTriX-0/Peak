import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Users, Shield, Target, Award, Lightbulb, Zap, Heart, BarChart, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import VariableProximity from "@/components/ui/variable-proximity";

const WhoWeAre = () => {
  const heroRef = useRef<HTMLElement>(null);

  const values = [
    { icon: TrendingUp, title: "Success", description: "Always moving the needle" },
    { icon: Award, title: "Quality", description: "Not taking shortcuts" },
    { icon: Heart, title: "Fun", description: "Creating enjoyable interactions" },
    { icon: Lightbulb, title: "Improvement", description: "Work smarter not harder" },
    { icon: Shield, title: "Ethics", description: "Stand by what we do" },
  ];

  const testimonials = [
    {
      text: "GVS Consulting transformed our financial operations. Their expertise in VAT compliance and proactive support helped us achieve 100% compliance.",
      author: "Ahmed Al Mansouri",
      position: "CEO, Tech Innovations LLC",
      rating: 5
    },
    {
      text: "The team's responsiveness and deep knowledge of UAE tax regulations is exceptional. They're always available when we need them.",
      author: "Fatima Hassan",
      position: "Finance Director, Global Trading Co.",
      rating: 5
    },
    {
      text: "Their implementation of Xero completely streamlined our bookkeeping. We've saved countless hours and gained real-time financial insights.",
      author: "Mohammed Al Futtaim",
      position: "Managing Partner, Retail Group",
      rating: 5
    },
    {
      text: "GVS Consulting's personalized approach sets them apart. They truly understand our business goals and provide tailored solutions.",
      author: "Layla Abdullah",
      position: "CFO, Healthcare Services",
      rating: 5
    },
    {
      text: "Working with ACCA-qualified experts gives us confidence. Their strategic tax planning saved us significantly this year.",
      author: "Khalid Rahman",
      position: "Founder, E-commerce Platform",
      rating: 5
    },
    {
      text: "The 95% client retention rate speaks for itself. We've been with GVS Consulting for 5 years and couldn't be happier.",
      author: "Sara Al Zaabi",
      position: "Operations Manager, Construction Co.",
      rating: 5
    }
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
                label="We Don't Just Record Data, We Deliver Peace of Mind."
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={heroRef}
                radius={120}
                falloff="exponential"
                className="inline-block"
              />
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Your Partner in Building a Bulletproof Financial Foundation
            </p>
            <p className="text-lg opacity-90">
              In the fast-paced world of scaling a business, financial errors and delays are costly distractions. Our Core Accounting and Bookkeeping services are designed to eliminate the administrative burden, delivering a flawless financial structure you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us - Text Left, Image Right */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">What You Gain By Partnering With Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Actionable Clarity</h3>
                    <p className="text-muted-foreground">
                      Move beyond basic reports. Our monthly packages include insightful analysis on key drivers, empowering you to make strategic, data-backed decisions about your future growth.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Guaranteed Timeliness</h3>
                    <p className="text-muted-foreground">
                      Say goodbye to late month-end closes. We commit to a consistent, predictable schedule, ensuring your financial statements are ready when you need them for investors, banks, or board meetings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reduced Compliance Risk</h3>
                    <p className="text-muted-foreground">
                      Your entire process is managed by finance professionals who understand current compliance requirements, minimizing the risk of penalties and costly audits.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Predictable Fixed Monthly Fees</h3>
                    <p className="text-muted-foreground">
                      No surprises. Our transparent pricing model means you know exactly what you're paying each month, allowing for better budget planning and cost control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 h-[500px] rounded-lg flex items-center justify-center">
              <Users className="w-40 h-40 text-secondary/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment - Image Left, Text Right */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-[400px] rounded-lg flex items-center justify-center">
              <Shield className="w-40 h-40 text-primary/60" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Commitment</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At GVS Consulting, your peace of mind is our highest priority. We keep you informed and prepared for every financial milestone, so you can focus on what matters most—growing your business and living a balanced life.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to experience accounting with a difference? Discover how GVS Consulting can help you reach new heights.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Our Values</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            For us, one of the key reasons for being in business is the ability to live up to our core values:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <value.icon className="w-12 h-12 text-secondary mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose GVS Consulting - Text Left, Image Right */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose GVS Consulting</h2>
              <h3 className="text-2xl font-semibold mb-6 text-secondary">Making Clients The Priority</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Extensive Expertise:</span> Over 80+ years of Chartered Accounting experience led by ACCA-qualified experts.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Comprehensive Services:</span> Full range of services including tax advisory, accounting, bookkeeping, and ERP implementation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Proven Success:</span> 90% of clients see improved financial clarity and efficiency; 100% VAT compliance success.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Innovative Technology:</span> Cutting-edge software like Xero, QuickBooks, Zoho Books; AI tools reduce manual effort by 50%.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Cost-Effective Solutions:</span> Competitive rates; significant cost savings through optimized strategies.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Client-Centric Approach:</span> Personalized support with a 95% client retention rate, reflecting strong partnerships.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 h-[500px] rounded-lg flex items-center justify-center">
              <Award className="w-40 h-40 text-accent/60" />
            </div>
          </div>
        </div>
      </section>

      {/* GVS Consulting Difference - Image Left, Text Right */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-secondary/20 to-accent/20 h-[400px] rounded-lg flex items-center justify-center">
              <Target className="w-40 h-40 text-secondary/60" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">There are many reasons to choose GVS CONSULTING:</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">We deliver exceptional client service and sound, strategic solutions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Our directors have a long history of providing clarity, knowledge and innovation to businesses of all sizes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">As a progressive firm, we are constantly adapting to the changing business environment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">We practice what we preach. We are a paperless office operating fully in the cloud.</span>
                </li>
              </ul>
              <Button size="lg" className="mt-6" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* You, our valued client - Text Left, Image Right */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">You, our valued client, are our focus</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We enjoy long and successful relationships with many businesses, public organisations and family groups. We are large enough to offer you a range of expertise yet flexible enough to give you personalised service.
              </p>
              <p className="text-xl font-semibold mb-8 text-secondary">
                This is the GVS Consulting Experience.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 h-[400px] rounded-lg flex items-center justify-center">
              <Heart className="w-40 h-40 text-primary/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Your business is our business - Image Left, Text Right */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 h-[400px] rounded-lg flex items-center justify-center">
              <BarChart className="w-40 h-40 text-white/60" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Your business is our business</h2>
              <p className="text-lg opacity-90 mb-4">
                Business is our world, we live it and breathe it, and we understand it.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="opacity-90">We listen to the concerns, needs, and priorities of small and medium businesses.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="opacity-90">We work closely with you to ensure you reach your goals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="opacity-90">We know what factors are influencing your industry and are well-positioned to give you timely and well-structured advice.</span>
                </li>
              </ul>
              <Button size="lg" variant="default" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The GVS Consulting Experience */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            The GVS CONSULTING Experience is more than rhetoric: it's our guarantee of exceptional service
          </h2>
          <p className="text-lg max-w-4xl mx-auto opacity-90">
            All GVS Consulting staff is committed to the GVS Consulting Experience. We ensure there is a clear understanding with our clients about the work we will perform, the support we require of our clients to enable us to perform effectively, and our pricing and delivery dates. We strive to thoroughly understand our client's businesses and goals to help them achieve their goals and objectives.
          </p>
        </div>
      </section>

      {/* Testimonials - Horizontal Auto-Scroll */}
      <section className="py-16 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-4xl font-bold text-center mb-4">What Our UAE Clients Say</h2>
          <p className="text-center text-muted-foreground">Real feedback from our valued clients</p>
        </div>
        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="min-w-[400px] flex-shrink-0">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
