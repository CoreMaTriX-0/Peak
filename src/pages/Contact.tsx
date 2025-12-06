import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VariableProximity from "@/components/ui/variable-proximity";

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
                      <a href="mailto:info@gvsconsulting.com" className="text-muted-foreground hover:text-secondary">
                        info@gvsconsulting.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+919478770034" className="text-muted-foreground hover:text-secondary">
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
                      <p className="text-muted-foreground">
                        Next57 Coworking Space Industrial Area Chandigarh
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                      <a href="#" className="bg-secondary/10 p-3 rounded-lg hover:bg-secondary/20 transition-colors">
                        <Facebook className="w-5 h-5 text-secondary" />
                      </a>
                      <a href="#" className="bg-secondary/10 p-3 rounded-lg hover:bg-secondary/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-secondary" />
                      </a>
                      <a href="#" className="bg-secondary/10 p-3 rounded-lg hover:bg-secondary/20 transition-colors">
                        <Instagram className="w-5 h-5 text-secondary" />
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
            <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.9999999999995!2d76.77!3d30.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQzJzEyLjAiTiA3NsKwNDYnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
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
