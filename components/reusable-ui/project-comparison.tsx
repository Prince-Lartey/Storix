import React from "react";
import {
  Package,
  ShoppingCart,
  Warehouse,
  BarChart2,
  Zap,
  CheckCircle,
  Rocket,
  X,
  ArrowRight,
} from "lucide-react";

interface TimelineStep {
  title: string;
  highlight: string;
  duration: number;
  icon: React.ReactNode;
  painPoint: string;
  benefit: string;
}

const ProjectComparison = ({ theme = "light" }) => {
    const steps: TimelineStep[] = [
        {
        title: "Managing",
        highlight: "Inventory Tracking",
        duration: 20,
        icon: <Package className="w-4 h-4" />,
        painPoint:
            "Manually tracking stock levels across locations leads to errors and stockouts.",
        benefit:
            "Real-time inventory tracking with automated updates across all channels.",
        },
        {
        title: "Processing",
        highlight: "Order Management",
        duration: 15,
        icon: <ShoppingCart className="w-4 h-4" />,
        painPoint:
            "Manual order processing is slow and prone to errors in sales and purchase orders.",
        benefit:
            "Automated order workflows for seamless purchase and sales order handling processes.",
        },
        {
        title: "Organizing",
        highlight: "Warehouse Management",
        duration: 18,
        icon: <Warehouse className="w-4 h-4" />,
        painPoint:
            "Lack of real-time visibility in warehouses causes inefficiencies and delays.",
        benefit:
            "Multi-warehouse management with real-time stock tracking and transfers.",
        },
        {
        title: "Analyzing",
        highlight: "Reporting & Analytics",
        duration: 12,
        icon: <BarChart2 className="w-4 h-4" />,
        painPoint:
            "Manual reporting on inventory and sales is time-consuming and inaccurate.",
        benefit:
            "Customizable dashboards with instant inventory and sales analytics.",
        },
        {
        title: "Automating",
        highlight: "Workflows",
        duration: 14,
        icon: <Zap className="w-4 h-4" />,
        painPoint:
            "Repetitive tasks like reordering and stock updates waste time and resources.",
        benefit:
            "Automated reordering, stock updates, and notifications for efficiency.",
        },
    ];

    const totalHours = steps.reduce((acc, step) => acc + step.duration, 0);

    return (
        <section className="w-full bg-teal-50/20">
        {/* Updated Header Section */}
        <div className="w-full max-w-6xl mx-auto py-20 px-6 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8">
            Why Struggle with Manual
            <br />
            Inventory
            <span className="inline-block bg-gradient-to-r from-orange-100 via-purple-100 to-purple-200 px-4 rounded-lg">
                Management?
            </span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how Storix revolutionizes inventory management with
            production-ready features that eliminate manual processes.
            <br />
            Save up to {totalHours} hours of operational time
            </p>
        </div>

        {/* Comparison Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
            <div className="grid lg:grid-cols-2 gap-8">
            {/* Without Storix */}
            <div className="relative">
                <div className="sticky top-8 bg-white rounded-3xl border border-rose-100 overflow-hidden">
                <div className="p-6 border-b border-rose-100 bg-gradient-to-b from-rose-50/50">
                    <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
                        <X className="w-5 h-5 text-rose-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                        Without Storix
                    </h3>
                    </div>
                    <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-rose-500">
                        {totalHours} Hours
                    </span>
                    <span className="text-slate-600">of manual work</span>
                    </div>
                </div>
                <div className="p-6">
                    <ul className="space-y-6">
                    {steps.map((step, index) => (
                        <li key={index} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                            {step.icon}
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-slate-900">
                                {step.title}{" "}
                                <span className="font-bold">{step.highlight}</span>
                            </h4>
                            <span className="text-rose-500 text-sm">
                                ~ {step.duration}hrs
                            </span>
                            </div>
                            <p className="text-slate-600 text-sm">
                            {step.painPoint}
                            </p>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>

            {/* With Storix */}
            <div className="relative">
                <div className="sticky top-8 bg-white rounded-3xl border border-emerald-100 overflow-hidden">
                <div className="p-6 border-b border-emerald-100 bg-gradient-to-b from-emerald-50/50">
                    <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                        With Storix
                    </h3>
                    </div>
                    <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-emerald-500">
                        Instant Setup
                    </span>
                    <span className="text-slate-600">with ready features</span>
                    </div>
                </div>
                <div className="p-6">
                    <ul className="space-y-6">
                    {steps.map((step, index) => (
                        <li key={index} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-slate-900">
                                {step.title}{" "}
                                <span className="font-bold">{step.highlight}</span>
                            </h4>
                            <ArrowRight className="w-4 h-4 text-emerald-500" />
                            <span className="text-emerald-500 text-sm">
                                Ready to use
                            </span>
                            </div>
                            <p className="text-slate-600 text-sm">{step.benefit}</p>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default ProjectComparison;