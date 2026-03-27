import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Torres Workflows — AI Integration for Business",
  description:
    "We help implement AI into existing business processes. Automate workflows, analyze documents, and unlock efficiency with purpose-built AI integrations.",
  keywords: [
    "AI integration",
    "business automation",
    "workflow automation",
    "AI consulting",
    "document analysis",
    "process automation",
  ],
  openGraph: {
    title: "Torres Workflows — AI Integration for Business",
    description:
      "We help implement AI into existing business processes.",
    url: "https://torresworkflows.com",
    siteName: "Torres Workflows",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Torres Workflows — AI Integration for Business",
    description: "We help implement AI into existing business processes.",
  },
  metadataBase: new URL("https://torresworkflows.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
