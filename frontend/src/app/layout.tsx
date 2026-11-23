import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tool Lab",
  description: "Tool loan requests",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link className="brand" href="/">Tool Lab</Link>
          <nav aria-label="Main navigation">
            <Link className="font-medium tracking-tight" href="/loan-requests">Loan requests</Link>
            <Link className="font-medium tracking-tight" href="/login">Sign in</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

