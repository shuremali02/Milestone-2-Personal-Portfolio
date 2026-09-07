import type { Metadata } from "next";

// The blog isn't ready to show publicly (hidden from nav). Keep every route
// under /blog out of search indexes until the content is finished.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
