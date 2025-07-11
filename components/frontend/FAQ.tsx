"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, HelpCircle, Minus, Plus } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What makes Storix different from other inventory management systems?",
    answer:
      "Storix offers a comprehensive, user-friendly solution with real-time inventory tracking, automated order and warehouse management, advanced reporting, and customizable automation workflows. Unlike basic inventory tools, Storix integrates seamlessly with e-commerce platforms and provides a modern interface with dedicated support through our community channels.",
  },
  {
    question: "How do I get started with Storix?",
    answer:
      "After subscribing to a Basic or Pro plan, you'll receive access to our cloud-based platform. We provide detailed setup guides, video tutorials, and sample data to help you configure inventory tracking, order management, and warehouse settings. Our support team is available to assist with onboarding via email or our Discord community.",
  },
  {
    question: "Can Storix integrate with my existing e-commerce or accounting software?",
    answer:
      "Yes, Storix supports integrations with popular platforms like Shopify, WooCommerce, Amazon, QuickBooks, and Xero. Our API allows for custom integrations, and our automation workflows ensure seamless data syncing across your tools, reducing manual work and errors.",
  },
  {
    question: "Is Storix regularly updated and secure?",
    answer:
      "Absolutely. We regularly update Storix with new features, performance improvements, and security patches. Our platform uses encrypted data storage, role-based access control, and secure APIs to protect your inventory and business data. Check our changelog for the latest updates.",
  },
  {
    question: "What kind of support is available if I encounter issues?",
    answer:
      "We offer dedicated support through our Discord community, email, and in-app help center. Pro plan users get priority support with responses within 24 hours. You can also access our extensive documentation and community forums for troubleshooting and best practices.",
  },
  {
    question: "What features are included in the Basic and Pro plans?",
    answer:
      "The Basic plan includes real-time inventory tracking, order management, single-location warehouse management, and basic reporting. The Pro plan adds multi-location warehouse management, advanced reporting, and unlimited automation workflows. Both plans include lifetime updates and access to our support community.",
  },
  {
    question: "Can I use Storix for multiple warehouses or businesses?",
    answer:
      "Yes, the Pro plan supports multi-location warehouse management, allowing you to track inventory across multiple sites. You can manage multiple businesses under one account, with role-based access to ensure team members only see relevant data. The Basic plan is limited to a single warehouse.",
  },
  {
    question: "Can I try Storix before committing to a plan?",
    answer:
      "Yes, we offer a 14-day free trial for both Basic and Pro plans, giving you full access to all features. You can explore inventory tracking, order management, and reporting with sample data or your own. No credit card is required to start the trial.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 14-day money-back guarantee for both plans. If Storix doesn't meet your needs, contact our support team within 14 days of purchase for a full refund, no questions asked. Refunds are not available if the platform has been used extensively in a production environment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`py-16 ${openIndex === null ? "bg-blue-50" : "bg-purple-50"}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
            Frequently Asked Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            You ask? We <span className="italic">answer</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border overflow-hidden shadow-sm"
            >
              <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-purple-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center">
            <HelpCircle className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-600">Need further support?</span>
          </div>
          <Link
            href="/#contact"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-purple-500 transition duration-300 flex items-center"
          >
            Contact us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}