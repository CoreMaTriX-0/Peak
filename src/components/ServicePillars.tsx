import { Calculator, FileText, Blocks } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';

export function ServicePillars() {
  const pillars = [
    {
      number: '1',
      icon: Calculator,
      image: 'https://images.unsplash.com/photo-1762318986860-a7b18dd0da02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nJTIwY2FsY3VsYXRvciUyMGRlc2t8ZW58MXx8fHwxNzY0ODUzNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Daily & Transactional Accounting',
      subtitle: 'The meticulous handling of your daily financial workflow, ensuring every dollar is tracked correctly.',
      services: [
        'Accounts Payable (A/P) Management & Vendor Payments',
        'Accounts Receivable (A/R) & Customer Invoicing',
        'Daily Bank and Credit Card Reconciliation',
        'Employee Expense Report Processing & Policy Adherence',
        'Dedicated Document Management and Secure Data Storage',
      ],
    },
    {
      number: '2',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1758518728641-8668e601cce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjByZXBvcnRzJTIwY2hhcnRzfGVufDF8fHx8MTc2NDkyNTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Monthly Financial Close & Reporting',
      subtitle: 'Turning raw data into strategic insights on a reliable schedule.',
      services: [
        'Journal Entry Preparation & General Ledger Maintenance',
        'Inventory and Fixed Asset Tracking',
        'Robust Monthly Financial Reporting Package: Including Profit & Loss, Balance Sheet, and Statement of Cash Flows',
        'Custom Dashboards and Key Performance Indicator (KPI) Tracking',
        'Executive Summary Narrative highlighting key financial trends and anomalies',
      ],
    },
    {
      number: '3',
      icon: Blocks,
      image: 'https://images.unsplash.com/photo-1667984550708-a6beba23cb4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW50ZWdyYXRpb24lMjBjb21wdXRlcnxlbnwxfHx8fDE3NjQ5MjUzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Compliance & Technology Integration',
      subtitle: 'Leverage the power of modern technology for seamless, audit-ready operations.',
      services: [
        'Seamless Integration with your Existing Tech Stack (e.g., QuickBooks, Xero, Bill.com)',
        'Sales Tax Filing and Regulatory Compliance (Local, State, and Federal)',
        'Year-End Preparation and Collaboration with Your Tax CPA',
      ],
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Accounting Service Pillars</h2>
          <p className="text-base sm:text-lg text-slate-600">
            We offer a comprehensive suite of services, tailored to create a bulletproof financial backbone for your business.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className={`h-64 md:h-auto ${isEven ? 'md:order-1' : 'md:order-2'}`}
                  >
                    <ImageWithFallback
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className={`p-6 sm:p-8 md:p-10 ${isEven ? 'md:order-2' : 'md:order-1'}`}
                  >
                    <div className="flex items-start gap-4 sm:gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-100 flex items-center justify-center">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-slate-700" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 sm:gap-3 mb-2">
                          <span className="text-lg sm:text-xl text-slate-400">{pillar.number}.</span>
                          <h3 className="text-xl sm:text-2xl font-bold">{pillar.title}</h3>
                        </div>
                        <p className="text-sm sm:text-base text-slate-600">{pillar.subtitle}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 sm:space-y-3 ml-16 sm:ml-20">
                      {pillar.services.map((service, serviceIndex) => (
                        <motion.li
                          key={serviceIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.5 + serviceIndex * 0.1 }}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <span className="text-slate-400 mt-1.5 flex-shrink-0">•</span>
                          <span className="text-sm sm:text-base text-slate-700">{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
