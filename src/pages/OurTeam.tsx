/* 
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VariableProximity from "@/components/ui/variable-proximity";
import { ChromaGrid, ChromaItem } from "@/components/ui/chroma-grid";

const OurTeam = () => {
  const heroRef = useRef<HTMLElement>(null);
  const teamMembers: ChromaItem[] = [
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      title: "Sarah Johnson",
      subtitle: "Managing Director & Senior Accountant",
      handle: "sarah.johnson@gvsconsulting.com",
      location: "With over 15 years of experience in financial management, Sarah leads our team with expertise in strategic planning and business advisory.",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #4F46E5, #1e3a8a)",
      url: "mailto:sarah.johnson@gvsconsulting.com"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      title: "Michael Chen",
      subtitle: "Tax & Compliance Specialist",
      handle: "michael.chen@gvsconsulting.com",
      location: "Michael brings 12 years of expertise in Indian tax regulations and compliance, ensuring our clients stay ahead of regulatory requirements.",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #065f46)",
      url: "mailto:michael.chen@gvsconsulting.com"
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      title: "Fatima Al Mazrouei",
      subtitle: "Financial Advisory Lead",
      handle: "fatima.almazrouei@gvsconsulting.com",
      location: "Fatima specializes in helping businesses achieve their financial goals through strategic advisory and innovative solutions.",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #92400e)",
      url: "mailto:fatima.almazrouei@gvsconsulting.com"
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      title: "David Williams",
      subtitle: "Audit & Assurance Manager",
      handle: "david.williams@gvsconsulting.com",
      location: "With a keen eye for detail, David ensures accuracy and transparency in all financial reporting and audit processes.",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #991b1b)",
      url: "mailto:david.williams@gvsconsulting.com"
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      title: "Aisha Mohammed",
      subtitle: "Bookkeeping & Payroll Specialist",
      handle: "aisha.mohammed@gvsconsulting.com",
      location: "Aisha manages comprehensive bookkeeping and payroll services, ensuring precise record-keeping for our diverse client base.",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #5b21b6)",
      url: "mailto:aisha.mohammed@gvsconsulting.com"
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      title: "James Rodriguez",
      subtitle: "Business Development Manager",
      handle: "james.rodriguez@gvsconsulting.com",
      location: "James focuses on building lasting relationships with clients and identifying opportunities for business growth and expansion.",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #0e7490)",
      url: "mailto:james.rodriguez@gvsconsulting.com"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section *\/}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <VariableProximity
                label="Meet Our Team"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 900"
                containerRef={heroRef}
                radius={120}
                falloff="exponential"
                className="inline-block"
              />
            </h1>
            <p className="text-xl opacity-90">
              When it comes to getting help dealing with your business finances, we believe that it's not just a question of price, but also a question of quality, efficiency and above all trust. After all, you need to know your business is in safe hands.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid Section *\/}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ChromaGrid 
            items={teamMembers}
            columns={3}
            radius={250}
            damping={0.5}
            fadeOut={0.8}
          />
        </div>
      </section>

      {/* CTA Section *\/}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Our Expert Team?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Our experienced professionals are here to help you achieve your financial goals. Get in touch with us today.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeam;
*/
