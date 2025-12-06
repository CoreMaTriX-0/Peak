import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Blog post data (in a real app, this would come from an API or CMS)
const blogPostsData: Record<string, any> = {
  "gst-compliance-india": {
    title: "Understanding GST Compliance in India",
    category: "Tax & Compliance",
    author: "Sarah Johnson",
    date: "October 15, 2024",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop",
    excerpt: "Navigate the complexities of GST regulations in India with our comprehensive guide.",
    content: `
      <h2>Introduction to GST in India</h2>
      <p>Goods and Services Tax (GST) was introduced in India on July 1, 2017, replacing multiple indirect taxes. This landmark implementation marked a significant shift in India's taxation landscape, requiring businesses to adapt their accounting and compliance procedures.</p>
      
      <h2>Key VAT Requirements</h2>
      <p>Businesses operating in India must understand several critical aspects of GST compliance:</p>
      
      <h3>1. Registration Threshold</h3>
      <p>Mandatory registration is required for businesses with taxable supplies and imports exceeding AED 375,000 annually. Voluntary registration is available for businesses exceeding AED 187,500.</p>
      
      <h3>2. Filing Obligations</h3>
      <p>VAT returns must be filed quarterly or monthly, depending on your annual turnover. Timely submission is crucial to avoid penalties.</p>
      
      <h3>3. Record Keeping</h3>
      <p>Businesses must maintain comprehensive records for at least 5 years, including tax invoices, credit notes, and import/export documentation.</p>
      
      <h2>Common Compliance Mistakes</h2>
      <p>Many businesses struggle with VAT compliance due to:</p>
      <ul>
        <li>Incorrect tax invoice formatting</li>
        <li>Misclassification of supplies (standard-rated, zero-rated, or exempt)</li>
        <li>Improper handling of input tax recovery</li>
        <li>Missing filing deadlines</li>
        <li>Inadequate documentation for tax-free supplies</li>
      </ul>
      
      <h2>Best Practices for VAT Compliance</h2>
      <p>To ensure smooth VAT compliance, consider implementing these strategies:</p>
      
      <h3>Invest in Technology</h3>
      <p>Utilize cloud-based accounting software with built-in VAT features. Solutions like Xero, QuickBooks, and Zoho Books can automate calculations and generate compliant invoices.</p>
      
      <h3>Regular Reconciliation</h3>
      <p>Perform monthly reconciliations between your accounting records and VAT returns to identify discrepancies early.</p>
      
      <h3>Staff Training</h3>
      <p>Ensure your finance team stays updated on VAT regulations through regular training and professional development.</p>
      
      <h3>Professional Assistance</h3>
      <p>Partner with experienced accounting firms like GVS Consulting to navigate complex scenarios and ensure full compliance.</p>
      
      <h2>Recent Updates and Changes</h2>
      <p>The Indian GST Council regularly updates GST guidelines. Recent changes include clarifications on e-commerce transactions, real estate supplies, and digital services.</p>
      
      <h2>Conclusion</h2>
      <p>GST compliance in India requires diligence, proper systems, and ongoing attention to regulatory updates. By implementing robust processes and seeking expert guidance when needed, businesses can maintain compliance while minimizing administrative burden.</p>
      
      <p>At GVS Consulting, our team of tax specialists stays current with all VAT developments to provide you with accurate, timely advice. Contact us today to discuss your VAT compliance needs.</p>
    `
  },
  "cloud-based-accounting": {
    title: "The Benefits of Cloud-Based Accounting",
    category: "Technology & Innovation",
    author: "Michael Chen",
    date: "October 20, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    excerpt: "Discover how cloud-based accounting solutions can transform your business operations.",
    content: `
      <h2>The Cloud Revolution in Accounting</h2>
      <p>Cloud-based accounting has transformed how businesses manage their finances. Gone are the days of desktop-only software and local file storage. Today's cloud solutions offer unprecedented flexibility, security, and collaboration capabilities.</p>
      
      <h2>Key Benefits of Cloud Accounting</h2>
      
      <h3>1. Access Anywhere, Anytime</h3>
      <p>With cloud accounting, your financial data is accessible from any device with an internet connection. Whether you're at the office, working from home, or traveling for business, you can check your cash flow, approve invoices, or run reports in real-time.</p>
      
      <h3>2. Real-Time Financial Insights</h3>
      <p>Cloud platforms provide up-to-the-minute visibility into your financial position. Automatic bank feeds update your accounts daily, giving you an accurate picture of your business health at any moment.</p>
      
      <h3>3. Enhanced Collaboration</h3>
      <p>Multiple users can work simultaneously on the same data without conflicts. Share access with your accountant, bookkeeper, or business partners seamlessly, eliminating the need to send files back and forth.</p>
      
      <h3>4. Automatic Backups and Security</h3>
      <p>Cloud providers invest heavily in security infrastructure, often exceeding what individual businesses can afford. Your data is automatically backed up, encrypted, and protected against hardware failures and disasters.</p>
      
      <h3>5. Scalability and Flexibility</h3>
      <p>As your business grows, cloud accounting scales with you. Add users, access advanced features, or integrate new apps without major IT investments or disruptions.</p>
      
      <h2>Popular Cloud Accounting Platforms</h2>
      
      <h3>Xero</h3>
      <p>Known for its intuitive interface and extensive app marketplace, Xero is ideal for small to medium businesses seeking comprehensive features and strong bank reconciliation capabilities.</p>
      
      <h3>QuickBooks Online</h3>
      <p>A market leader with robust reporting and inventory management features. QuickBooks Online integrates seamlessly with numerous business applications.</p>
      
      <h3>Zoho Books</h3>
      <p>Part of the larger Zoho ecosystem, this platform offers excellent value and deep integration with other Zoho business tools.</p>
      
      <h2>Implementation Best Practices</h2>
      <p>Successfully migrating to cloud accounting requires careful planning:</p>
      <ul>
        <li>Clean up your existing data before migration</li>
        <li>Choose the right platform for your industry and size</li>
        <li>Train your team thoroughly on the new system</li>
        <li>Set up proper user permissions and access controls</li>
        <li>Integrate complementary apps strategically</li>
      </ul>
      
      <h2>AI and Automation Features</h2>
      <p>Modern cloud accounting platforms incorporate artificial intelligence to:</p>
      <ul>
        <li>Automatically categorize transactions</li>
        <li>Detect anomalies and potential errors</li>
        <li>Generate smart recommendations</li>
        <li>Predict cash flow trends</li>
        <li>Automate invoice matching and approval workflows</li>
      </ul>
      
      <h2>Making the Switch</h2>
      <p>Transitioning to cloud accounting is easier than many businesses expect. At GVS Consulting, we guide clients through the entire process—from platform selection and data migration to staff training and ongoing optimization.</p>
      
      <p>Ready to modernize your accounting? Contact us to discuss which cloud solution is right for your business and how we can help you make a smooth transition.</p>
    `
  },
  "tax-planning-smes": {
    title: "Tax Planning Strategies for SMEs",
    category: "Tax Planning",
    author: "Fatima Al Mazrouei",
    date: "October 25, 2024",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop",
    excerpt: "Effective tax planning can significantly reduce your business's tax liability.",
    content: `
      <h2>The Importance of Strategic Tax Planning</h2>
      <p>For small and medium enterprises (SMEs), effective tax planning is not just about compliance—it's a strategic tool for maximizing profitability and supporting business growth. With proper planning, SMEs can significantly reduce their tax burden while remaining fully compliant with regulations.</p>
      
      <h2>Year-Round Tax Strategies</h2>
      <p>Successful tax planning is an ongoing process, not a year-end scramble. Consider these year-round strategies:</p>
      
      <h3>1. Maintain Accurate Records</h3>
      <p>Comprehensive record-keeping is the foundation of effective tax planning. Implement systems to track all income, expenses, and potential deductions throughout the year.</p>
      
      <h3>2. Understand Available Deductions</h3>
      <p>Many SMEs miss valuable deductions simply because they're unaware of them. Common overlooked deductions include:</p>
      <ul>
        <li>Home office expenses for remote workers</li>
        <li>Vehicle expenses for business use</li>
        <li>Professional development and training costs</li>
        <li>Software subscriptions and technology expenses</li>
        <li>Business insurance premiums</li>
      </ul>
      
      <h3>3. Optimize Business Structure</h3>
      <p>Your business structure significantly impacts your tax obligations. Regularly review whether your current structure (sole proprietorship, partnership, LLC, or corporation) remains optimal as your business evolves.</p>
      
      <h2>Timing Strategies</h2>
      
      <h3>Income Deferral</h3>
      <p>When beneficial, consider deferring income to the following tax year to reduce current-year liability. This strategy works well when you expect to be in a lower tax bracket in the future.</p>
      
      <h3>Expense Acceleration</h3>
      <p>Conversely, accelerating deductible expenses into the current year can reduce immediate tax liability. Consider making planned purchases before year-end.</p>
      
      <h2>Investment in Growth</h2>
      
      <h3>Capital Expenditure Planning</h3>
      <p>Strategic timing of capital investments can provide tax benefits while supporting business growth. Many jurisdictions offer accelerated depreciation or bonus depreciation for qualifying assets.</p>
      
      <h3>Research and Development</h3>
      <p>If applicable to your industry, R&D tax credits can provide substantial savings while encouraging innovation.</p>
      
      <h2>Retirement and Succession Planning</h2>
      <p>Tax-advantaged retirement contributions serve dual purposes: reducing current tax liability while building long-term wealth. Consider:</p>
      <ul>
        <li>Maximizing pension contributions</li>
        <li>Establishing employee benefit programs</li>
        <li>Planning for eventual business succession</li>
      </ul>
      
      <h2>International Considerations</h2>
      <p>For SMEs operating across borders or in free zones, additional planning opportunities exist:</p>
      <ul>
        <li>Free zone tax benefits and incentives</li>
        <li>Double taxation treaty advantages</li>
        <li>Transfer pricing documentation</li>
        <li>Permanent establishment considerations</li>
      </ul>
      
      <h2>Quarterly Review Process</h2>
      <p>Implement a quarterly tax review process to:</p>
      <ul>
        <li>Assess year-to-date tax position</li>
        <li>Adjust estimated tax payments</li>
        <li>Identify planning opportunities before year-end</li>
        <li>Ensure compliance with filing obligations</li>
      </ul>
      
      <h2>Working with Tax Professionals</h2>
      <p>While understanding tax basics is valuable, partnering with experienced tax advisors ensures you're maximizing all available benefits while maintaining full compliance.</p>
      
      <p>At GVS Consulting, we develop customized tax strategies aligned with your business goals. Our proactive approach identifies opportunities throughout the year, not just at tax time. Contact us to schedule a tax planning consultation.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>{post.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-muted-foreground">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Advice?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our team of experts is here to help you navigate your accounting and tax challenges.
          </p>
          <Button size="lg" variant="default" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
