"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { BarChart2, ChevronDown, Database, Menu, Merge, Package, ShoppingCart, Truck, Users, Warehouse, Zap } from "lucide-react";

import Logo from "../global/Logo";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/lib/generateInitials";
import Link from "next/link";

const features = [
    {
        icon: Package,
        title: "Inventory Tracking",
        description:
        "Real-time tracking of stock levels, low stock alerts, and automated inventory updates across multiple channels.",
        href: "/features/inventory-tracking",
    },
    {
        icon: ShoppingCart,
        title: "Order Management",
        description:
        "Streamline order processing with purchase orders, sales orders, and automated order fulfillment workflows.",
        href: "/features/order-management",
    },
    {
        icon: Warehouse,
        title: "Warehouse Management",
        description:
        "Efficiently manage multiple warehouses, track stock movements, and optimize storage with intuitive tools.",
        href: "/features/warehouse-management",
    },
    {
        icon: BarChart2,
        title: "Advanced Reporting",
        description:
        "Generate detailed reports on inventory, sales, and performance with customizable dashboards and analytics.",
        href: "/features/reporting",
    },
    {
        icon: Merge,
        title: "E-commerce Integrations",
        description:
        "Seamlessly connect with e-commerce platforms like Shopify, WooCommerce, and Amazon for unified inventory control.",
        href: "/features/ecommerce-integrations",
    },
    {
        icon: Truck,
        title: "Shipping Management",
        description:
        "Integrate with shipping carriers to manage rates, print labels, and track shipments directly from the system.",
        href: "/features/shipping-management",
    },
    {
        icon: Users,
        title: "Multi-User Access",
        description:
        "Role-based access control for teams, allowing secure collaboration and permission management.",
        href: "/features/multi-user-access",
    },
    {
        icon: Database,
        title: "Data Management",
        description:
        "Robust database management with tools for importing, exporting, and organizing product and supplier data.",
        href: "/features/data-management",
    },
    {
        icon: Zap,
        title: "Automation Workflows",
        description:
        "Automate repetitive tasks like reordering, stock updates, and notifications to save time and reduce errors.",
        href: "/features/automation-workflows",
    },
];

export default function SiteHeader({ session }: { session: Session | null }) {
    const [open, setOpen] = React.useState(false);
    const [showFeatures, setShowFeatures] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
            <div className="container max-w-7xl mx-auto flex h-14 items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Logo />
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[800px] p-4">
                                        <div className="flex items-center justify-between mb-4 pb-2 border-b">
                                            <h4 className="text-lg font-medium">Features</h4>
                                            <Link
                                                href="/features"
                                                className="text-sm text-blue-500 hover:underline"
                                            >
                                                View all
                                            </Link>
                                        </div>
                                        <div className="grid gap-4 md:grid-cols-3 ">
                                            {features.map((feature, index) => (
                                                <Link
                                                key={index}
                                                href={`/feature/${feature.title
                                                    .toLowerCase()
                                                    .replace(/\s+/g, "-")}`}
                                                className="block group"
                                                >
                                                <div className="flex items-start gap-4">
                                                    <div className="p-2 bg-muted rounded-md group-hover:bg-muted/80">
                                                    <feature.icon className="h-6 w-6 text-blue-500" />
                                                    </div>
                                                    <div>
                                                    <h5 className="font-medium mb-1 group-hover:text-blue-500">
                                                        {feature.title}
                                                    </h5>
                                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                                        {feature.description}
                                                    </p>
                                                    </div>
                                                </div>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="mt-6 pt-4 border-t">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-medium mb-1">Get started</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        Am really excited for all these features out of the
                                                        box
                                                    </p>
                                                </div>
                                                <Button asChild variant="secondary">
                                                    <Link
                                                        target="_blank"
                                                        href="/register"
                                                    >
                                                        Get started
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/#pricing" legacyBehavior passHref>
                                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                        Pricing
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/agency" legacyBehavior passHref>
                                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                                        Agency
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                {session ? (
                    <Button asChild variant={"ghost"}>
                        <Link href="/dashboard">
                            <Avatar>
                                <AvatarImage
                                    src={session?.user?.image ?? ""}
                                    alt={session?.user?.name ?? ""}
                                />
                                    <AvatarFallback>
                                    {getInitials(session?.user?.name)}
                                </AvatarFallback>
                            </Avatar>
                            <span className="ml-3">Dashboard</span>
                        </Link>
                    </Button>
                ) : (
                    <div className="hidden md:flex items-center space-x-4">
                        <Button asChild variant="ghost">
                            <Link href={"/login"}>Log in</Link>
                        </Button>
                        <Button>
                            <Link href="/register">Signup</Link>
                        </Button>
                    </div>
                )}

                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full p-0">
                        <SheetHeader className="border-b p-4">
                            <SheetTitle className="text-left">Navigation</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col py-4">
                            <Link
                                href="/"
                                className="px-4 py-2 text-lg font-medium hover:bg-accent"
                                onClick={() => setOpen(false)}
                            >
                                Home
                            </Link>
                            <button
                                className="flex items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left"
                                onClick={() => setShowFeatures(!showFeatures)}
                            >
                                Features
                                <ChevronDown
                                className={cn(
                                    "h-5 w-5 transition-transform",
                                    showFeatures && "rotate-180"
                                )}
                                />
                            </button>
                            {showFeatures && (
                                <div className="px-4 py-2 space-y-4">
                                {features.map((feature, index) => (
                                    <Link
                                    key={index}
                                    href={`/feature/${feature.title
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                    className="flex items-start gap-4 py-2"
                                    onClick={() => setOpen(false)}
                                    >
                                    <div className="p-2 bg-muted rounded-md">
                                        <feature.icon className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h5 className="font-medium mb-1">{feature.title}</h5>
                                        <p className="text-sm text-muted-foreground">
                                            {feature.description}
                                        </p>
                                    </div>
                                    </Link>
                                ))}
                                </div>
                            )}
                            <Link
                                href="/#pricing"
                                className="px-4 py-2 text-lg font-medium hover:bg-accent"
                                onClick={() => setOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/how-it-works"
                                className="px-4 py-2 text-lg font-medium hover:bg-accent"
                                onClick={() => setOpen(false)}
                            >
                                How it works
                            </Link>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
                            <div className="grid gap-2">
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => setOpen(false)}
                                >
                                    Log in
                                </Button>
                                <Button className="w-full" onClick={() => setOpen(false)}>
                                    Sign up
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
