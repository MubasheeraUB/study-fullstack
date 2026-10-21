
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <nav>
        {navLinks.map((item) => {
          const isActive =
            pathname === item.href ||
            (pathname.startsWith(item.href + "/") &&
              item.href !== "/");

          return (
            <Link
              className={
                isActive
                  ? "font-bold mr-4"
                  : "text-blue-500 mr-4"
              }
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {children}

      <footer
        style={{
          backgroundColor: "ghostwhite",
          padding: "1rem",
        }}
      >
        <p>Footer</p>
      </footer>
    </>
  );
}
