import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VariableProximity from "@/components/ui/variable-proximity";
import { ChromaGrid, ChromaItem } from "@/components/ui/chroma-grid";

const Blog = () => {
  const heroRef = useRef<HTMLElement>(null);

  const blogPosts: ChromaItem[] = [
    {
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
      title: "Understanding VAT Compliance in UAE",
      subtitle: "Tax & Compliance",
      handle: "Read More →",
      location: "Navigate the complexities of VAT regulations in the UAE with our comprehensive guide. Learn about filing requirements, common mistakes to avoid, and best practices for maintaining compliance.",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #4F46E5, #1e3a8a)",
      url: "/blog/vat-compliance-uae"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      title: "The Benefits of Cloud-Based Accounting",
      subtitle: "Technology & Innovation",
      handle: "Read More →",
      location: "Discover how cloud-based accounting solutions like Xero and QuickBooks can transform your business operations. Real-time insights, automated processes, and enhanced collaboration await.",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #065f46)",
      url: "/blog/cloud-based-accounting"
    },
    {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      title: "Tax Planning Strategies for SMEs",
      subtitle: "Tax Planning",
      handle: "Read More →",
      location: "Effective tax planning can significantly reduce your business's tax liability. Explore strategic approaches tailored for small and medium enterprises to optimize your financial position.",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #92400e)",
      url: "/blog/tax-planning-smes"
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      title: "Bookkeeping Best Practices",
      subtitle: "Accounting Fundamentals",
      handle: "Read More →",
      location: "Master the art of accurate bookkeeping with our essential best practices guide. From proper record-keeping to reconciliation techniques, ensure your financial data is always reliable.",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #991b1b)",
      url: "/blog/bookkeeping-best-practices"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      title: "Financial Forecasting for Growth",
      subtitle: "Business Strategy",
      handle: "Read More →",
      location: "Learn how to create accurate financial forecasts that drive business growth. Understand key metrics, projection techniques, and how to use data for strategic decision-making.",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #5b21b6)",
      url: "/blog/financial-forecasting"
    },
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      title: "ERP Implementation Guide",
      subtitle: "Systems & Integration",
      handle: "Read More →",
      location: "Successfully implement an ERP system in your organization with our step-by-step guide. From selection to deployment, maximize ROI and streamline your business processes.",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #0e7490)",
      url: "/blog/erp-implementation-guide"
    },
    {
      image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=600&fit=crop",
      title: "Understanding Corporate Tax in UAE",
      subtitle: "Tax & Compliance",
      handle: "Read More →",
      location: "Get up to speed with the UAE's Corporate Tax regime. Learn about tax rates, exemptions, registration requirements, and how to prepare your business for compliance.",
      borderColor: "#EC4899",
      gradient: "linear-gradient(160deg, #EC4899, #9d174d)",
      url: "/blog/corporate-tax-uae"
    },
    {
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
      title: "AI in Accounting: The Future is Now",
      subtitle: "Technology & Innovation",
      handle: "Read More →",
      location: "Explore how artificial intelligence is revolutionizing accounting practices. From automated data entry to predictive analytics, discover the tools transforming the profession.",
      borderColor: "#14B8A6",
      gradient: "linear-gradient(185deg, #14B8A6, #0f766e)",
      url: "/blog/ai-in-accounting"
    },
    {
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      title: "Cash Flow Management Tips",
      subtitle: "Financial Management",
      handle: "Read More →",
      location: "Master cash flow management to ensure your business stays healthy. Learn practical tips for monitoring, forecasting, and improving your company's cash position.",
      borderColor: "#F97316",
      gradient: "linear-gradient(220deg, #F97316, #c2410c)",
      url: "/blog/cash-flow-management"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <VariableProximity
                label="Our Blog"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={heroRef}
                radius={120}
                falloff="exponential"
                className="inline-block"
              />
            </h1>
            <p className="text-xl opacity-90">
              Expert insights, industry trends, and practical advice for your business success
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ChromaGrid 
            items={blogPosts}
            columns={3}
            radius={250}
            damping={0.5}
            fadeOut={0.8}
            clickableCard={true}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
