"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Smartphone, Code, User } from "lucide-react";

export default function SzolgaltatasokSzekcio() {
  const servicesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const szolgaltatasok = [
    {
      icon: <Globe className="w-12 h-12 text-green-500" />,
      title: "Webfejlesztés",
      description:
        "Egyedi weboldalak React és Next.js alapokon, kiemelt figyelemmel a teljesítményre, SEO-ra és a felhasználói élményre.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-green-500" />,
      title: "Reszponzív Dizájn",
      description:
        "Mobilra optimalizált weboldalak, melyek minden eszközön és képernyőméreten tökéletesen működnek és néznek ki.",
    },
    {
      icon: <Code className="w-12 h-12 text-green-500" />,
      title: "Frontend Fejlesztés",
      description:
        "Tiszta, könnyen karbantartható kód modern JavaScript, React és Tailwind CSS használatával, gyönyörű felhasználói felületekért.",
    },
    {
      icon: <User className="w-12 h-12 text-green-500" />,
      title: "UI/UX Dizájn",
      description:
        "Intuitív felhasználói felületek és élmények, amelyek lekötik a látogatókat és növelik a konverziós arányokat.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2H5z"
          />
        </svg>
      ),
      title: "Webalkalmazások",
      description:
        "Dinamikus webalkalmazások hitelesítéssel, adatbázis-integrációval (pl. Supabase) és további funkciókkal.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Teljesítmény-optimalizálás",
      description:
        "Gyorsítsd fel meglévő weboldalad modern optimalizációs technikákkal a jobb felhasználói élményért és SEO-ért.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 ${
            isVisible ? "fade-in-scale" : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Amit <span className="text-green-500">Kínálok</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Szolgáltatásaim segítségével vállalkozások és magánszemélyek erős
            online jelenlétet építhetnek modern webtechnológiák alkalmazásával.
          </p>
        </div>

        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {szolgaltatasok.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-green-500/10 transition-all duration-300 overflow-hidden group ${
                isVisible ? "service-fade-in-scale" : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>

              <div className="w-0 group-hover:w-full h-1 bg-green-500/50 mt-4 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
