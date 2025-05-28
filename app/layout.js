import "./globals.css";

export const metadata = {
  title: "Tóth Roland – Webfejlesztő | Egyedi, reszponzív weboldalak",
  description:
    "Tóth Roland webfejlesztő portfóliója. Egyedi, modern és mobilbarát weboldalak készítése React, Next.js és Tailwind CSS technológiákkal. Vállalkozásoknak, szolgáltatóknak, egyéni megoldásokkal.",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
