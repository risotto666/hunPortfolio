"use client";

import { useEffect, useRef, useState } from "react";
import {
  Globe,
  TrendingUp,
  ShieldCheck,
  Users,
  Zap,
  Award,
} from "lucide-react";

export default function WhyWebsiteSection() {
  const reasonsRef = useRef(null);
  const whyMeRef = useRef(null);
  const [reasonsVisible, setReasonsVisible] = useState(false);
  const [whyMeVisible, setWhyMeVisible] = useState(false);

  const reasons = [
    {
      icon: <Globe className="w-10 h-10 text-green-500" />,
      title: "Globális elérés",
      description:
        "Egy weboldal 0-24 órában, világszerte elérhetővé teszi vállalkozásodat, így bármikor és bárhol elérheted az ügyfeleket.",
      stat: "4,9+ milliárd",
      statDescription: "internethasználó világszerte",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-green-500" />,
      title: "Hitelesség és bizalom",
      description:
        "A fogyasztók 75%-a egy cég hitelességét a weboldala dizájnja alapján ítéli meg. Egy profi oldal bizalmat épít.",
      stat: "75%",
      statDescription: "a hitelességet weboldal alapján ítélik meg",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
      title: "Versenyelőny",
      description:
        "Tűnj ki a versenytársak közül egy egyedi, modern weboldallal, ami bemutatja márkád különleges értékeit.",
      stat: "70%",
      statDescription: "kisvállalkozásoknak van weboldaluk",
    },
    {
      icon: <Users className="w-10 h-10 text-green-500" />,
      title: "Ügyfélismeret",
      description:
        "Értékes adatokat gyűjthetsz ügyfeleid viselkedéséről és preferenciáiról, hogy javíts termékeiden és szolgáltatásaidon.",
      stat: "63%",
      statDescription: "marketing hatékonyság növekedése",
    },
    {
      icon: <Zap className="w-10 h-10 text-green-500" />,
      title: "Költséghatékony marketing",
      description:
        "A weboldalak az egyik legjobb megtérülést biztosítják marketing terén, olcsóbbak a hagyományos reklámoknál, jobb eredményekkel.",
      stat: "40%",
      statDescription: "megtérülés a hagyományos marketinghez képest",
    },
    {
      icon: <Award className="w-10 h-10 text-green-500" />,
      title: "Márkakontroll",
      description:
        "Te irányíthatod a történeted és a márkád megjelenését a világnak egy testreszabott weboldallal.",
      stat: "94%",
      statDescription: "az első benyomások dizájnhoz kötődnek",
    },
  ];

  // Set up Intersection Observer to detect when sections are in view
  useEffect(() => {
    const reasonsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReasonsVisible(true);
          reasonsObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const whyMeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyMeVisible(true);
          whyMeObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (reasonsRef.current) {
      reasonsObserver.observe(reasonsRef.current);
    }

    if (whyMeRef.current) {
      whyMeObserver.observe(whyMeRef.current);
    }

    return () => {
      if (reasonsRef.current) {
        reasonsObserver.unobserve(reasonsRef.current);
      }
      if (whyMeRef.current) {
        whyMeObserver.unobserve(whyMeRef.current);
      }
    };
  }, []);

  return (
    <section id="why-website" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-scale">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Miért <span className="text-green-500">van szükséged</span>{" "}
            weboldalra
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            A mai digitális világban az erős online jelenlét nem csupán
            választás kérdése — elengedhetetlen a sikerhez. Íme, miért van
            szüksége a vállalkozásodnak egy profi weboldalra, és hogyan tudok
            segíteni ebben.
          </p>
        </div>

        <div
          ref={reasonsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg p-8 shadow-lg border-t-2 border-green-500 hover:border-green-400 transition-colors duration-300 hover:transform hover:-translate-y-2 transition-transform duration-300 group ${
                reasonsVisible ? "reason-fade-in-scale" : "opacity-0 scale-95"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                {reason.description}
              </p>
              <div className="flex items-end gap-2 transform transition-all duration-300 group-hover:scale-105">
                <span className="text-2xl font-bold text-green-400">
                  {reason.stat}
                </span>
                <span className="text-sm text-gray-500">
                  {reason.statDescription}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={whyMeRef}
          className={`bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 md:p-12 shadow-xl border border-gray-700 hover:border-green-900/50 transition-colors duration-300 ${
            whyMeVisible ? "why-me-fade-in-scale" : "opacity-0 scale-95"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Miért <span className="text-green-500">vagyok</span> a legjobb
                választásod
              </h3>
              <p className="text-gray-300 mb-6">
                Modern webes technológiák szakértőjeként olyan weboldalakat
                készítek, amelyek nemcsak lenyűgözőek, hanem kiemelkedően jól is
                működnek. Íme, miben különböznek a szolgáltatásaim:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 group hover:transform hover:translate-x-1 transition-transform duration-300">
                  <div className="bg-green-500/20 p-1 rounded-full mt-1 group-hover:bg-green-500/40 transition-colors duration-300 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    <strong className="text-green-400 group-hover:text-green-300 transition-colors duration-300">
                      Egyedi megoldások
                    </strong>{" "}
                    – Az Ön konkrét üzleti igényeihez és céljaihoz szabva
                  </span>
                </li>
                <li className="flex items-start gap-2 group hover:transform hover:translate-x-1 transition-transform duration-300">
                  <div className="bg-green-500/20 p-1 rounded-full mt-1 group-hover:bg-green-500/40 transition-colors duration-300 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    <strong className="text-green-400 group-hover:text-green-300 transition-colors duration-300">
                      Modern technológia
                    </strong>{" "}
                    – A legújabb keretrendszereket használva az optimális
                    teljesítményért
                  </span>
                </li>
                <li className="flex items-start gap-2 group hover:transform hover:translate-x-1 transition-transform duration-300">
                  <div className="bg-green-500/20 p-1 rounded-full mt-1 group-hover:bg-green-500/40 transition-colors duration-300 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    <strong className="text-green-400 group-hover:text-green-300 transition-colors duration-300">
                      SEO-optimalizált
                    </strong>{" "}
                    – Magasabb keresőmotor-helyezésért és több látogatóért
                    építve
                  </span>
                </li>
                <li className="flex items-start gap-2 group hover:transform hover:translate-x-1 transition-transform duration-300">
                  <div className="bg-green-500/20 p-1 rounded-full mt-1 group-hover:bg-green-500/40 transition-colors duration-300 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    <strong className="text-green-400 group-hover:text-green-300 transition-colors duration-300">
                      Reszponzív design
                    </strong>{" "}
                    – Tökéletes élmény minden eszközön, mobilról asztalira
                  </span>
                </li>
                <li className="flex items-start gap-2 group hover:transform hover:translate-x-1 transition-transform duration-300">
                  <div className="bg-green-500/20 p-1 rounded-full mt-1 group-hover:bg-green-500/40 transition-colors duration-300 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    <strong className="text-green-400 group-hover:text-green-300 transition-colors duration-300">
                      Gyors, igényes munka
                    </strong>{" "}
                    – Egy egyszerű, reszponzív bemutatkozó weboldal már 50.000
                    Ft-tól elérhető, és akár 2 napon belül elkészül
                  </span>
                </li>
              </ul>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors font-medium inline-flex items-center gap-2 relative overflow-hidden group"
              >
                <span className="relative z-10">Beszéljünk a projektedről</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 relative z-10 group-hover:transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
                {/* Gomb háttér animáció */}
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100 rounded-full group-hover:rounded-none transition-all duration-500 origin-center"></div>
              </button>
            </div>
            <div className="md:w-1/3 bg-gray-700/30 p-6 rounded-lg hover:transform hover:scale-[1.02] transition-transform duration-300">
              <div className="text-center mb-4 hover:transform hover:scale-105 transition-transform duration-300">
                <span className="text-4xl font-bold text-green-500">93%</span>
                <p className="text-gray-400 text-sm">
                  az üzleti interakciók kezdete online történik
                </p>
              </div>
              <div className="h-px bg-gray-700 my-4"></div>
              <div className="space-y-3">
                <div className="text-center hover:transform hover:scale-105 hover:translate-y-[-2px] transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">88%</span>
                  <p className="text-gray-400 text-sm">
                    a vásárlók kutatnak vásárlás előtt
                  </p>
                </div>
                <div className="text-center hover:transform hover:scale-105 hover:translate-y-[-2px] transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">71%</span>
                  <p className="text-gray-400 text-sm">
                    a felhasználók mobilról böngésznek
                  </p>
                </div>
                <div className="text-center hover:transform hover:scale-105 hover:translate-y-[-2px] transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">39%</span>
                  <p className="text-gray-400 text-sm">
                    több időt töltenek a közösségi médiában, mint email
                    olvasással
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
