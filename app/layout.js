import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Tóth Roland – Webfejlesztő | Egyedi, reszponzív weboldalak",
  description:
    "Tóth Roland webfejlesztő portfóliója. Egyedi, modern és mobilbarát weboldalak készítése React, Next.js és Tailwind CSS technológiákkal. Vállalkozásoknak, szolgáltatóknak, egyéni megoldásokkal.",
  generator: "v0.dev",
  keywords: [
    "webfejlesztés",
    "weblap készítés",
    "Next.js fejlesztő",
    "reszponzív weboldal",
    "portfólió weboldal",
    "Tailwind CSS",
    "freelancer webfejlesztő",
    "React fejlesztés",
    "weboldal készítés vállalkozásoknak",
  ],
  authors: [
    { name: "Tóth Roland", url: "https://hun-portfolio-olive.vercel.app" },
  ],
  creator: "Tóth Roland",
  publisher: "Tóth Roland",
  openGraph: {
    title: "Tóth Roland – Webfejlesztő",
    description:
      "Modern, mobilbarát weboldalak készítése Next.js és Tailwind CSS technológiákkal. Nézd meg a portfóliómat!",
    url: "https://hun-portfolio-olive.vercel.app",
    siteName: "Tóth Roland – Webfejlesztő",
    images: [
      {
        url: "https://hun-portfolio-olive.vercel.app/bg.jpg", // ezt majd cseréld saját képedre
        width: 1200,
        height: 630,
        alt: "Tóth Roland portfólió",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tóth Roland – Webfejlesztő",
    description:
      "Portfólió: egyedi, modern, mobilbarát weboldalak készítése Next.js és Tailwind CSS használatával.",
    images: ["https://hun-portfolio-olive.vercel.app/og-image.jpg"],
  },
  metadataBase: new URL("https://hun-portfolio-olive.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tóth Roland",
              url: "https://hun-portfolio-olive.vercel.app",
              image: "https://hun-portfolio-olive.vercel.app/te-fotokeped.jpg", // ha van portrékép
              sameAs: [
                "https://www.linkedin.com/in/teprofilod",
                "https://github.com/risotto666",
              ],
              jobTitle: "Webfejlesztő",
              worksFor: {
                "@type": "Organization",
                name: "Szabadúszó",
              },
              description:
                "Egyedi, modern weboldalakat készítek Next.js és Tailwind CSS segítségével.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "HU",
              },
            }),
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
