// import Iframe from "react-iframe";
import { GridBackground } from "@/components/reusable-ui/grid-background";
import ProjectComparison from "@/components/reusable-ui/project-comparison";
import ReUsableHero from "@/components/reusable-ui/reusable-hero";
import {
  Package,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import React from "react";
import PricingCard from "@/components/frontend/single-tier-pricing";
import FAQ from "@/components/frontend/FAQ";
import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";
import FeatureTabs from "@/components/frontend/SmoothTabs";
import { getCurrentUsersCount } from "@/actions/users";

export default async function page() {
    const currentUsers = await getCurrentUsersCount();
    return (
        <section>
            <ReUsableHero
                theme="dark"
                announcement={{
                    text: "Introducing Storix - Smart Inventory Management",
                }}
                title={
                    <>
                        Smart Inventory Management
                    <br />
                        Built for Modern Business
                    </>
                }
                mobileTitle="Smart Inventory Management for Modern Business"
                subtitle="Transform your inventory operations with real-time tracking, automated workflows, and intelligent analytics. Everything you need to manage stock efficiently and scale your business."
                buttons={[
                    {
                        label: "Start Free Trial",
                        href: "/register",
                        primary: true,
                    },
                    {
                        label: "Watch Demo",
                        href: "/#demo",
                    },
                ]}
                icons={[
                    { icon: Package, position: "left" },
                    { icon: BarChart3, position: "right" },
                    { icon: TrendingUp, position: "center" },
                ]}
                backgroundStyle="blue"
                className="min-h-[70vh]"
                userCount={currentUsers > 1 ? currentUsers : null}
            />
            {/* <GridBackground>
                <div className="px-8 py-16 ">
                    <TechStackGrid />
                </div>
            </GridBackground> */}
            <div className="py-16 max-w-6xl mx-auto px-8">
                <div className="relative rounded-lg overflow-hidden">
                    <BorderBeam />
                    <Image
                        src="/images/dash-2.webp"
                        alt="This is the dashbaord Image"
                        width={1775}
                        height={1109}
                        className="w-full h-full rounded-lg object-cover  border shadow-2xl"
                    />
                </div>
            </div>
            <ProjectComparison />
            <GridBackground className="">
                <FeatureTabs />
            </GridBackground>

            <div id="demo" className="py-16 max-w-6xl mx-auto relative">
                {/* <Iframe
                    url="https://www.youtube.com/embed/TcyKfjikcIA?si=naix1jg9I2r0CnSu"
                    width="100%"
                    className="h-[32rem] rounded-lg"
                    display="block"
                    position="relative"
                /> */}
                {/* <div className="pb-16">
                    <Showcase />
                </div> */}
                <div className="py-8">
                    <PricingCard />
                </div>
                {/* <div className="py">
                    <CustomizationCard theme="light" />
                </div> */}
            </div>
            <FAQ />
        </section>
    );
}
