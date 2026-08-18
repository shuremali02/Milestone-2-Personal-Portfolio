import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Syed Shurem Ali Portfolio",
  description: "Let's build something real. Tell me what you're building — from a full product to an AI feature or a deployment that just works, I take it from idea to live URL.",
  openGraph: {
    title: "Contact - Syed Shurem Ali Portfolio",
    description: "Let's build something real. Tell me what you're building — from a full product to an AI feature or a deployment that just works, I take it from idea to live URL.",
    type: "website",
    url: "https://syed-shurem-ali.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
