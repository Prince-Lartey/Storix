"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Package,
  ShoppingCart,
  Warehouse,
  BarChart2,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const FeatureTabs = () => {
  const features = [
    {
      id: "inventory-tracking",
      icon: Package,
      tab: "Inventory Tracking",
      title: "Real-Time Inventory Tracking",
      description:
        "Monitor stock levels across multiple locations with real-time updates and alerts.",
      subFeatures: [
        "Real-time stock monitoring across all channels",
        "Low stock and out-of-stock alerts",
        "Batch and serial number tracking",
        "Multi-location inventory synchronization",
        "Barcode scanning integration",
        "Stock adjustment and transfer tools",
        "Historical stock level tracking",
        "Customizable inventory categories",
      ],
    },
    {
      id: "order-management",
      icon: ShoppingCart,
      tab: "Order Management",
      title: "Streamlined Order Management",
      description:
        "Automate and manage purchase and sales orders with seamless workflows.",
      subFeatures: [
        "Automated purchase and sales order processing",
        "Order status tracking and updates",
        "Backorder and partial fulfillment support",
        "Integration with e-commerce platforms",
        "Customizable order workflows",
        "Order history and audit trails",
        "Multi-currency and tax handling",
        "Bulk order processing capabilities",
      ],
    },
    {
      id: "warehouse-management",
      icon: Warehouse,
      tab: "Warehouse Management",
      title: "Efficient Warehouse Management",
      description:
        "Organize and optimize warehouse operations with real-time stock visibility.",
      subFeatures: [
        "Multi-warehouse stock tracking",
        "Warehouse transfer and movement logs",
        "Zone and bin location management",
        "Pick, pack, and ship workflows",
        "Real-time warehouse capacity insights",
        "Integration with barcode scanners",
        "Customizable warehouse layouts",
        "Automated stock allocation rules",
      ],
    },
    {
      id: "reporting",
      icon: BarChart2,
      tab: "Reporting",
      title: "Advanced Reporting & Analytics",
      description:
        "Gain actionable insights with customizable reports and dashboards.",
      subFeatures: [
        "Customizable inventory and sales reports",
        "Real-time analytics dashboards",
        "Export reports to CSV, Excel, or PDF",
        "Sales forecasting and trend analysis",
        "Inventory turnover and valuation reports",
        "Supplier performance tracking",
        "Multi-dimensional data filtering",
        "Scheduled report generation",
      ],
    },
    {
      id: "automation",
      icon: Zap,
      tab: "Automation",
      title: "Automation Workflows",
      description:
        "Automate repetitive tasks to save time and reduce manual errors.",
      subFeatures: [
        "Automated stock reordering based on thresholds",
        "Scheduled inventory updates and notifications",
        "Automated order fulfillment triggers",
        "Integration with third-party automation tools",
        "Customizable automation rules",
        "Error detection and correction workflows",
        "Batch processing for bulk updates",
        "Real-time sync with external systems",
      ],
    },
  ];

  return (
    <section className="w-full py-20 bg-slate-50/50">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
          All the Essential Features
          <br /> for a{" "}
          <span className="inline-block bg-gradient-to-r from-orange-200 via-purple-200 to-purple-300 px-4 rounded-lg">
            Powerful Inventory System
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
          From inventory tracking to automation,
          <br /> Storix covers everything you need.
        </p>
      </div>

      {/* Tabs Component */}
      <div className="w-full max-w-6xl mx-auto px-6">
        <Tabs defaultValue="inventory-tracking" className="w-full">
          {/* Tab Buttons */}
          <TabsList className="flex items-center w-full gap-2 bg-white/50 backdrop-blur-sm h-15 rounded- shadow-sm mb-8 flex-wrap justify-center">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 transition-all duration-300 text-slate-600"
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden md:inline font-medium">
                    {feature.tab}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Content Panels */}
          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100"
              >
                <div className="flex items-start gap-6">
                  {/* Feature Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center shadow-sm">
                    <feature.icon className="w-8 h-8 text-purple-600" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-lg">
                        {feature.description}
                      </p>
                    </div>
                    <ul className="space-y-4">
                      {feature.subFeatures.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                            <svg
                              className="w-3 h-3 text-purple-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-slate-700 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeatureTabs;