import { useState, useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VariableProximity from "@/components/ui/variable-proximity";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Contact = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate name
    if (formData.name.trim().length < 2) {
      setNameError("Name must be at least 2 characters");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      setNameError("Name can only contain letters and spaces");
      return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    // Validate phone number
    if (formData.phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Check if Supabase is configured
      if (!isSupabaseConfigured) {
        console.warn('Supabase not configured - form data:', formData);
        toast({
          title: "Demo Mode",
          description: "Supabase is not configured yet. See console for form data.",
        });
        setFormData({ name: "", email: "", countryCode: "+91", phone: "", message: "" });
        setIsSubmitting(false);
        return;
      }

      const { error } = await supabase
        .from("contact_messages")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phone}`,
            message: formData.message,
            status: "new",
          },
        ]);

      if (error) throw error;

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: "", email: "", countryCode: "+91", phone: "", message: "" });
      setPhoneError("");
      setNameError("");
      setEmailError("");
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error Sending Message",
        description: error.message || "Please try again later or contact us directly via email/phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, name: value });
    
    if (value.trim().length === 0) {
      setNameError("");
    } else if (value.trim().length < 2) {
      setNameError("Name must be at least 2 characters");
    } else if (!/^[a-zA-Z\s]+$/.test(value)) {
      setNameError("Name can only contain letters and spaces");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, email: value });
    
    if (value.trim().length === 0) {
      setEmailError("");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length <= 10) {
      setFormData({ ...formData, phone: value });
      if (value.length === 10) {
        setPhoneError("");
      } else if (value.length > 0) {
        setPhoneError(`${10 - value.length} more digit${10 - value.length !== 1 ? 's' : ''} required`);
      } else {
        setPhoneError("");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section ref={heroRef} className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                <VariableProximity
                  label="Contact Us"
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 900"
                  containerRef={heroRef}
                  radius={120}
                  falloff="exponential"
                  className="inline-block"
                />
              </h1>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                Get in touch with us for all your accounting and financial service needs
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    We're here to help and answer any question you might have. We look forward to hearing from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@gvsconsulting.info" className="text-muted-foreground hover:text-secondary">
                        info@gvsconsulting.info
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <WhatsAppIcon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <a href="https://wa.me/919478770034" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary">
                        +91 94787 70034
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Address</h3>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Next57+Coworking+Space+Industrial+Area+Chandigarh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-secondary"
                      >
                        Next57 Coworking Space Industrial Area Chandigarh
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleNameChange}
                      required
                      placeholder="Your full name"
                      autoComplete="name"
                      className={nameError ? "border-red-500" : ""}
                    />
                    {nameError && (
                      <p className="text-xs text-red-500 mt-1">{nameError}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleEmailChange}
                      required
                      placeholder="your@email.com"
                      autoComplete="email"
                      className={emailError ? "border-red-500" : ""}
                    />
                    {emailError && (
                      <p className="text-xs text-red-500 mt-1">{emailError}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="flex gap-2">
                      <Input
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value === '' || value === '+' || /^\+\d{0,4}$/.test(value)) {
                            setFormData({ ...formData, countryCode: value });
                          }
                        }}
                        placeholder="+91"
                        autoComplete="tel-country-code"
                        className="w-[80px]"
                        maxLength={5}
                      />
                      <div className="flex-1">
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          required
                          placeholder="10 digit number"
                          autoComplete="tel-national"
                          maxLength={10}
                          className={phoneError ? "border-red-500" : ""}
                        />
                        {phoneError && (
                          <p className="text-xs text-red-500 mt-1">{phoneError}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Find Us Here</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Visit our office at Next57 Coworking Space in Industrial Area, Chandigarh
              </p>
              <Button size="lg" asChild>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Next57+Coworking+Space+Industrial+Area+Chandigarh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
            <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg border border-border" style={{ touchAction: 'pan-x pan-y' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.9999999999995!2d76.77!3d30.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQzJzEyLjAiTiA3NsKwNDYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, touchAction: 'pan-x pan-y' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location - Next57 Coworking Space Industrial Area Chandigarh"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
