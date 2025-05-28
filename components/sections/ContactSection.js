"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lépj <span className="text-green-500">Kapcsolatba</span> Velem
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Van egy ötleted, vagy szeretnél együtt dolgozni? Keress bátran, és
            hamarosan visszajelzek.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-6 text-green-400">
              Elérhetőségek
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Telefon</h4>
                  <p className="text-gray-400">+1 (123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <p className="text-gray-400">troli0723@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Helyszín</h4>
                  <p className="text-gray-400">Magyarország</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-6 text-green-400">
              Kövess Facebookon, Instagramon, LinkedIn-en
            </h3>
            <div className="flex gap-4">
              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  ),
                  link: "https://www.facebook.com/roland.toth.75",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.292 3.438 9.773 8.205 11.365.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.388-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.833 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.123-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.137 3 .404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.65.243 2.872.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.922.43.372.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .322.218.694.825.576C20.565 22.068 24 17.584 24 12.297 24 5.67 18.627.297 12 .297z" />
                    </svg>
                  ),
                  link: "https://github.com/risotto666",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.761 2.24 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.76-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.783 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.072-.928-1.5-1.5-1.5s-1.5.428-1.5 1.5v4.5h-3v-9h3v1.268c.428-.731 1.195-1.268 2.25-1.268 1.713 0 3 1.285 3 3v5z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={`${item.link}`}
                  target="blank"
                  className="bg-green-500/20 p-3 rounded-lg hover:bg-green-500 hover:text-white transition"
                  aria-label="Közösségi média link"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-6 text-green-400">
              Üzenet Küldése
            </h3>
            <form
              action="#"
              className="space-y-6"
              onSubmit={() => {
                alert("Küldve");
              }}
            >
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Név
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Írd be a neved"
                  required
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email cím
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Írd be az email címed"
                  required
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Üzenet
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Írd ide az üzeneted"
                  required
                  className="w-full rounded-md border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-block rounded bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600 transition"
              >
                Küldés
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
