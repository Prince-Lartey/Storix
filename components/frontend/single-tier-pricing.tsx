import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Package,
  ShoppingCart,
  Warehouse,
  BarChart2,
  Zap,
  CheckCircle,
} from "lucide-react";

const PricingCards = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const plans = [
    {
      name: "Basic",
      price: 29,
      description: "Perfect for small businesses starting with inventory management.",
      features: [
        { name: "Real-Time Inventory Tracking", included: true },
        { name: "Order Management", included: true },
        { name: "Warehouse Management (Single Location)", included: true },
        { name: "Basic Reporting & Analytics", included: true },
        { name: "Automation Workflows (Limited)", included: false },
      ],
      ctaLink: "https://storix.com/purchase/basic",
    },
    {
      name: "Pro",
      price: 99,
      description: "Advanced features for growing businesses with complex needs.",
      features: [
        { name: "Real-Time Inventory Tracking", included: true },
        { name: "Order Management", included: true },
        { name: "Warehouse Management (Multi-Location)", included: true },
        { name: "Advanced Reporting & Analytics", included: true },
        { name: "Automation Workflows (Unlimited)", included: true },
      ],
      ctaLink: "https://storix.com/purchase/pro",
    },
  ];

  return (
    <div
      id="pricing"
      className={`w-full py-20 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl font-black tracking-tight mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Simple Pricing for Your Business
          </h2>
          <p
            className={`text-xl text-slate-600 max-w-2xl mx-auto ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Choose the plan that fits your inventory management needs. No hidden fees, just straightforward value.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                isDark
                  ? "bg-slate-800/50 border-slate-700"
                  : "bg-white border-slate-200"
              } rounded-2xl shadow-lg ${
                plan.name === "Pro" ? "border-2 border-blue-500" : ""
              }`}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? "bg-gradient-to-br from-blue-900/20 to-purple-900/20"
                    : "bg-gradient-to-br from-blue-50 to-purple-50"
                }`}
              />
              <CardHeader className="relative z-10">
                <div className="flex justify-between items-center">
                  <h3
                    className={`text-2xl font-bold ${
                      isDark ? "text-slate-200" : "text-slate-800"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.name === "Pro" && (
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full ${
                        isDark ? "bg-blue-400 text-slate-900" : "bg-blue-500 text-white"
                      }`}
                    >
                      Most Popular
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm mt-2 ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span
                    className={`text-5xl font-black ${
                      isDark ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 space-y-6">
                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <CheckCircle
                          className={`w-5 h-5 ${
                            isDark ? "text-purple-400" : "text-purple-500"
                          }`}
                        />
                      ) : (
                        <span className="w-5 h-5 text-slate-400">—</span>
                      )}
                      <span
                        className={`text-base ${
                          isDark ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* CTA Button */}
                <Button
                  className={`w-full h-12 text-lg font-bold tracking-wide ${
                    isDark
                      ? "bg-gradient-to-r from-blue-400 to-purple-400 text-slate-900 hover:from-blue-500 hover:to-purple-500"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
                  } rounded-full shadow-lg hover:shadow-xl transition-all duration-200`}
                >
                  <a href={plan.ctaLink}>Get Started with {plan.name}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;