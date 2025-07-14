import Link from "next/link";
import React from "react";
import StorixLogo from "./kit-logo";

export default function Logo({
  variant = "light",
  href = "/",
}: {
  variant?: "dark" | "light";
  href?: string;
}) {
  if (variant === "light") {
    return (
      <Link href={href} className="flex items-center space-x-2">
        <StorixLogo width={200} height={60} />
      </Link>
    );
  } else {
    return (
      <Link href={"/"} className="flex items-center space-x-2">
        <StorixLogo width={200} height={60} theme="dark" />
      </Link>
    );
  }
}
