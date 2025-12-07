import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Users, Shield, Target, Award, Lightbulb, Zap, Heart, BarChart, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import VariableProximity from "@/components/ui/variable-proximity";
import { motion, AnimatePresence } from "framer-motion";

const WhoWeAre = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);

  // Auto-scroll testimonials every 3 seconds
  useEffect(() => {
    if (isAutoScrollPaused) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoScrollPaused]);

  const handlePrevious = () => {
    setIsAutoScrollPaused(true);
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoScrollPaused(true);
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setIsAutoScrollPaused(true);
    setCurrentTestimonial(index);
  };

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
      text: "The team's responsiveness and deep knowledge of Indian tax regulations is exceptional. They're always available when we need them.",
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
      <section ref={heroRef} className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
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
            <p className="text-lg sm:text-xl mb-4 sm:mb-6 opacity-90">
              Your Partner in Building a Bulletproof Financial Foundation
            </p>
            <p className="text-base sm:text-lg opacity-90">
              In the fast-paced world of scaling a business, financial errors and delays are costly distractions. Our Core Accounting and Bookkeeping services are designed to eliminate the administrative burden, delivering a flawless financial structure you can trust.
            </p>
          </div>
        </div>
      </section>
      {/* Why Work With Us - Text Left, Image Right */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">What You Gain By Partnering With Us</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Actionable Clarity",
                    description: "Move beyond basic reports. Our monthly packages include insightful analysis on key drivers, empowering you to make strategic, data-backed decisions about your future growth."
                  },
                  {
                    title: "Guaranteed Timeliness",
                    description: "Say goodbye to late month-end closes. We commit to a consistent, predictable schedule, ensuring your financial statements are ready when you need them for investors, banks, or board meetings."
                  },
                  {
                    title: "Reduced Compliance Risk",
                    description: "Your entire process is managed by finance professionals who understand current compliance requirements, minimizing the risk of penalties and costly audits."
                  },
                  {
                    title: "Predictable Fixed Monthly Fees",
                    description: "No surprises. Our transparent pricing model means you know exactly what you're paying each month, allowing for better budget planning and cost control."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-secondary/20 to-accent/20 h-[500px] rounded-lg flex items-center justify-center"
            >
              <Users className="w-40 h-40 text-secondary/60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Commitment - Image Left, Text Right */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/20 to-secondary/20 h-[400px] rounded-lg flex items-center justify-center"
            >
              <Shield className="w-40 h-40 text-primary/60" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-center">Our Values</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              For us, one of the key reasons for being in business is the ability to live up to our core values:
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardContent className="pt-6">
                    <value.icon className="w-12 h-12 text-secondary mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose GVS Consulting - Text Left, Image Right */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Why Choose GVS Consulting</h2>
              <h3 className="text-2xl font-semibold mb-6 text-secondary">Making Clients The Priority</h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Extensive Expertise:",
                    text: "A seasoned team of Chartered Accounting professionals led by ACCA-qualified specialists."
                  },
                  {
                    label: "Comprehensive Services:",
                    text: "A complete suite of solutions, including tax advisory, accounting, bookkeeping, and ERP implementation."
                  },
                  {
                    label: "Proven Success:",
                    text: "Recognized for enhancing clients' financial clarity, streamlining operations, and ensuring strong compliance."
                  },
                  {
                    label: "Innovative Technology:",
                    text: "Cutting-edge software like Xero, QuickBooks, Zoho Books; AI tools reduce manual effort by 50%."
                  },
                  {
                    label: "Cost-Effective Solutions:",
                    text: "Thoughtfully designed strategies that deliver value while keeping costs efficient."
                  },
                  {
                    label: "Client-Centric Approach:",
                    text: "Dedicated, personalized support that fosters long-term, trusted partnerships."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">{item.label}</span> {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-accent/20 to-primary/20 h-[500px] rounded-lg flex items-center justify-center"
            >
              <TrendingUp className="w-40 h-40 text-accent/60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* You, our valued client - Image Left, Text Right */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/20 to-secondary/20 h-[400px] rounded-lg flex items-center justify-center"
            >
              <Heart className="w-40 h-40 text-primary/60" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your business is our business - Image Left, Text Right */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 h-[400px] rounded-lg flex items-center justify-center"
            >
              <BarChart className="w-40 h-40 text-white/60" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Your business is our business</h2>
              <p className="text-lg opacity-90 mb-4">
                Business is our world, we live it and breathe it, and we understand it.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "We listen to the concerns, needs, and priorities of small and medium businesses.",
                  "We work closely with you to ensure you reach your goals.",
                  "We know what factors are influencing your industry and are well-positioned to give you timely and well-structured advice."
                ].map((text, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Zap className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="opacity-90">{text}</span>
                  </motion.li>
                ))}
              </ul>
              <Button size="lg" variant="default" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The GVS Consulting Experience */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              The GVS CONSULTING Experience is more than rhetoric: it's our guarantee of exceptional service
            </h2>
            <p className="text-lg max-w-4xl mx-auto text-muted-foreground">
              All GVS Consulting staff is committed to the GVS Consulting Experience. We ensure there is a clear understanding with our clients about the work we will perform, the support we require of our clients to enable us to perform effectively, and our pricing and delivery dates. We strive to thoroughly understand our client's businesses and goals to help them achieve their goals and objectives.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
