"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    Clock,
    Calendar,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { AuthenticatedUser } from "@/config/useAuth";

import { LucideIcon } from "lucide-react";
import { sidebarLinks } from "@/config/sidebar";

// Define navigation types
export interface ISidebarLink {
  title: string;
  href?: string;
  icon: LucideIcon;
  dropdown: boolean;
  permission: string; // Required permission to view this item
  dropdownMenu?: MenuItem[];
}

type MenuItem = {
  title: string;
  href: string;
  permission: string; // Required permission to view this menu item
};

export default function DefaultUserDashboard({
  user,
}: {
  user: AuthenticatedUser;
}) {
    const hasPermission = (permission: string): boolean => {
        return user.permissions?.includes(permission) ?? false;
    };

    // Filter sidebar links based on permissions
    const filterSidebarLinks = (links: ISidebarLink[]): ISidebarLink[] => {
        return links
        .filter((link) => hasPermission(link.permission))
        .map((link) => ({
            ...link,
            dropdownMenu: link.dropdownMenu?.filter((item) =>
                hasPermission(item.permission)
            ),
        }))
        .filter(
            (link) => !link.dropdown || (link.dropdownMenu && link.dropdownMenu.length > 0)
        );
    };

    const filteredLinks = filterSidebarLinks(sidebarLinks);
    console.log(filteredLinks);
    const [greeting, setGreeting] = useState("");
    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");
    const userName = user.name;

    useEffect(() => {
        const getCurrentGreeting = () => {
            const hour = new Date().getHours();
            if (hour >= 5 && hour < 12) return "Good morning";
            if (hour >= 12 && hour < 18) return "Good afternoon";
            return "Good evening";
        };

        const updateDateTime = () => {
            const now = new Date();
            setCurrentTime(
                now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            );
            setCurrentDate(
                now.toLocaleDateString([], {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                })
            );
        };

        setGreeting(getCurrentGreeting());
        updateDateTime();

        // Update time every minute
        const interval = setInterval(updateDateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-4 bg-blue-50/30">
        {/* Header Section */}
            <div className="grid gap-4 md:grid-cols-1">
                <Card className="border-blue-200 shadow-sm">
                    <CardHeader className="pb-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-t-lg">
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-2xl font-bold tracking-tight text-blue-900">
                                    {greeting}, {userName}!
                                </CardTitle>
                                <CardDescription className="text-blue-700 mt-1">
                                    Welcome to your store dashboard
                                </CardDescription>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-medium text-blue-800 flex items-center">
                                    <Clock className="h-4 w-4 mr-1 text-blue-500" />
                                    {currentTime}
                                </div>
                                <div className="text-xs text-blue-600 flex items-center mt-1">
                                    <Calendar className="h-3 w-3 mr-1 text-blue-400" />
                                    {currentDate}
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            </div>

            {/* Main Navigation Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {filteredLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                        <Card
                            key={index}
                            className="hover:bg-blue-50 transition-colors border-blue-200 shadow-sm group"
                        >
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-blue-800">
                                    Manage {link.title}
                                </CardTitle>
                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                    {<Icon className="h-4 w-4 text-blue-600" />}
                                </div>
                            </CardHeader>
                            <CardContent>
                                {!link.dropdown && link.href && (
                                    <Link
                                        href={link.href}
                                        className="text-xl font-bold text-blue-900 hover:text-blue-700 transition-colors"
                                    >
                                        View {link.title}
                                    </Link>
                                )}
                                {link.dropdown && link.dropdownMenu && (
                                    <div className="space-y-2">
                                        {link.dropdownMenu.map((item, itemIndex) => (
                                            <Link
                                                key={itemIndex}
                                                href={item.href}
                                                className="block text-sm text-blue-700 hover:text-blue-900 hover:underline py-1"
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                            {!link.dropdown && link.href && (
                                <CardFooter className="pt-0">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 p-0"
                                    >
                                        Manage →
                                    </Button>
                                </CardFooter>
                            )}
                        </Card>
                    );
                })}
            </div>
        </main>
    );
}
