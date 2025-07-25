"use client";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import QueryProvider from "@/lib/Providers/query-provider";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { extractRouterConfig } from "uploadthing/server";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <SessionProvider>
            <QueryProvider>
                <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
                <Toaster position="top-center" reverseOrder={false} />
                {children}
            </QueryProvider>
        </SessionProvider>
    );
}
