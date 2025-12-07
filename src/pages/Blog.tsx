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
      title: "Streamlining Your Accounts Payable (AP) Processing",
      subtitle: "Accounts Payable",
      handle: "Read More →",
      location: "Accounts Payable (AP) processing is the backbone of your supplier relationships and a key indicator of your cash flow health. Learn the 5 key steps in the AP process and top 4 tips for a tighter AP system to transform this function from a bottleneck into a strategic advantage.",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #4F46E5, #1e3a8a)",
      url: "/blog/streamlining-accounts-payable"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      title: "Mastering Bank Reconciliation: Why It Matters More Than You Think",
      subtitle: "Financial Controls",
      handle: "Read More →",
      location: "Bank Reconciliation is a vital internal control that ensures the accuracy of your financial statements and protects against errors and theft. Follow our step-by-step guide to reconciliation success and discover why this practice is your best defense against fraud, errors, and bad decisions.",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #065f46)",
      url: "/blog/mastering-bank-reconciliation"
    },
    {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      title: "The DNA of Your Finances: Understanding the Chart of Accounts (COA)",
      subtitle: "Accounting Fundamentals",
      handle: "Read More →",
      location: "The Chart of Accounts (COA) is the master directory for your entire financial system. Learn about the five main categories of the COA and discover 3 tips for designing a smart COA that serves as the foundation for accurate financial statements and data-driven business decisions.",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #92400e)",
      url: "/blog/understanding-chart-of-accounts"
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
