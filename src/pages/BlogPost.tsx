import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

interface BlogPostData {
  title: string;
  subtitle: string;
  image: string;
  content: JSX.Element;
}

const blogPosts: Record<string, BlogPostData> = {
  "streamlining-accounts-payable": {
    title: "Streamlining Your Accounts Payable (AP) Processing",
    subtitle: "Accounts Payable",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop",
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground mb-8">
          Accounts Payable (AP) processing is often viewed as a purely administrative task, but it's much more—it's the backbone of your supplier relationships and a key indicator of your cash flow health. An inefficient AP process can lead to late payments, damaged supplier goodwill, missed early payment discounts, and even fraud.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Why Efficient AP Processing is Crucial for Your Business</h2>
        <p className="mb-6">
          In today's fast-paced business environment, slow AP is a liability. By optimizing this function, you gain:
        </p>
        <ul className="space-y-3 mb-8">
          <li><strong>Improved Cash Flow Forecasting:</strong> Knowing exactly when payments are due allows for better liquidity management.</li>
          <li><strong>Stronger Vendor Relationships:</strong> Paying vendors accurately and on time secures better terms and service.</li>
          <li><strong>Reduced Costs:</strong> Avoiding late payment penalties and actively capturing early payment discounts directly impacts your bottom line.</li>
          <li><strong>Fraud Prevention:</strong> Structured processes and controls minimize the risk of fraudulent invoices or payments.</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">The 5 Key Steps in the AP Process</h2>
        <p className="mb-6">Understanding the typical AP workflow is the first step to optimizing it:</p>
        
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Invoice Receipt</h3>
            <p>The vendor sends an invoice (paper or electronic). The goal here is to receive and log the invoice as quickly as possible.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Verification and Approval</h3>
            <p>The invoice is matched against the original purchase order (PO) and receiving report. This critical check is known as the 3-Way Match. An appropriate manager must then approve the payment.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Data Entry</h3>
            <p>The approved invoice details are accurately logged into the accounting system, specifying the vendor, amount, due date, and associated expense accounts.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">4. Payment Processing</h3>
            <p>Payment is scheduled and executed via check, ACH, or wire transfer on or before the due date. Modern systems prioritize electronic payment methods.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">5. Record Keeping</h3>
            <p>The transaction is recorded, and all supporting documents (invoice, PO, receiving report) are digitally filed and linked for easy audit access.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Top 4 Tips for a Tighter AP System</h2>
        <p className="mb-6">Want to transform your AP from a bottleneck into a strategic advantage? Focus on these areas:</p>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-background rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-4 text-left font-semibold">Strategy</th>
                <th className="p-4 text-left font-semibold">Actionable Tip</th>
                <th className="p-4 text-left font-semibold">Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Go Digital</td>
                <td className="p-4">Implement software for electronic invoicing and automated data capture.</td>
                <td className="p-4">Eliminates manual data entry errors and speeds up the entire cycle.</td>
              </tr>
              <tr className="border-b border-border bg-muted/50">
                <td className="p-4 font-medium">Establish Clear Policies</td>
                <td className="p-4">Define who can approve purchases and up to what amount to maintain control.</td>
                <td className="p-4">Ensures spending aligns with budgets and prevents unauthorized purchases.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Leverage Discounts</td>
                <td className="p-4">Actively track and take advantage of early payment discounts (e.g., 2/10, net 30).</td>
                <td className="p-4">These small, recurring savings accumulate into significant annual cost reductions.</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="p-4 font-medium">Implement Segregation of Duties</td>
                <td className="p-4">Ensure the person receiving invoices is not the person approving or executing payments.</td>
                <td className="p-4">A crucial internal control measure to prevent financial fraud.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg mt-8 p-6 bg-secondary/10 rounded-lg">
          Efficient AP processing is not just about paying bills; it's about safeguarding your assets and strengthening your reputation. By implementing robust controls and leveraging technology, your accounting team can turn this often-overlooked function into a major strategic asset.
        </p>
      </div>
    )
  },
  "mastering-bank-reconciliation": {
    title: "Mastering Bank Reconciliation: Why It Matters More Than You Think",
    subtitle: "Financial Controls",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&h=600&fit=crop",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mt-12 mb-6">What is Bank Reconciliation? (And Why Can't I Skip It?)</h2>
        <p className="mb-6">
          Bank Reconciliation is the process of comparing the cash balance in your company's general ledger (your books) with the corresponding balance on your bank statement.
        </p>
        <p className="mb-8">
          Many business owners assume that since they are using modern accounting software, the balances must be correct. Not true! Reconciling your accounts is a vital internal control that ensures the accuracy of your financial statements and protects against errors and theft.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Two Sides of the Reconciliation Equation</h2>
        <p className="mb-6">
          The goal is to determine the true cash balance. This involves adjusting both the bank statement balance and the book balance for items already recorded on one side but not the other.
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-background rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-4 text-left font-semibold">Type of Adjustment</th>
                <th className="p-4 text-left font-semibold">Example Item</th>
                <th className="p-4 text-left font-semibold">Why the Discrepancy Exists</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Bank Statement Side</td>
                <td className="p-4">Deposits in Transit: Money deposited after the bank cut-off.</td>
                <td className="p-4">Company recorded it, but the bank hasn't processed it yet.</td>
              </tr>
              <tr className="border-b border-border bg-muted/50">
                <td className="p-4 font-medium">Bank Statement Side</td>
                <td className="p-4">Outstanding Checks: Checks written but not yet cleared (cashed) by the recipient.</td>
                <td className="p-4">Company recorded the payment, but the bank hasn't paid it out yet.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Book Side</td>
                <td className="p-4">Bank Fees & Charges: Monthly maintenance fees, transaction charges.</td>
                <td className="p-4">The bank deducted it, but the company hasn't recorded the expense yet.</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="p-4 font-medium">Book Side</td>
                <td className="p-4">NSF Checks: Checks received from customers that bounce (Non-Sufficient Funds).</td>
                <td className="p-4">The company recorded a deposit that the bank later reversed.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">A Step-by-Step Guide to Reconciliation Success</h2>
        <p className="mb-6">Follow this process every month to ensure accuracy:</p>
        
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Start with Balances</h3>
            <p>Note the ending balance on your bank statement and the ending balance in your accounting software.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Verify Deposits</h3>
            <p>Match all deposits in your books to the bank statement. List any Deposits in Transit.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Verify Payments</h3>
            <p>Match all checks and payments in your books to the bank statement. List any Outstanding Checks.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">4. Adjust the Book Balance</h3>
            <p>Account for items that appear on the bank statement but not in your books (e.g., add interest earned; subtract bank service charges, NSF checks, or electronic transfers).</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">5. Verify the Match</h3>
            <p>The adjusted book balance must equal the adjusted bank balance. If they don't, you need to find the remaining error (which is often an unrecorded transfer or a transposition error).</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Audit Advantage</h2>
        <p className="mb-6">Regular, timely bank reconciliation is an essential practice that protects your business. It is your best defense against:</p>
        <ul className="space-y-3 mb-8">
          <li><strong>Fraud:</strong> Catching unauthorized withdrawals quickly.</li>
          <li><strong>Errors:</strong> Identifying clerical mistakes made by your team or the bank.</li>
          <li><strong>Bad Decisions:</strong> Ensuring that the "Cash" number on your balance sheet is always reliable for decision-making.</li>
        </ul>
      </div>
    )
  },
  "understanding-chart-of-accounts": {
    title: "The DNA of Your Finances: Understanding the Chart of Accounts (COA)",
    subtitle: "Accounting Fundamentals",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    content: (
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold mt-12 mb-6">What Exactly is a Chart of Accounts (COA)?</h2>
        <p className="mb-6">
          The Chart of Accounts (COA) is an organized list of every account in your general ledger. Think of it as the master directory or blueprint for your entire financial system. Every single transaction your business makes will be assigned to one of these accounts.
        </p>
        <p className="mb-8">
          A well-structured COA allows you to quickly generate meaningful financial reports, giving you a clear window into where your money is coming from and where it is going.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">The Five Main Categories of the COA</h2>
        <p className="mb-6">
          The COA is fundamentally structured around the basic accounting equation: Assets = Liabilities + Equity. The categories are usually numbered in a standardized sequence for clarity:
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-background rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="p-4 text-left font-semibold">Category</th>
                <th className="p-4 text-left font-semibold">Description</th>
                <th className="p-4 text-left font-semibold">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Assets</td>
                <td className="p-4">What you own (resources with economic value)</td>
                <td className="p-4">Cash, Accounts Receivable, Equipment</td>
              </tr>
              <tr className="border-b border-border bg-muted/50">
                <td className="p-4 font-medium">Liabilities</td>
                <td className="p-4">What you owe (obligations to pay others)</td>
                <td className="p-4">Accounts Payable, Loans, Credit Card Debt</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Equity</td>
                <td className="p-4">The owner's stake (Assets - Liabilities)</td>
                <td className="p-4">Owner's Capital, Retained Earnings</td>
              </tr>
              <tr className="border-b border-border bg-muted/50">
                <td className="p-4 font-medium">Revenue</td>
                <td className="p-4">Money earned</td>
                <td className="p-4">Sales or Service</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="p-4 font-medium">Expenses</td>
                <td className="p-4">Costs incurred</td>
                <td className="p-4">Rent, Utilities, Wages</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">3 Tips for Designing a Smart COA</h2>
        <p className="mb-6">
          Setting up your COA correctly from the start can save you massive headaches later on, especially during tax season or periods of rapid growth.
        </p>
        
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Keep it Logical and Hierarchical</h3>
            <p>Group similar items together. For instance, all your payroll-related expenses (Salaries, Payroll Taxes, Benefits) should be in sequential expense numbers.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Build in Scalability</h3>
            <p>Don't number your accounts sequentially (e.g., 5001, 5002, 5003). Leave gaps (e.g., 5010, 5020, 5030...) so you can add new accounts later (like "Software Subscription Expense") without disrupting the structure.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Prioritize Clarity over Brevity</h3>
            <p>Use specific account names (e.g., "Office Supply Expense" instead of just "Supplies") to ensure transactions are always classified accurately. This makes financial reporting and tax preparation much simpler.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Your Financial Foundation</h2>
        <p className="mb-6">
          A great COA is the foundation for producing accurate financial statements (Income Statement and Balance Sheet) and making smart, data-driven business decisions. It's an administrative task with enormous strategic importance.
        </p>
      </div>
    )
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/blog" className="inline-block mb-8 mt-8">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Button>
          </Link>

          {/* Article Header */}
          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            <p className="text-primary font-semibold mb-2">{post.subtitle}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          </div>

          {/* Article Content */}
          <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
            {post.content}
          </div>

          {/* CTA Section */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Accounting?</h2>
            <p className="text-lg mb-6 opacity-90">
              Let GVS Consulting help you streamline your financial processes and gain better insights into your business.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
