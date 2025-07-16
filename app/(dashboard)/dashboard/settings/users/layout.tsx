import { checkPermission } from "@/config/useAuth";
import React, { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  await checkPermission("users_invites.read");
  return <div>{children}</div>;
}
